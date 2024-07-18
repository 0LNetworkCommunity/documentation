---
title: "VFN yaml example"
id: "vfn-yaml"
---

# VFN Example YAML

### ~/.libra/vfn.yaml

```
base:
  role: 'full_node'
  data_dir: '/home/vfnuser/.libra/data'
  waypoint:
    from_file: '/home/vfnuser/.libra/genesis/waypoint.txt'

execution:
  genesis_file_location: '/home/vfnuser/.libra/genesis/genesis.blob'

full_node_networks:
- network_id:
    private: 'vfn'
  listen_address: '/ip4/0.0.0.0/tcp/6181'
  discovery_method: 'onchain'
  seeds:
    1234yourvalidatorpublickey:
      addresses:
      - '/ip4/<validator_ip>/tcp/6181/noise-ik/0x1234yourvalidatorpublickey/handshake/0'
      role: 'Validator'
- network_id: 'public'
  listen_address: '/ip4/0.0.0.0/tcp/6182'
  discovery_method: 'onchain'
  identity:
    type: 'from_file'
    path: '/home/vfnuser/.libra/validator-full-node-identity.yaml'

api:
  enabled: true
  address: '0.0.0.0:8080'

mempool:
  default_failovers: 3
```
