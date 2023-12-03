---
sidebar_position: 4
sidebar_label: "Restore"
description: 'Restore and sync the 0L Network database to the current state'
---

# Restore

Restore the Database to get up-to-date with the current state of the Network. Repository is located [here](https://github.com/0LNetworkCommunity/epoch-archive-mainnet) and contains other useful commands out this scope.

### Prerequisites
:::note
You will need an account and libra configuration to use this tool. If you don't have an account yet, you can use the following command to create one. ***Make sure to store your mnemonics!***
``` bash
libra wallet keygen
```
:::

### Initialize configs
Currently, you need to sync as a full node. To do that you need to initialize `fullnode.yaml` in `~/.libra/fullnode.yaml`. Use the following command to generate the `fullnode.yaml` file: 

``` bash
libra config fullnode-init
```

### Update upstream node
Set your client `libra.yaml` with the rpc-load-balancer upstream node
``` bash
libra config fix --force-url https://rpc.openlibra.space:8080
```

### Clone and build the epoch-archive-mainnet repository

``` bash
cd ~
git clone https://github.com/0LNetworkCommunity/epoch-archive-mainnet
cd ~/epoch-archive-mainnet
make bins
```

### Sync as a Fullnode
:::warning
You will need to open port `6182`
:::

#### Start as a fullnode (or vfn or validator node depending on your need)
The following example starts the node as a fullnode by providing the `fullnode.yaml` as its config option:
``` bash
libra node --config-path ~/.libra/fullnode.yaml
```

#### Verify
You can check that you are syncing by checking that your `ledger_version` and `block_height` are increasing via the API endpoint 
``` bash
watch 'curl localhost:8080/v1/ | jq'
```

**Response example:**
``` json
{
  "chain_id": 2,
  "epoch": "700",
  "ledger_version": "3322278",
  "oldest_ledger_version": "3316234",
  "ledger_timestamp": "1699327458805056",
  "node_role": "full_node",
  "oldest_block_height": "1581950",
  "block_height": "1584970",
  "git_hash": "bafac94d6edd39d972729db21156d47758eb8969"
}
```

### How to clean the database and sync to the latest state again?

The following instructions will remove your existing `~/.libra/data/db/` directory and also update the `epoch-archive.yaml` file with the latest waypoint. You can study the `Makefile` in this repository to fine-tune and understand its instructions better.
``` bash
cd ~/epoch-archive-mainnet
make wipe-db && make restore-all
```
