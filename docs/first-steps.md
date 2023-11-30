---
title: First Steps
sidebar_position: 4
slug: /
tags:
  - Getting started
---

# First steps - Common useful operations
---

## Setup Environment Quick Start

For starters, you can clone our libra-framework repo:

``` bash
# We suggest you run the following in a tmux session from your user home directory
tmux a
cd ~

# Checkout the source
git clone https://github.com/0LNetworkCommunity/libra-framework
cd ~/libra-framework
```

Next, you can choose to prepare you instance accordingly:

``` bash 
# You can view all dev setup options with:
bash ./util/dev_setup.sh -h

# Validators can simply install build tools (-t)
bash ./util/dev_setup.sh -t

# Core devs will need Postgres too (-P)
bash ./util/dev_setup.sh -tP

# Formal verification for Move Devs will require Move Prover tools (Boogie) (-y)
bash ./util/dev_setup.sh -ty

# CI can use -b to prevent user input
bash ./util/dev_setup.sh -tb

# Now you can proceed with building based on your selection:
cargo build --release
```

---

## Well done! 
You've got yourself a shiny new node running the 0L libra-framework. 

``` bash
# Make the release path global and persistent
sudo cp -f ~/libra-framework/target/release/libra* ~/.cargo/bin/
```

## Query operations

#### Check account balance

``` bash
libra query balance --account ADDRESS
```

#### Check for your vouches
``` bash
libra query resource --resource-path-string 0x1::vouch::MyVouches --account ADDRESS
```

#### Get total supply

``` bash
libra query view --function-id "0x1::gas_coin::supply"
```

## Node operations

#### Send coins

``` bash
libra txs transfer --to-account DESTINATION_ADDRESS --amount AMOUNT
```

## Validator operations 
- Available only for validators:

#### Vouch 
```
libra txs validator vouch --vouch-for ADDRESS
```

#### Query for vouches
``` bash
libra query view --function-id 0x1::vouch::true_friends --args ADDRESS
```

#### Bid
``` bash
libra txs validator pof --bid-pct <PERCENT YOU PAY> --expiry <EPOCH # WHEN BID EXPIRES>

# For example
libra txs validator pof --bid-pct 0.9 --expiry 999
```

#### Un-jail account (self-unjail doesn't exist)
``` bash
libra txs validator jail --unjail-acct ADDRESS
```


## Node monitoring

### Status page

``` bash
git clone https://github.com/0LNetworkCommunity/status.git
cd status
yarn
yarn dev
# visit http://localhost:5173
```

### Grafana local setup

`TBD`
