---
title: "VFN yaml example"
id: "vfn-yaml"
---

# VFN Example YAML

### vfn.yaml
```
base:
  role: 'full_node'
  data_dir: '/root/.libra/data'
  waypoint:
     from_config: 0:95023f4d6a7e24cac3e52cad29697184db260214210b57aef3f1031ad4d8c02c

state_sync:
     state_sync_driver:
        # do a fast sync with DownloadLatestStates
        # bootstrapping_mode: ExecuteOrApplyFromGenesis
        bootstrapping_mode: DownloadLatestStates
        continuous_syncing_mode: ExecuteTransactionsOrApplyOutputs

execution:
  genesis_file_location: '/root/.libra/genesis/genesis.blob'

full_node_networks:
- network_id: 'public'
  # discovery_method: 'onchain'
  listen_address: '/ip4/0.0.0.0/tcp/6182'
  seed_addrs:
      3c37c7d6a5122a6b9ef07a11cc40e445874eb0841ae028d6326bf67768cce235:
        - "/ip4/204.186.74.42/tcp/6182/noise-ik/0x3c37c7d6a5122a6b9ef07a11cc40e445874eb0841ae028d6326bf67768cce235/handshake/0"

api:
  enabled: true
  address: '0.0.0.0:8080'
```