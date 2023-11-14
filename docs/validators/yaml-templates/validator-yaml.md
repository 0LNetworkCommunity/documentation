---
title: "Validator yaml example"
id: "validator-yaml"
---

# Validator YAML File Example

### validator.yaml

```
base:
  role: 'validator'
  data_dir: '/home/ubuntu/.libra/data'
  waypoint:
    from_file: '/home/ubuntu/.libra/genesis/waypoint.txt'

consensus:
  safety_rules:
    service:
      type: 'local'
    backend:
      type: 'on_disk_storage'
      path: secure-data.json
      namespace: ~
    initial_safety_rules_config:
      from_file:
        waypoint:
          from_file: /home/ubuntu/.libra/genesis/waypoint.txt
        identity_blob_path: /home/ubuntu/.libra/validator-identity.yaml

execution:
  genesis_file_location: '/home/ubuntu/.libra/genesis/genesis.blob'

validator_network:
  discovery_method: 'onchain'
  mutual_authentication: true
  identity:
    type: 'from_file'
    path: /home/ubuntu/.libra/validator-identity.yaml

full_node_networks:
- network_id:
    private: 'vfn'
  listen_address: '/ip4/0.0.0.0/tcp/6181'
  identity:
    type: 'from_file'
    path: /home/ubuntu/.libra/validator-full-node-identity.yaml

api:
  enabled: true
  address: '0.0.0.0:8080'
```
