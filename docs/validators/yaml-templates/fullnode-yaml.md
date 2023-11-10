---
title: "Fullnode yaml example"
id: "fullnode-yaml"
---

### node.yaml

### Fullnode yaml
```
base:
  role: 'full_node'
  data_dir: '/home/test_0L/.libra/data' # This needs to be your respective users home path
  waypoint:
     from_config: 0:95023f4d6a7e24cac3e52cad29697184db260214210b57aef3f1031ad4d8c02c # This needs to be the correct waypoint for the network you are operating on

state_sync:
     state_sync_driver:
        # do a fast sync with DownloadLatestStates
        # bootstrapping_mode: ExecuteOrApplyFromGenesis
        bootstrapping_mode: DownloadLatestStates
        continuous_syncing_mode: ExecuteTransactionsOrApplyOutputs

execution:
  genesis_file_location: '/home/test_0L/.libra/genesis/genesis.blob' # This needs to be your respective users home path

full_node_networks:
- network_id: 'public'
  # discovery_method: 'onchain'
  listen_address: '/ip4/0.0.0.0/tcp/6182'
  seed_addrs:
    1017ce1abc30e356660b8b0542275f2fb4373b5f8a82b7800a5b3fdf718ae55f:
    - "/ip4/204.186.74.42/tcp/6182/noise-ik/0x1017ce1abc30e356660b8b0542275f2fb4373b5f8a82b7800a5b3fdf718ae55f/handshake/0"
    dcab287b256bb1e90cda2537553ee19cac195ce67c2fefc7ff25b8aaf2368e6d:
    - "/ip4/136.244.71.63/tcp/6182/noise-ik/0xdcab287b256bb1e90cda2537553ee19cac195ce67c2fefc7ff25b8aaf2368e6d/handshake/0"
    0a3cab5f2ecb29bdb4a9efe1dd4576feacefe4ec74ab7ef65d472bbb4461804d:
    - "/ip4/35.86.200.84/tcp/6182/noise-ik/0x0a3cab5f2ecb29bdb4a9efe1dd4576feacefe4ec74ab7ef65d472bbb4461804d/handshake/0"

api:
  enabled: true
  address: '0.0.0.0:8080'
```
