---
sidebar_position: 3
---

# Txs - Upgrade

## Description
The `libra txs upgrade`  subcommand includes a set of subcommands tailored for validator operations. These commands facilitate actions like proposing and voting on network upgrades,.

### Upgrading the Network
This tool is specifically for Hot upgrades. Hot upgrades to 0L Move framework (AKA "stdlib") require no halting of the network and are achieved with the Upgrade Oracle. This can be done when there are non-breaking changes to the vm (in Rust), and the stdlib (Move) has migrations in place in case of schema changes.

A detailed explanation can be found [here](https://github.com/0LNetworkCommunity/libra-framework/blob/main/docs/hot_upgrades.md)

## Upgrade Transactions

### Propose an Upgrade
- **Syntax**: `txs validator upgrade propose --proposal_script_dir <PATH_TO_SCRIPT> --metadata_url <URL>`
- **Function**: Initiates a proposal for a network upgrade.
- **Parameters**:
  - `proposal_script_dir`: Directory containing the compiled proposal script.
  - `metadata_url`: URL describing the proposal.
- **Example**:
  ```
  txs validator upgrade propose --proposal_script_dir /path/to/script --metadata_url "http://example.com/proposal"
  ```

### Vote on an Upgrade
With txs anyone with governance authority (the epoch's validators as of V7), can submit a vote in favor (or against it with --should-fail)
- **Syntax**: `txs validator upgrade vote --proposal_id <ID> [--should-fail]`
- **Function**: Casts a vote on an existing upgrade proposal.
- **Parameters**:
  - `proposal_id`: On-chain ID of the proposal.
- **Example**:
- **Vote YES on an Upgrade**
    ```
    libra txs validator upgrade vote --proposal_id 12345
    ```
- **Vote NO on an Upgrade**
    ```
    txs vote --proposal-id 12345 --should-fail
    ```
