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
During testnet and devnet operation, you will likely open port `8080` on your Validator to allow outside access to the RPC endpoint, which is an API that runs as part of the libra service. 
VFNs and public fullnodes should by default serve port `8080` RPC for operability.
:::

#### Validator

The following ports must be open: 6181, 6180

- `6180` should be open on all interfacess `0.0.0.0/0`, it's for consensus and uses noise encryption.
- `6181` is for the private validator fullnode network ("VFN"), the firewall should only allow the IP of the fullnode to access this port.

#### VFN
:::note
this node does not serve transactions, and does not participate in consensus, it relays data out of the validator node, and transactions into the validator.
:::

The following ports must be open: `6182`, `6181`

- `6182` is for the the PUBLIC fullnode network. This is how the public nodes that will be serving JSON-RPC on the network will receive data and submit transactions to the network.
- `6181` is for the private validator fullnode network ("VFN"), it should only allow traffic from the Validator node IP address above.


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
sudo apt update
sudo apt install -y git tmux jq build-essential cmake clang llvm libgmp-dev pkg-config libssl-dev lld libpq-dev
```


1.5. Install Rust 

```bash
curl https://sh.rustup.rs -sSf | sh -s -- --default-toolchain stable -y

# restart your bash instance to pickup the cargo paths
. ~/.bashrc

# install some command-line tools
cargo install toml-cli
```

### Create Binaries

It is recommended to perform the steps from 1.7 onwards inside tmux. Short tmux instruction:

1.6 Start a new [tmux](#tmux-basics) session

```bash
# start a new tmux session
tmux new -s installation
```

1.7 Clone this repo:
```
git clone https://github.com/0LNetworkCommunity/libra-framework.git
cd ~/libra-framework
git fetch --all && git checkout release-6.9.0-rc.7
```
1.8 Build the source and install binaries:
This takes a while, ensure your are still inside the `tmux` session to avoid your session gets disconnected.

```bash
cargo build --release -p libra 
```

1.9 Making the `libra` binary globally executable and persistent

:::note
This assumes the `libra` binary is already built and located at `~/libra-framework/target/release/libra`.
:::
```
echo 'export PATH="$HOME/libra-framework/target/release:$PATH"' >> ~/.bashrc
source ~/.bashrc

#Verification
libra --version 
```

### File Descriptor Limit:
Increase file descriptors:

`ulimit -n 1048576`

Make limits permanent:

`sudo nano /etc/security/limits.conf`

Append to the end of the limits.conf. replace vfnusername with the output from whoami:
```
vfnusername soft    nproc          1048576
vfnusername soft    nproc          1048576
vfnusername hard    nproc          1048576
vfnusername soft    nofile         1048576
```

Also modify the user.conf:

`sudo nano /etc/systemd/user.conf`

Uncomment and change the line with DefaultLimitNOFILE to:

`DefaultLimitNOFILE=1048576`

Also modify the system.conf:

`sudo nano /etc/systemd/system.conf`

Uncomment and change the line with DefaultLimitNOFILE to:

`DefaultLimitNOFILE=1048576`

Verify your file handlers have been increased:

`ulimit -n`

The file descriptor limit change should now persist.


### You will now need [sync your validator to the latest block](/validators/restore) and [register your validator](/validators/register).

#### Start Node

`libra node --config-path ~/.libra/validator.yaml`

### Setup as a service(optional)

**Install Service**
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
ExecStart=/home/nodeuser/libra-framework/target/release/libra --config-path /home/nodeuser/.libra/validator.yaml

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

**Reload and start system service**

`sudo systemctl daemon-reload`

`sudo systemctl enable libra-node.service`

`sudo systemctl start libra-node.service`

**Check the service is operating correctly**

`sudo systemctl status libra-node.service`




---
