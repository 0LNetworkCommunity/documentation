---
title: "VFN Setup"
sidebar_label: 'VFN'
sidebar_position: 7
---


## VFN Setup

Note:
We strongly suggest that all validators also run a VFN, which is a node that serves as crucial counterpart to completing the design of our network. The VFN is how the public network is able to reach the validator, which should not be done directly.


## Ports
The following ports must be open: `6181`, `6182`, `8080`.

- `6181` is for the private validator fullnode network ("VFN"), it should only allow traffic from the Validator node IP address above.
- `6182` is for the the PUBLIC fullnode network. This is how the public nodes that will be serving JSON-RPC on the network will receive data and submit transactions to the network.
- `8080` is the RPC port and we suggest VFNs and public fullnodes to serve this port by default for operability.


### Cleanup

Previous clones and testnets leave data in the `.libra` directory, clean those up by removing these directories

``` bash
rm -rf ~/libra-framework
rm -rf ~/.libra/data && rm -rf ~/.libra/genesis && rm -rf ~/.libra/secure-data.json
rm -f /usr/bin/libra && rm -rf /usr/local/bin/libra && rm -f ~/.cargo/bin/libra
```

Clone libra-framework and build   
``` bash
cd ~
git clone https://github.com/0LNetworkCommunity/libra-framework

cd ~/libra-framework
bash ./util/dev_setup.sh -bt
. ~/.bashrc

cd ~/libra-framework
cargo build --release -p libra -p diem-db-tool -p diem
```

Make sure your path to libra is global and persistent
``` bash
sudo cp -f ~/libra-framework/target/release/libra* ~/.cargo/bin/
```


### VFN initialization
Initialize `~/.libra` config directory 
``` bash
libra config init
```

Grab the **genesis blob** and **waypoint** (creates `fullnode.yaml` not used here)
``` bash
libra config fullnode-init
```

:::warning
Until a patch is published to pull correctly from the `epoch-archive-mainnet` repo, the `genesis.blob` and `waypoint.txt` will be wrong if you are using `libra config fullnode-init`.
In order to fix this, after you have run the above command, please run:
- `wget https://raw.githubusercontent.com/0LNetworkCommunity/epoch-archive-mainnet/main/upgrades/v6.9.0/genesis.blob -O ~/.libra/genesis/genesis.blob`
- `wget https://raw.githubusercontent.com/0LNetworkCommunity/epoch-archive-mainnet/main/upgrades/v6.9.0/waypoint.txt -O ~/.libra/genesis/waypoint.txt`
:::

Set your client `libra.yaml` with the rpc-load-balancer upstream node
``` bash
libra config fix --force-url https://rpc.openlibra.space:8080
```

:::info
If you notice problems getting transactions through, or when the RPC Load Balancer is down, you can adjust the url to `"http://localhost:8080/"` in `~/.libra/libra.yaml`
:::

Configure your VFN using the validator config tool
``` bash
libra config validator-init --vfn
```

:::warning
Due to a bug currently in `libra config validator-init`, please run this command again without the `--vfn` parameter
:::

The VFN config will then be automatically created here
``` bash
cat ~/.libra/vfn.yaml
```


This is what your VFN `full_node_networks` section should look like:
``` yaml
full_node_networks:
- network_id:
    private: 'vfn'
  discovery_method: 'onchain'
  listen_address: '/ip4/0.0.0.0/tcp/6181'
  seeds:
    <your_validator_publickey>:
      addresses:
      - '/ip4/<validator_ip>/tcp/6181/noise-ik/<0x_your_validator_publickey>/handshake/0'
      role: 'Validator'
- network_id: 'public'
  discovery_method: 'onchain'
  listen_address: '/ip4/0.0.0.0/tcp/6182'
  identity:
    type: 'from_file'
    path: '/home/<your_user>/.libra/validator-full-node-identity.yaml'
```

Note:
Your VFN will use your validator as an upstream without an identity, while the public network will use the identity file.

### Issue the On-Chain Configuration

From your VFN, take note of the public IPv4 address
``` bash
curl ipinfo.io
```

Take note of your `full_node_network_public_key`
``` bash
grep full_node_network_public_key ~/.libra/public-keys.yaml

# example: full_node_network_public_key: "0x_full_node_network_public_key"
```

On both machines, the config in `operator.yaml` should be complete with separate Validator and VFN keys and IPs
``` yaml
validator_network_public_key: "0xthiswasalreadysetpublickey"
validator_host:
  host: <validator_ip>
  port: 6180
full_node_network_public_key: "0x_full_node_network_public_key"
full_node_host:
  host: <vfn_ip>
  port: 6182
```

On your Validator, update the on-chain config for the VN/VFN (do this just once)
``` bash
libra txs validator update

Enter your 0L mnemonic:
🔑
transaction success  ··········································· ✓
```

Wait (up until one epoch) and then check the on-chain values to confirm
``` bash
libra query val-config 0xabc4321yourvalidatoraccount | jq
```

### Run the VFN
In a tmux, run the following command:
`libra node --config-path ~/.libra/vfn.yaml`
