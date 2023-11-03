---
sidebar_position: 3
sidebar_label: "Restore"
description: 'Restore and sync the OL Network database to the current state'
---

# Restore

Restore the Database to be up to date with the current state of the Network. Repository is located [here](https://github.com/0LNetworkCommunity/epoch-archive-testnet) and contains other useful commands out this scope.
:::note
This guide is referencing the REX testnet as we develop the `libra-framework` software for v6.9.x (soon v7)
:::

### Prerequisites
:::note
You will need an account and libra configuration to use this tool
```
# Create account
libra wallet keygen

#Initialize configuration
libra config init
```
:::

- The Makefile is designed for libra-framework v6.9.x (soon v7) Ensure you are using the correct version.



### Setup

  Clone the repo and prepare the binary:
  
  ```
  cd ~
  git clone https://github.com/0LNetworkCommunity/epoch-archive-testnet
  cd ~/epoch-archive-testnet
  make bins
  ```


### Restoring to the latest version of the 0L Network public backup

This is most likely all you will need to restore and start/resume syncing:

  ```
    cd ~/epoch-archive-testnet
    make wipe-db && make restore-all
  ```


### Sync as a Full Node
:::note
You will need to open port `6182` and also verify your seed peers in the yaml
:::
Currently you need to sync as a full node. To do that you need to add the contents of [fullnode.yaml](/validators/yaml-templates/fullnode-yaml) in `~/.libra/fullnode.yaml`

You will need to change the file to point at the correct locations for your database and genesis blob. By default these will be `~/$USER/.libra/db` and `~/$USER/.libra/genesis/genesis.blog` respectfully.

```
data_dir: /change/to/your/db/dir

genesis_file_location: /path/to/your/genesis/blob


```

### Start

`libra node --config-path ~/.libra/fullnode.yaml`
