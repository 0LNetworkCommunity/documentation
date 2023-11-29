---
title: "Fullnode yaml example"
id: "fullnode-yaml"
---

# NOTE:
You no longer have to modify a fullnode.yaml by hand, as there is now a tool to initialize fullnode configuration.

That is:
`libra config fullnode-init`

The following files should be maintained with the correct seed peers relative to the chain they serve:

`mainnet`:
https://github.com/0LNetworkCommunity/seed-peers/blob/main/seed_peers.yaml

`testnet` is TBD.


### ~/.libra/fullnode.yaml
```
base:
  role: 'full_node'
  data_dir: '/home/vnuser/.libra/data'
  waypoint:
    from_file: '/home/vnuser/.libra/genesis/waypoint.txt'

state_sync:
     state_sync_driver:
        # do a fast sync with DownloadLatestStates
        # bootstrapping_mode: ExecuteOrApplyFromGenesis
        bootstrapping_mode: DownloadLatestStates
        continuous_syncing_mode: ExecuteTransactionsOrApplyOutputs

execution:
  genesis_file_location: '/home/vnuser/.libra/genesis/genesis.blob'

full_node_networks:
- network_id: 'public'
  listen_address: '/ip4/0.0.0.0/tcp/6182'
  seed_addrs:
    1017ce1abc30e356660b8b0542275f2fb4373b5f8a82b7800a5b3fdf718ae55f:
    - "/ip4/70.15.242.6/tcp/6182/noise-ik/0x1017ce1abc30e356660b8b0542275f2fb4373b5f8a82b7800a5b3fdf718ae55f/handshake/0"
    dcab287b256bb1e90cda2537553ee19cac195ce67c2fefc7ff25b8aaf2368e6d:
    - "/ip4/222.101.31.242/tcp/6182/noise-ik/0xdcab287b256bb1e90cda2537553ee19cac195ce67c2fefc7ff25b8aaf2368e6d/handshake/0"
    619898b2f99fba7b25fae35e3eab03164d7d9ce0d10abe8f6ceae9a43ffa1c34:
    - "/ip4/65.109.80.179/tcp/6182/noise-ik/0x619898b2f99fba7b25fae35e3eab03164d7d9ce0d10abe8f6ceae9a43ffa1c34/handshake/0"
    
api:
  enabled: true
  address: '0.0.0.0:8080'
```
