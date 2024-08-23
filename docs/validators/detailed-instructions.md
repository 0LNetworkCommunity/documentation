---
title: "Running a Validator"
sidebar_label: 'Running a Validator'
sidebar_position: 3
---

# Running a Validator

### Requirements
- TWO unix hosts, one for Validator Node, and one for the Private Fullnode ("VFN").
libra code targets Ubuntu 22.04.
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

The following ports must be open: `6180`, `6181`

- `6180` should be open on all interfacess `0.0.0.0/0`, it's for consensus and uses noise encryption.
- `6181` is for the private validator fullnode network ("VFN"), the firewall should only allow the IP of the fullnode to access this port.

#### VFN
:::note
This node does not serve transactions and does not participate in consensus, it relays data out of the validator node, and transactions into the validator.
:::

The following ports must be open: `6181`, `6182`, `8080`

- `6181` is for the private validator fullnode network ("VFN"), it should only allow traffic from the Validator node IP address above.
- `6182` is for the the PUBLIC fullnode network. This is how the public nodes that will be serving JSON-RPC on the network will receive data and submit transactions to the network.
- `8080` is the RPC port and we suggest VFNs and public fullnodes to serve this port by default for operability.


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
source ~/.bashrc
```


### Create Binaries

It is recommended to perform the steps from 1.7 onwards inside tmux. Short tmux instruction:

1.6 Start a new [tmux](#tmux-basics) session

```bash
# start a new tmux session
tmux new -t libra-setup
```


1.7 Clone this repo:
```
git clone https://github.com/0LNetworkCommunity/libra-framework
cd ~/libra-framework
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
# Copy libra binaries to cargo bins path
sudo cp -f ~/libra-framework/target/release/libra* ~/.cargo/bin/

# Check libra execution and version
libra version
```



### You will now need sync your validator to the latest block and register your validator.

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

LimitNPROC=1048576
LimitNOFILE=1048576

#Environment="RUST_LOG=warn"
WorkingDirectory=/home/nodeuser/.libra
ExecStart=/home/nodeuser/libra-framework/target/release/libra node --config-path /home/nodeuser/.libra/validator.yaml

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

`sudo systemctl enable libra-node`

`sudo systemctl start libra-node`

**Check the service is operating correctly**

`sudo systemctl status libra-node`



### TMUX basics

1. New session: `tmux new -t <SESSION_NAME>`
2. Detach from Session: press Ctrl-b and then d
3. rejoin unnamed session, if only one session exists: `tmux a`
4. rejoin unnamed session by id: `tmux ls` to get the ID and then `tmux a -t <SESSION_ID>`
5. rejoin named session: `tmux a -t <SESSION_NAME>`
6. kill session: attach to the session --> press Ctrl-b, then type `:kill-session` and press ENTER

---
