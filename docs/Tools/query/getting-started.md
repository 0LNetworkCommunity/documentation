---
sidebar_label: 'Getting Started'
sidebar_position: 1
description: 'Learn how to query the blockchain for views and resources'
---
# Getting Started

### The query tool provides a command line interface to retrieve information about the blockchain. From an Account perspective, and from the global network state.
---

## Usage

> It is recommended to pipe the output of the query tool to `jq` or another json parser for pretty printing.  
The usage then would be `libra query <COMMAND> | jq`

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

:::danger WIP
Not implemented yet:  
`block-height`
:::
