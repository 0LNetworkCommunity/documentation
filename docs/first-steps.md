---
# id: doc-with-tags
title: First steps
tags:
  - Getting started
---

# Common useful operations

## Well done! you've got yourself a shiny new node running the 0L libra-framework. 

### Let's see what you can do with it....

> All following queries are expecting you to invoke the `libra` command from the libra-framework/target/release directory. If it ain't in you path, consider adding it.
For the canonical setup, that would be `~/libra-framework/target/libra ...`

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

# libra txs validator pof --bid-pct 0.1 --expiry 999
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