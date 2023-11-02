---
sidebar_position: 3
sidebar_label: "Restore"
description: 'Restore and sync the OL Network database to the current state'
---

# Restore

Restore the Database to be up to date with the current state of the Network. Repostitory is located [here](https://github.com/0LNetworkCommunity/epoch-archive-testnet)

# Epoch Archive Backup & Restore Guide
:::note
This guide is referencing the REX testnet as we develop the Libra software for v6.9.x (soon v7)
:::

Welcome to the Epoch Archive Backup & Restore guide. This README is designed to provide a comprehensive walkthrough to manage 0l Network node backups and restoration for your system using the provided Makefile.

## Prerequisites

- Ensure you have the necessary tools installed, such as the latest
- The Makefile is designed for libra-framework v6.9.x (soon v7) Ensure you are using the correct version.

## Getting started

  Clone the repo and prepare the binary:
  
  ```
  cd ~
  git clone https://github.com/0LNetworkCommunity/epoch-archive-testnet
  cd ~/epoch-archive-testnet
  make bins
  ```


## Restoring to the latest version of the 0L Network public backup

### This is most likely all you will need to restore and start/resume syncing:

  ```
    cd ~/epoch-archive-testnet
    make restore-all
  ```


## Here are some other tools you can make use of
  
1. **Wipe Existing Database**:
    ```bash
    make wipe-db
    ```

2. **Restore Genesis Data**:
    ```bash
    make restore-genesis
    ```

3. **Restore to a Specific Version**:
    ```
    make VERSION_START=[db_starting_transaction] VERSION=[db_target_transaction] restore-latest
    ```


## Creating and Maintaining Backups

1. **Prepare Archive Path**:
    ```
    make prep-archive-path
    ```

2. **Backup Genesis Data**:
    ```
    make backup-genesis
    ```

3. **Continuous Backup**:
    ```
    make backup-continuous
    ```

4. **Backup by Epoch**:
    ```
    make backup-epoch
    ```

5. **Backup State Snapshot**:
    ```
    make backup-snapshot
    ```

6. **Backup Transactions**:
    ```
    make backup-transaction
    ```

7. **Setup Git for Backup**:
    ```
    make git-setup
    ```

8. **Start Continuous Backup**:
    ```
    make start-continuous
    ```

9. **Stop Continuous Backup**:
    ```
    make stop-continuous
    ```

10. **Backup Logging Cleanup**:
    ```
    make log-cleanup
    ```

11. **Scheduled Tasks**:
    This is what we use to continually provide public backups as they become available:
    ```
    make cron
    ```

## Other Commands

- **`make check`**: Validates the environment and displays the configuration.
- **`make wipe-backups`**: Deletes all backups.
- **`make git`**: Commits and pushes the recent backups to the repository.
- **`make git-sling-recent`**: Commits and pushes the 20 most recent backups to the repository.
- **`make git-sling-all`**: Commits and pushes all backups to the repository in batches.