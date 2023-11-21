---
title: First Steps
sidebar_position: 4
slug: /
tags:
  - Getting started
---

# First steps - Common useful operations
---

### Setup Environment Quick Start

For starters, you can clone our libra-framework repo:

```
# We suggest you run the following in a tmux session from your user home directory
tmux a
cd ~

# Checkout the source
git clone https://github.com/0LNetworkCommunity/libra-framework
cd ~/libra-framework
```

Next, you can choose to prepare you instance accordingly:

- You can view all dev setup options with:
`bash ./util/dev_setup.sh -h`

- Validators can simply install build tools (-t)
`bash ./util/dev_setup.sh -t`

- Core devs will need Postgres too (-P)
`bash ./util/dev_setup.sh -tP`

- Formal verification for Move Devs will require Move Prover tools (Boogie) (-y)
`bash ./util/dev_setup.sh -ty`

- CI can use -b to prevent user input
`bash ./util/dev_setup.sh -tb`

Now you can proceed with building based on your selection:
```
cargo build --release
```

---

## Well done! You've got yourself a shiny new node running the 0L libra-framework. 

### Let's see what you can do with it...

> All following queries are expecting you to invoke the `libra` you just built. So we suggest you copy this over to your cargo bin path.
For the canonical setup, that would be `~/libra-framework/target/libra ...`
```
# Make the release path global and persistent
sudo cp -f ~/libra-framework/target/release/libra* ~/.cargo/bin/
```

> Much more documentation is available at https://0lnetworkcommunity.github.io/documentation/ Things are added by the day. Your contribution would be highly appreciated.


Query operations
----------------

#### Check account balance

```
libra query balance --account ADDRESS
```

#### Check for your vouches
```bash
libra query resources --resource-path-string 0x1::vouch::MyVouches --account ADDRESS
```

#### Get total supply

```bash
libra query view --function-id "0x1::gas_coin::supply"
```

Node operations
----------------

#### Send coins
```bash
libra txs transfer --to-account ADDRESS --amount AMOUNT
```

Validator operations (available only for validators)
----------------

#### Vouch 
```
libra txs validator vouch --vouch-for ADDRESS
```

#### Query for vouches
```
libra query view --function-id 0x1::vouch::true_friends --args ADDRESS
```

#### Bid
```
libra txs validator pof --bid-pct <PERCENT YOU PAY> --expiry <EPOCH # WHEN BID EXPIRES>

# For example
libra txs validator pof --bid-pct 0.1 --expiry 999
```

#### Unjail account (self-unjail doesn't exist)
```
libra txs validator jail --unjail-acct ADDRESS
```


## Extra: Node monitoring
----------------

### Status page

```
git clone https://github.com/0LNetworkCommunity/status.git
cd status
yarn
yarn dev
# visit http://localhost:5173
```

### Grafana local setup

`TBD`
