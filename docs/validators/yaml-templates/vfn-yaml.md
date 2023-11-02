---
title: "VFN yaml example"
id: "vfn-yaml"
---

# VFN Example YAML

### vfn.yaml

```
# replace file path differences for the username
sed -i 's#/validatorusername/.libra#/vfnusername/.libra#g' ~/.libra/vfn.yaml
```

```
# resulting vfn.yaml contents
base:
  role: 'full_node'
  data_dir: '/home/vfnusername/.libra/data'
  waypoint:
    from_file: '/home/vfnusername/.libra/genesis/waypoint.txt'

execution:
  genesis_file_location: '/home/vfnusername/.libra/genesis/genesis.blob'

full_node_networks:
- network_id: 'public'
  discovery_method: 'onchain'
  listen_address: "/ip4/0.0.0.0/tcp/6182"
  identity:
    type: "from_config"
    key: "sdfwsdfdfsdfddddddddddddddddddddddddddddddddddddd"
    peer_id: "fdgfgswddfddddddddddddddddddddddddddddddddddddddd"
- network_id:
    private: 'vfn'
  listen_address: '/ip4/0.0.0.0/tcp/6181'
  identity:
    type: 'from_file'
    path: /home/vfnusername/.libra/validator-identity.yaml
  seeds:
    sdf34tdfgddfgsdfsssssssssssssssssdfddddddddddddddd:
      addresses:
      - "/ip4/<validator_ip>/tcp/6181/noise-ik/0xsdf34tdfgddfgsdfsssssssssssssssssdfddddddddddddddd/handshake/0"
      role: "Validator"

api:
  enabled: true
  address: '0.0.0.0:8080'

```