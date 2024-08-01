---
sidebar_label: 'Balance'
sidebar_position: 2
description: 'Query for account balance'
---
# Balance

---

## Usage

```
$> libra query balance --account ADDRESS
```

Print out will be of the format:
```
{
  "unlocked": 7151600.786542,
  "total": 7151600.786542
}
```

### Unlocked
---

The unlocked balance is the amount of funds that are available for the account to use. This is the amount that can be used to send transactions, or to delegate to a validator.

### Total
---

The total balance is the amount of funds that are available for the account to use, plus the amount of funds that are locked up in the account. The total balance is the sum of the unlocked balance and the locked balance.

> Unlocked != total indicates that the account recieved funds that are related to a specific contribution to the network, such as a validator, or a worker, and that these funds are locked and are being released by the daily unlock rate (`SLOW_WALLET_EPOCH_DRIP`)
