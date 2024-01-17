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
    cb7e573123b67b0bb957d23f0d11c65b0b5438815b3750461c3815d507fb5649:
    - "/ip4/73.181.115.53/tcp/6182/noise-ik/0xcb7e573123b67b0bb957d23f0d11c65b0b5438815b3750461c3815d507fb5649/handshake/0"
    1017ce1abc30e356660b8b0542275f2fb4373b5f8a82b7800a5b3fdf718ae55f:
    - "/ip4/70.15.242.6/tcp/6182/noise-ik/0x1017ce1abc30e356660b8b0542275f2fb4373b5f8a82b7800a5b3fdf718ae55f/handshake/0"
    dcab287b256bb1e90cda2537553ee19cac195ce67c2fefc7ff25b8aaf2368e6d:
    - "/ip4/222.101.31.242/tcp/6182/noise-ik/0xdcab287b256bb1e90cda2537553ee19cac195ce67c2fefc7ff25b8aaf2368e6d/handshake/0"
    619898b2f99fba7b25fae35e3eab03164d7d9ce0d10abe8f6ceae9a43ffa1c34:
    - "/ip4/65.109.80.179/tcp/6182/noise-ik/0x619898b2f99fba7b25fae35e3eab03164d7d9ce0d10abe8f6ceae9a43ffa1c34/handshake/0"
    bc2d1a55f90dfd27e4ef871285f13386997aecf609a3c4d4c4527efc9b2d193e:
    - "/ip4/94.130.22.86/tcp/6182/noise-ik/0xbc2d1a55f90dfd27e4ef871285f13386997aecf609a3c4d4c4527efc9b2d193e/handshake/0"
    3b315502851df6d3004c69cf17714559d2407e28477b622d4e28c7b876859d0a:
    - "/ip4/144.76.104.93/tcp/6182/noise-ik/0x3b315502851df6d3004c69cf17714559d2407e28477b622d4e28c7b876859d0a/handshake/0"
    46b3705ebeeb469dd980210ace3462a91320249d37e90d1279a9a9df94995278:
    - "/ip4/136.243.59.175/tcp/6182/noise-ik/0x46b3705ebeeb469dd980210ace3462a91320249d37e90d1279a9a9df94995278/handshake/0"
    9ac157ee324e4129c9edac7ba5eca70af299929ae8c0d7362f4e6c75a7ac447e:
    - "/ip4/104.248.94.195/tcp/6182/noise-ik/0x9ac157ee324e4129c9edac7ba5eca70af299929ae8c0d7362f4e6c75a7ac447e/handshake/0"
    
api:
  enabled: true
  address: '0.0.0.0:8080'
```
