---
sidebar_position: 3
description: 'Initialize configs'
---


# Config

## Description
The `ConfigCli` tool is a command-line utility within the Libra Framework designed to facilitate the generation and management of configuration files for various components of the 0L Network. Its primary function is to create and modify the `libra.yaml` configuration file, which is essential for the operation of CLI tools like `txs`, `tower`, and others within the ecosystem.

The tool provides several subcommands to handle different aspects of configuration, from initializing new configurations to adjusting existing ones, as well as specialized options for validators and fullnodes.

## How to Use the Config Tool
`config` is invoked from the command line and requires a subcommand to specify the action to be taken. It can operate on a global configuration directory or a specified path, and it can manage different network profiles for various deployment environments like MAINNET, TESTNET, and DEVNET.

### Subcommands

#### Init
- **Purpose**: Initializes the `libra.yaml` configuration file with options for various CLI tools.
- **Syntax**: `libra config init [OPTIONS]`
- **Options**:
  - `--force-address <ADDRESS>`: Force a specific account address instead of deriving from mnemonic.
  - `--force-authkey <AUTHKEY>`: Force a specific authentication key, requires `--force_address`.
  - `--test-private_key <KEY>`: Use a private key for initialization (intended for testing).
  - `--playlist-url <URL>`: URL for a network playlist to load default nodes from.
- **Example**:
  ```
  libra config init --force-address 0x1 --force-authkey "0x..." --test-private-key "0x123..."
  ```

#### Fix
- **Purpose**: Attempts to fix or adjust the `libra.yaml` file with various options.
- **Syntax**: `libra config fix [OPTIONS]`
- **Options**:
  - `--address`: Reset the address from mnemonic and look up the chain for the actual address.
  - `--remove-profile <NAME>`: Remove the profile with the specified name.
  - `--force-url <URL>`: Force overwrite all URLs in the current network profile to this URL.
- **Example**:
  ```
  libra config fix --address --remove-profile "test_profile"
  ```

#### ValidatorInit
- **Purpose**: Generates the validators' configuration file.
- **Syntax**: `libra config validator-init [OPTIONS]`
- **Options**:
  - `--check`: Check the files generated.
- **Example**:
  ```
  libra config validator-init --check
  ```

#### FullnodeInit
- **Purpose**: Generates a fullnode directory and adds `fullnode.yaml` from the template.
- **Syntax**: `libra config fullnode-init [OPTIONS]`
- **Options**:
  - `--home-path <PATH>`: Path to libra config and data files, defaults to `$HOME/.libra`.
- **Example**:
  ```
  libra config fullnode-init --home_path "/path/to/fullnode"
  ```

### Note
When using the `ConfigCli` tool, it is important to be aware of the network and profile context in which you're operating. Make sure to back up your existing configurations before making changes, especially in a production environment.
