---
sidebar_position: 3
description: 'Start the 0L Network'
---

# Genesis


## Description
The Genesis tool within the Libra Framework serves as a foundational utility for initializing and configuring the state of the 0L blockchain. It facilitates the creation of the genesis block — the very first block in the blockchain — and sets up various initial parameters and configurations for the network.

This tool is crucial for setting up a new 0L blockchain network or resetting an existing network to a new initial state. It's particularly useful for testnets, development environments, and initializing mainnet configurations.

### Important Note
This package is built separately from the main Libra CLI tool. As per its `Cargo.toml`, it is compiled as `libra-genesis-tools`. To build the tool, run the following command:
```
cargo build --package libra-genesis-tools
```

## How to Use the CLI Tool
The Genesis tool CLI offers a user-friendly command-line interface for initiating and configuring the Libra blockchain. It's centered around three primary commands:

> You need a Github Auth Token and the cli searches in `~/.libra/github_token.txt` for it but you can also specify a path. More info [here](https://docs.github.com/rest/repos/contents#create-or-update-file-contents)

### Genesis
- **Purpose**: Initializes the genesis block with specified configurations.
- **Key Features**:
  - GitHub integration for managing configurations and data.
  - Supply settings for initial token distribution and asset management.
- **Syntax**: `libra-genesis-tools genesis --token-github <path/to/token> --org-github <ORG> --name-github <REPO_NAME> [--local-framework] [--json-legacy <PATH>] [--target-supply <TARGET_SUPPLY>] [--target-future-uses <TARGET_FUTURE_USES>] [--years-escrow <YEARS_ESCROW>] [--map-dd-to-slow <MAP_DD_TO_SLOW>]`
- **Function**: Initializes the genesis block using GitHub-based configurations.
- **Example**:
  ```
  	cargo r -- genesis --org-github OLNetworkCommunity \
	--name-github genesis-repo \
	--local-framework \
	--json-legacy ./tests/fixtures/recovery.json \
	--target-supply 10000000 \
	--target-future-uses 0.7 \
	--years-escrow 7 \
	--map-dd-to-slow 3A6C51A0B786D644590E8A21591FA8E2 \
	--map-dd-to-slow  2B0E8325DEA5BE93D856CFDE2D0CBA12
  ```

### Register
- **Purpose**: Manages registration processes, focusing mainly on GitHub interactions.
- **Key Features**:
  - Facilitates GitHub-based configurations and data retrieval for the blockchain setup.
- **Syntax**: `libra-genesis-tools register --token-github <path/to/token> --org_github <ORG> --name_github <REPO_NAME>`
- **Function**: Registers GitHub repositories and settings for blockchain setup.
- **Example**:
  ```
  libra-genesis-tools register  --org_github libra --name_github registry
  ```

### Wizard
- **Purpose**: Provides a guided, interactive setup process for initializing the genesis block and related configurations.
- **Key Features**:
  - User-friendly interface for blockchain configuration.
  - Combines GitHub integration and supply settings in an interactive setup.
- **Syntax**: `libra-genesis-tools wizard --token-github <path/to/token> --org_github <ORG> --name_github <REPO_NAME> --local_framework`
- **Function**: Guides the user through an interactive process for setting up the genesis block and related configurations.
- **Example**:
  ```
  libra-genesis-tools wizard  --org_github libra --name_github setup --local_framework
  ```

---

