---
title: "Running a Validator Node"
sidebar_label: 'Running a Validator Node'
sidebar_position: 3
---

# **Running a Validator Node.** 
Running a VFN-Validator Fullnode Network/Private Fullnode has a separate guide.

### **Requirements**
- TWO unix hosts: one for Validator Node and one for the VFN.
- Recommended specs:
  - Validator Node: 300GB SSD harddrive, 8 core CPU, 16G RAM
  - VFN: 100G storage, 8 core CPU, 16G RAM
- Separate static IP addresses for the machines, or appropriate DNS mapping.

### **Libra code targets Ubuntu 22.04.**

### Firewall
:::note
During testnet and devnet operation, you will likely open port `8080` on your Validator Node to allow outside access to the RPC endpoint, which is an API that runs as part of the libra service.
VFNs and public fullnodes should by default serve port `8080` RPC for operability.
:::

#### **Validator Node**

The following ports must be open: `6180`, `6181`, meaning:

- `6180` should be open on all interfacess `0.0.0.0/0`, it's for consensus and uses noise encryption.
- `6181` is for the VFN, the firewall should only allow the **IP of the Validator node** to access this port.

#### **VFN**
:::note
This node does not serve transactions and does not participate in consensus, it relays data out of the validator node, and transactions into the validator.
:::

The following ports must be open: `6181`, `6182`, `8080`, meaning:

- `6181` is for the VFN, it should only allow traffic from the Validator Node IP address above.
- `6182` is for the the PUBLIC fullnode network. This is how the public nodes that will be serving JSON-RPC on the network will receive data and submit transactions to the network.
- `8080` is the RPC port and we suggest VFNs and public fullnodes to serve this port by default for operability.

## **Setting up a Validator**

These instructions target Ubuntu 22.04.

1.1. Set up an Ubuntu host with `ssh` access, e.g. in a cloud service provider.

1.2. Associate a static IP with your host, this will be tied to you account. This address will be shared on the chain, so that other nodes will be able to find you through the peer discovery mechanism. Libra binaries should be run in a linux user that has **very narrow permissions**. Before you can create binaries you'll need some tools installed probably by `sudo` and likely in root.

1.3. Use `tmux` to persist the terminal session for build, as well as for running the nodes and tower app. Also this setup requires `git` and `make`, which might be installed already on your host. If not, perform the following steps now:

```bash
sudo apt update
sudo apt install -y git tmux jq build-essential cmake clang llvm libgmp-dev pkg-config libssl-dev lld libpq-dev
```

1.4. Install Rust

```bash
curl https://sh.rustup.rs -sSf | sh -s -- --default-toolchain stable -y

# restart your bash instance to pickup the cargo paths

source ~/.bashrc
```

1.5. Create Binaries

It is recommended to perform the steps from 1.7 onwards inside tmux. Short tmux instruction:

1.6 Start a new [tmux](#tmux-basics) session

```bash
# start a new tmux session
tmux new -t libra-setup
```

### TMUX basics

1. New session: `tmux new -t <SESSION_NAME>`
2. Detach from Session: press Ctrl-b and then d
3. rejoin unnamed session, if only one session exists: `tmux a`
4. rejoin unnamed session by id: `tmux ls` to get the ID and then `tmux a -t <SESSION_ID>`
5. rejoin named session: `tmux a -t <SESSION_NAME>`
6. kill session: attach to the session --> press Ctrl-b, then type `:kill-session` and press ENTER
# You can read more about tmux commands here: (https://github.com/tmux/tmux/wiki/Getting-Started).

1.7 Clone this repo:
```
git clone https://github.com/0LNetworkCommunity/libra-framework
# go to libra-framework directory
cd ~/libra-framework
```
1.8 Build the source and install binaries:
```bash
cargo build --release -p libra
```
This takes a while, ensure your are still inside the `tmux` session to avoid your session gets disconnected.

1.9 Making the `libra` binary globally executable and persistent by copying libra binaries to cargo bins path

:::note
This assumes the `libra` binary is already built and located at `~/libra-framework/target/release/libra`.
:::
```
sudo cp -f ~/libra-framework/target/release/libra* ~/.cargo/bin/

# Check libra execution and version 

libra version
```
### You will now need [sync your validator to the latest block](/validators/restore) and [register your validator](/validators/register).

## Start Node

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
User=`nodeuser`
Group=`nodeuser`

LimitNPROC=1048576
LimitNOFILE=1048576

#Environment="RUST_LOG=warn"
WorkingDirectory=/home/`nodeuser`/.libra
ExecStart=/`home/nodeuser`/libra-framework/target/release/libra node --config-path /`home/nodeuser`/.libra/validator.yaml

# Your `/libra-framework/target/release/libra node` and `/.libra/validator.yaml` may be different depending on Your setup location.

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
**Reload system service**

`sudo systemctl daemon-reload`

**Enable system service**

`sudo systemctl enable libra-node`

**Start system service**

`sudo systemctl start libra-node`

**Check the service is operating correctly**

`sudo systemctl status libra-node`

---
