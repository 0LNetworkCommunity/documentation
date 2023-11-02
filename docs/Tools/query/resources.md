---
title: "Query Resources"
id: "query-resources"
hidden: false
---

# Query

## Description

### The query tool provides a command line interface to query various elements of the blockchain, from an account perspective.
---

## Usage

```
$> libra query
Query the blockchain for views and resources

Usage: libra query <COMMAND>

Commands:
  balance         Account balance
  tower           User's Tower state
  epoch           Epoch and waypoint
  block-height    Network block height
  resources       All account resources
  view            Execute a View function on-chain
  lookup-address  Looks up the address of an account given an auth key. The authkey diverges from the address after a key rotation
  move-value      get a move value from account blob
  sync-delay      How far behind the local is from the upstream nodes
  txs             Get transaction history
  help            Print this message or the help of the given subcommand(s)

Options:
  -h, --help     Print help
  -V, --version  Print version
```


./libra query tower --account 00000000000000000000000000000000851a3baf866951b36a3fe0da92ba38fc | jq


