---
sidebar_position: 2
sidebar_label: "Running a Validator"
description: 'Specifications and setting up a validator on the 0L Network'
---

# Running a Validator

## Specifications
:::note
A VFN is not currently used but will be used in production
:::

### Requirements
- TWO unix hosts, one for Validator Node, and one for the Private Fullnode ("VFN").
libra code targets Ubuntu 22.4
- Recommended specs:
  - Validator: 300GB SSD harddrive, 8 core CPU, 16G RAM
  - VFN: 100G storage, 8 core CPU, 16G RAM
- Separate static IP addresses for the machines, or appropriate DNS mapping.

### Firewall
:::note
Optionally open port `8080` to allow outside access to the API that runs as part of the libra service
:::

#### Validator

The following ports must be open: 6179, 6180

- `6180` should be open on all interfacess `0.0.0.0/0`, it's for consensus and uses noise encryption.
- `6179` is for the private validator fullnode network ("VFN"), the firewall should only allow the IP of the fullnode to access this port.

#### VFN
:::note
this node does not serve transactions, and does not participate in consensus, it relays data out of the validator node, and transactions into the validator.
:::

The following ports must be open: `6178`, `6179`

- `6178` is for the the PUBLIC fullnode network. This is how the public nodes that will be serving JSON-RPC on the network will receive data and submit transactions to the network.
- `6179` is for the private validator fullnode network ("VFN"), it should only allow traffic from the Validator node IP address above.


### TMUX basics

1. New session: `tmux new -s <SESSION_NAME>`
2. Detach from Session: press Ctrl-b and then d
3. rejoin unnamed session, if only one session exists: `tmux a`
4. rejoin unnamed session by id: `tmux ls` to get the ID and then `tmux a -t <SESSION_ID>`
5. rejoin named session: `tmux attach -t <SESSION_NAME>`
6. kill session: attach to the session --> press Ctrl-b, then type `:kill-session` and press ENTER

## Setting up a Validator

These instructions target Ubuntu.

1.1. Set up an Ubuntu host with `ssh` access, e.g. in a cloud service provider.

1.2. Associate a static IP with your host, this will be tied to you account. This address will be shared on the chain, so that other nodes will be able to find you through the peer discovery mechanism.

1.3. Libra binaries should be run in a linux user that has very narrow permissions. Before you can create binaries you'll need some tools installed probably by `sudo` and likely in root.


1.4. Use `tmux` to persist the terminal session for build, as well as for running the nodes and tower app. Also this setup requires `git` and `make`, which might be installed already on your host. If not, perform the following steps now:

```bash
sudo apt install -y git tmux jq build-essential cmake clang llvm libgmp-dev pkg-config libssl-dev lld libpq-dev
```

1.5. Create the linux user that will run the libra services.

We will create a user called `node` which has no password (can only be accessed initially by sudo).

```bash
sudo useradd node -m -s /bin/bash
```

You can then access that account via `sudo su node`. Or setup ssh keys under `/home/node/.ssh/authorized_keys`.

1.6. Install Rust on the `node` user

```bash
sudo su node

# you are now in the node user
curl https://sh.rustup.rs -sSf | sh -s -- --default-toolchain stable -y

# restart your bash instance to pickup the cargo paths
. ~/.bashrc

# install some command-line tools
cargo install toml-cli
```

### Create Binaries

It is recommended to perform the steps from 1.7 onwards inside tmux. Short tmux intruction:

1.7 Start a new [tmux](#tmux-basics) session

```bash
# start a new tmux session
tmux new -s installation
```

1.8. Clone this repo:

`git clone https://github.com/0LNetworkCommunity/libra-framework.git`

1.9. Build the source and install binaries:
This takes a while, ensure your are still inside the `tmux` session to avoid your session gets disconnected.

```bash
cd </path/to/libra-source/> #eg ~/libra-framework 
make bins install
```

1.10 Making the `libra` binary globally executable and persistent

:::note
This assumes the `libra` binary is already built and located at `~/libra-framework/target/release/libra`.
:::
```
#Make the binary executable
chmod +x ~/libra-framework/target/release/libra

#Link the binary for global access
sudo ln -s ~/libra-framework/target/release/libra /usr/local/bin/

#Verification
libra --version 
```


1.11. Setup as a service(optional)
:::note
use can this service template instead of running in tmux
:::
`sudo nano /lib/systemd/system/libra-node.service`

#### Systemd template

```
[Unit]
Description=Libra Node Service

[Service]
User=nodeuser
Group=nodeuser

LimitNOFILE=500000

#Environment="RUST_LOG=error"
WorkingDirectory=/home/nodeuser/.libra
ExecStart=/usr/local/bin/libra --config-path ~/home/nodeuser/.libra/validator.yaml

Restart=on-failure
RestartSec=3s

StandardOutput=journal
StandardError=journal
SyslogIdentifier=libra-node

[Install]
WantedBy=multi-user.target
Alias=libra-node.service

# config the service and start
sudo systemctl enable libra-node
sudo systemctl start libra-node
```

1.12 Reload and start system service

`sudo systemctl daemon-reload`

`sudo systemctl enable libra-node.service`

`sudo systemctl start libra-node.service`

1.12 Check the service is operating correctly

`sudo systemctl status libra-node.service`


### You will now need [sync your validator to the latest block](/validators/restore) and [register your validator]((/validators/register)).

---