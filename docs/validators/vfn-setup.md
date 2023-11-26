---
title: "VFN Setup"
sidebar_label: 'VFN'
sidebar_position: 7
---


## VFN Setup

Note:
We strongly suggest that all validators also run a VFN, which is a node that serves as crucial counterpart to completing the design of our network. The VFN is how the public network is able to reach the validator, which should not be done directly.


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
git fetch --all && git checkout release-6.9.0-rc.10
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

Set your client `libra.yaml` with the rpc-load-balancer upstream node
``` bash
libra config fix --force-url https://rpc.openlibra.space:8080
```

Configure your VFN using the validator's configs
``` bash
libra config validator-init
```

The VFN config will then be automatically created here
``` bash
nano ~/.libra/vfn.yaml
```


This is what your VFN `full_node_networks` section should look like (you `6181` and `6182`)
``` yaml
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
Your VFN will use your validator as an upstream without an identity, while the public network will use the identity file.

### Issue the On-Chain Configuration

From your VFN, take note of the public IPv4 address
``` bash
curl ipinfo.io
```

Take note of your `full_node_network_public_key`
``` bash
grep full_node_network_public_key ~/.libra/public-keys.yaml

# example: full_node_network_public_key: "0xabcdyourvfnpublickey"
```

On both Validator and VFN machines, make sure the `operator.yaml` is configured with VN and VFN's IP address and separate public keys
``` bash
nano ~/.libra/operator.yaml
```

On both Validator and VFN machines, make sure the `operator.yaml` is configured with VFN's public key and ip address
``` bash
nano ~/.libra/operator.yaml
```

On both machines, the config in `operator.yaml` should be complete with separate Validator and VFN keys and IPs
``` yaml
validator_network_public_key: "0xthiswasalreadysetpublickey"
validator_host:
  host: <validator_ip>
  port: 6180
full_node_network_public_key: "0xabcdyourvfnpublickey"
full_node_host:
  host: <vfn_ip>
  port: 6181
```

On your Validator, update the on-chain config for the VN/VFN (do this just once)
``` bash
libra txs validator update

Enter your 0L mnemonic:
🔑
transaction success  ··········································· ✓
```

Wait an epoch and then check the on-chain values to confirm
``` bash
libra query val-config -a 0xabc4321yourvalidatoraccount | jq
```
