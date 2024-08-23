---
sidebar_position: 6
sidebar_label: 'Post-Genesis Ceremony Registration'
description: 'Register a Validator on the 0L Network'
---

# Register a Validator on the 0L Network

Welcome!

## Quick outline of all the steps
``` bash
# Checkout the source
git clone https://github.com/0LNetworkCommunity/libra-framework

# Install dependencies and Rust lang
cd ~/libra-framework
bash ./util/dev_setup.sh -t

# restart your bash instance to pickup the cargo paths
source ~/.bashrc

# build and install the binary
cd ~/libra-framework
cargo build --release -p libra

# Make the release path global and persistent
sudo cp -f ~/libra-framework/target/release/libra* ~/.cargo/bin/

# Check libra execution and version
libra --version

# -----------------------
# Using libra CLI to generate a new account and register

# create account keys
libra wallet keygen

# create the validator config files on your node
# you will need to update vfn values to match validator values. see script below
# you will also need to set the libra.yaml to point to testnet
libra config validator-init

# Set your client `libra.yaml` with the rpc-load-balancer upstream node
libra config fix --force-url https://rpc.openlibra.space:8080

# a friend will onboard the account if it doesn't yet exist on chain. It is done by sending coins to an account
libra txs transfer --to-account <YOUR ADDRESS> --amount 1

# send validator info
libra txs validator register

# get vouches from existing validators (just ask)
libra txs validator vouch --vouch-for <YOUR ADDRESS>

# submit a bid to be in the validator set
libra txs validator pof --bid-pct <PERCENT YOU PAY> --expiry <WHEN EXPIRES>

# run as a fullnode and switch to the validator mode once entered the set, check the detailed instructions below the page.
```

## Detailed instructions

### Generate a new account - Get Keys
If you don't already have an account, you will need a mnemonic (seed), to generate all keys.

``` bash
libra wallet keygen
```

### Initialize validator files

Follow the prompts here. Your node needs to have keys generated using a mnemonic from step #1.

``` bash
libra config validator-init
```


- You will need to use this script to make the VFN match your validator node values.
``` bash
cat << 'EOF' > fix_vfn_values.sh
#!/bin/bash

# Extract the value from validator_network_public_key
validator_key=$(sed -n 's/^validator_network_public_key: "\(.*\)"/\1/p' ~/.libra/operator.yaml)

# Use the extracted value to replace full_node_network_public_key
sed -i "s/^full_node_network_public_key: .*/full_node_network_public_key: \"$validator_key\"/" ~/.libra/operator.yaml

# File path
file="$HOME/.libra/operator.yaml"

# Extract the host and port from validator_host
host=$(awk '/^  host:/{print $0}' "$file")
port=$(awk '/^  port:/{print $0}' "$file")

# Replace full_node_host: ~ with full_node_host: and add host and port
sed -i "/^full_node_host: ~/c\\
full_node_host:\\n$host\\n$port" "$file"
EOF

chmod +x fix_vfn_values.sh
./fix_vfn_values.sh
```

### Get the account on chain
Someone needs to create that account onchain first.
Ask someone to deposit a coin to your account from step #1

``` bash
# friend sends one coin to your account which creates it
libra txs transfer -t <YOUR ACCOUNT> -a 1
```

### Update upstream node
Set your client `libra.yaml` with the rpc-load-balancer upstream node
``` bash
libra config fix --force-url https://rpc.openlibra.space:8080
```

### Submit configs to chain

``` bash
# Submit your account on chain, which takes the default location to your ~/.libra/operator.yaml
libra txs validator register

# Or you can use the -f option to provide the exact path to your operator.yaml file
libra txs validator register -f ~/.libra/operator.yaml
```


### Get Vouches
0L Network uses very light reputation games to keep the validator set trusted.
Just ask an existing validator for a vouch. It helps a lot if you share your node specs and a little bit of your experience with them.

Your friend will:
``` bash
libra txs validator vouch --vouch-for <YOUR ADDRESS>
```

### Bid to be in the validator set
0L Network uses Proof-of-Fee for sybil resistance, instead of Proof-of-Stake. You don't need any stake to join, but you just need to be able to bid on how much you are willing to pay to be in the validator set. The cheapest bid proposed by validators will be actually what all validators pay (uniform price auction).
``` bash
libra txs validator pof --bid-pct <PERCENT YOU PAY> --expiry <WHEN EXPIRES>
```

### Run the node as fullnode and then validator mode
- Once your validator enters the set you will need to stop running as a fullnode and run as a validator. Until then, you can:
  - use the following instructions to: sync database to the current state (TODO: link) and run as a fullnode.
- When your node is in the active set, it is time to change your node config path to point to the `validator.yaml`.
- Stop your node and run in the validator mode:
``` bash
libra node --config-path ~/.libra/validator.yaml
```
