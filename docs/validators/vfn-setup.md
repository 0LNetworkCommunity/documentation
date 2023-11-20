---
title: "VFN Setup"
sidebar_label: 'VFN'
sidebar_position: 7
---


## VFN Setup

Note:
We strongly suggest that all validators also run a VFN, which is a node that serves as crucial counterpart to completing the design of our network. The VFN is how the public network is able to reach the validator, which should not be done directly.


### 0L Network testnet-6: VFN Setup & Public Static Peer ID

Clone libra-framework and build   
```
cd ~
git clone https://github.com/0LNetworkCommunity/libra-framework
cd ~/libra-framework
cargo build --release -p libra -p diem-db-tool -p diem
```

Make sure your path to libra is global and persistant
```
echo 'export PATH="$HOME/libra-framework/target/release:$PATH"' >> ~/.bashrc
source ~/.bashrc
```


#### VFN initialization
Grab the genesis blob and waypoint (creates fullnode.yaml not used here)
```
libra config full node-init
```

Set your client `libra.yaml` with the rpc-load-balancer upstream node
```
libra config fix --force-url https://testnet-rpc.openlibra.space:8080
```

Configure your VFN using the validator's configs
```
libra config validator-init
```

Prepare a new VFN config by starting with the validator's config (until we build a CLI tool for this)
```
cp ~/.libra/validator.yaml ~/.libra/vfn.yaml
```

Remove the consensus and validator_network sections from the VFN yaml
```
nano ~/.libra/vfn.yaml
```

#### Validator Configuration (on your Validator machine)
Add the VFN network to your validator's config if not done so already
```
nano ~/.libra/validator.yaml
```

This is what your full_node_networks section should look like
```
full_node_networks:
- network_id:
    private: 'vfn'
  listen_address: '/ip4/0.0.0.0/tcp/6181'
  identity:
    type: 'from_file'
    path: '/home/vnuser/.libra/validator-identity.yaml'
```

#### VFN Configuration (on your VFN machine)
Grab your validator's connection string (ip with replaced port and public key)
```
libra query val-config -a 0xabc4321yourvalidatoraccount | jq .validator_network_addresses | sed 's#/6180/#/6181/#g'
```

Make sure the public key matches your validator's public key on file
```
grep validator_network_public_key ~/.libra/operator.yaml
```

Update the the VFN networks
```
nano ~/.libra/vfn.yaml
```

This is what your full_node_networks section should look like (you 6181 and 6182)
```
full_node_networks:
- network_id:
    private: 'vfn'
  discovery_method: 'onchain'
  listen_address: '/ip4/0.0.0.0/tcp/6181'
  seeds:
    1234yourvalidatorpublickey:
      addresses:
      - '/ip4/<validator_ip>/tcp/6181/noise-ik/0x1234yourvalidatorpublickey/handshake/0'
      role: 'Validator'
- network_id: 'public'
  discovery_method: 'onchain'
  listen_address: '/ip4/0.0.0.0/tcp/6182'
  identity:
    type: 'from_file'
    path: '/home/vfnuser/.libra/validator-full-node-identity.yaml'
```

Note:
Your VFN will use your validator as an upstream without an identity, while the public network will use the identity file


#### On-Chain Configuration
Take note of your full_node_network_public_key
```
grep full_node_network_public_key ~/.libra/public-keys.yaml

# example: full_node_network_public_key: "0xabcdyourvfnpublickey"
```

Now you should update your operator.yaml with the VFN's public key and ip address
```
nano ~/.libra/operator.yaml
```

This is what the full_node_* section of operator.yaml should look like
```
full_node_network_public_key: "0xabcdyourvfnpublickey"
full_node_host:
  host: <vfn_ip>
  port: 6181
```

Update the on-chain config for the VN/VFN (only needed to be done once)
```
libra txs validator update

Enter your 0L mnemonic:
🔑
transaction success  ··········································· ✓
```

Wait an epoch and then check the on-chain values to confirm
```
libra query val-config -a 0xabc4321yourvalidatoraccount | jq
```
