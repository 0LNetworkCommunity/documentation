---
sidebar_position: 6
sidebar_label: 'Validator registration'
description: 'Register a Validator on the 0L Network'
---

# Register a Validator on the 0L Network

Welcome! This documentation covers validator registration. Start with **Setting up a validator** documentation if needed.

## Detailed instructions

### Generate a new account - Get Keys
If you don't already have an account, you will need a mnemonic (seed), to generate all keys.

``` bash
libra wallet keygen
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
libra txs validator pof --net-reward <NET REWARD> --bid-pct <PERCENT YOU PAY> --epoch-expiry <WHEN EXPIRES>
```

### Run the node as fullnode and then validator mode
- Once your validator enters the set you will need to stop running as a fullnode and run as a validator. 
- When your node is in the active set, it is time to change your node config path to point to the `validator.yaml`.
- Stop your node and run in the validator mode:
``` bash
libra node --config-path ~/.libra/validator.yaml
```
