---
sidebar_position: 6
sidebar_label: "Hard Fork"
description: 'Hard fork the 0L Network'
---

# Hard Fork

This comprehensive guide provides essential steps and insights for conducting a hard fork within the 0L blockchain. A hard fork is a significant blockchain operation that creates a new chain diverging from the existing one, often implemented for major updates or due to fundamental disagreements within the community.

## Introduction to Hard Forking

Hard forking is a decisive move in the blockchain world, allowing a network to evolve or adapt through the creation of a new chain. This guide is designed to equip you with the knowledge and tools necessary for this process, with a focus on initiating a chain that may start with a selective subset of users.

## Precaution for First-Time Forkers

If you're considering a hard fork, it's crucial to understand the gravity of this action. You are not merely updating; you are creating a new, separate blockchain. This guide assumes you have a solid understanding of blockchain technology and the specific mechanics of hard forks. Remember, convincing others to join your new chain is challenging; the default strategy for most will be to stay with the existing one.

## Why Consider a Hard Fork?

The decision to hard fork can stem from various reasons, including but not limited to significant protocol upgrades, addressing security issues, or philosophical differences within the community. This guide provides an unopinionated framework for starting a new chain, focusing on the technical execution rather than the motivations behind it.

## Technical Challenges of Forking Diem based Blockchains

Forking a blockchain like Diem, which does not follow the UTXO model of Bitcoin, presents unique challenges. The process involves more than just copying the ledger; it requires careful management of the blockchain's state, especially when removing accounts. The Diem blockchain, utilizing the MoveVM, necessitates a three-step procedure for account removal:

1. **Account Sunset**: Brick the account by assigning an unrecoverable authentication key, rendering it inactive.
2. **State Adjustment**: Update any system-wide state impacted by the account removal to ensure consistency across the network, such as adjusting the total supply counter.
3. **Database Cleanup**: Remove the accounts::Account struct to make the address undiscoverable, noting that specialized offline processing is required for complete removal from the database's Merkle tree.

### Important Note
After these operations, the address can still receive state changes from offline database processing. Full removal from the database necessitates specialized offline procedures outside of a MoveVM session.

## Quick Start
> Note: All validators participating in the hard fork must have a online validator configuration allready in place.

To facilitate a hard fork, use the following command, which encapsulates the necessary steps into a single operation:

```bash
cd ~/libra-framework/tools/rescue; make hard-fork
```

This command is designed for a smooth transition, allowing you and your colleagues to embark on the new chain with your current state.

## Environment Variables and Paths

Customize the hard fork process by setting the following environment variables according to your setup:

- **SOURCE_PATH** (default: ~/libra-framework): The path to your Libra framework.
- **LIBRA_PATH** (default: ~/.libra): The path to your Libra framework configurations.
- **DATA_PATH** (default: ${LIBRA_PATH}/data): The path to your Libra data directory.
- **DB_PATH** (default: ${DATA_PATH}/db): The path to your database.
- **VALS_FILE** and **ACCOUNT_FILE**: Paths to your validators and account configuration files, respectively. These will need to be filled in appropriately. A PR should be submitted for a historical record. Templates can be found in:
    - Validators: `${SOURCE_PATH}/tools/rescue/fixtures/fork/validators.json`
    - Accounts to drop: `${SOURCE_PATH}/tools/rescue/fixtures/fork/sample_fork_user.json`
    

Example usage:

```bash
SOURCE_PATH=/home/ubuntu/libra-framework make hard-fork
```

## Detailed Operation Breakdown

For those curious about the inner workings, the hard fork process includes:

1. Verifying your commit hash matches that of your collaborators.
2. Building necessary binaries and tools.
3. Installing tools globally to your cargo/bin directory.
4. Fetching the database. (Note: It's recommended that all validators stop and use their own databases.)
5. Executing the hard fork: This updates the framework, sets the new validator set, and drops specified accounts. Then, it creates a blob for database application.
6. Updating the waypoint for subsequent operations.
7. Bootstrapping the database with the hard fork blob.

After completing these steps, you can start your nodes and begin operating on the new chain.
