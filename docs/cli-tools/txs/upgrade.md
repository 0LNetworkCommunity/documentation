---
sidebar_position: 3
description: 'Upgrade VM Libraries'
---

# Txs - Upgrade



## Description
The `libra txs upgrade`  subcommand includes a set of subcommands tailored for validator operations. These commands facilitate actions like proposing and voting on network upgrades,.

### Upgrading the Network
This tool is specifically for Hot upgrades. Hot upgrades to 0L Move framework (AKA "stdlib") require no halting of the network and are achieved with the Upgrade Oracle. This can be done when there are non-breaking changes to the vm (in Rust), and the stdlib (Move) has migrations in place in case of schema changes.

A detailed explanation can be found [here](/validators/hot-upgrades)

## Upgrade Transactions

### Propose an Upgrade
- **Syntax**: `libra txs upgrade propose --proposal-script-dir <PATH_TO_SCRIPT> --metadata-url <URL>`
- **Function**: Initiates a proposal for a network upgrade.
- **Parameters**:
  - `proposal-script-dir`: Directory containing the compiled proposal script.
  - `metadata-url`: URL describing the proposal.
- **Example**:
  ```
  libra txs upgrade propose --proposal-script-dir /path/to/script --metadata-url "http://example.com/proposal"
  ```

### Vote on an Upgrade
With txs anyone with governance authority (the epoch's validators as of V7), can submit a vote in favor (or against it with --should-fail)
- **Syntax**: `libra txs upgrade vote --proposal-id <ID> [--should-fail]`
- **Function**: Casts a vote on an existing upgrade proposal.
- **Parameters**:
  - `proposal-id`: On-chain ID of the proposal.
- **Example**:
- **Vote YES on an Upgrade**
    ```
    libra txs upgrade vote --proposal-id 12345
    ```
- **Vote NO on an Upgrade**
    ```
    libra txs upgrade vote --proposal-id 12345 --should-fail
    ```
