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
    6ead5e1c7fe9f7c09e965f230cf8cf3cbbcacc33a562737aebd7387a90b04a43:
    - "/ip4/65.109.80.179/tcp/6182/noise-ik/0x6ead5e1c7fe9f7c09e965f230cf8cf3cbbcacc33a562737aebd7387a90b04a43/handshake/0"
    c04300abebc472cdea0e1f7160ece6c09e49145c2b5b72318bdc43c11aceb203:
    - "/ip4/172.104.211.8/tcp/6182/noise-ik/0xc04300abebc472cdea0e1f7160ece6c09e49145c2b5b72318bdc43c11aceb203/handshake/0"
    febaed185e04d0f158998b39501796d0b79235399796e96a1c9a3fac2f31ab57:
    - "/ip4/38.242.137.192/tcp/6182/noise-ik/0xfebaed185e04d0f158998b39501796d0b79235399796e96a1c9a3fac2f31ab57/handshake/0"
    8ad0747d37cacdfb725a5de237fa2584342b9aabc28446064031166b371da938:
    - "/ip4/160.202.129.29/tcp/6182/noise-ik/0x8ad0747d37cacdfb725a5de237fa2584342b9aabc28446064031166b371da938/handshake/0"
    9b07a7d587d5f515f4b77a2f751d0ca02e7a8cfb8f5550b26e5498d480cbd960:
    - "/ip4/209.38.172.53/tcp/6182/noise-ik/0x9b07a7d587d5f515f4b77a2f751d0ca02e7a8cfb8f5550b26e5498d480cbd960/handshake/0"
    
api:
  enabled: true
  address: '0.0.0.0:8080'
```
