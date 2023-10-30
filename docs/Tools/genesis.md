---
sidebar_position: 3
---

# Libra Genesis Tool

## Description
The Genesis tool within the Libra framework serves as a foundational utility for initializing and configuring the state of the Libra blockchain. It facilitates the creation of the genesis block — the very first block in the blockchain — and sets up various initial parameters and configurations for the network.

This tool is crucial for setting up a new Libra blockchain network or resetting an existing network to a new initial state. It's particularly useful for testnets, development environments, and initializing mainnet configurations.

### Important Note
This package is built separately from the main Libra CLI tool. As per its `Cargo.toml`, it is compiled as `libra-genesis-tools`. To build the tool, run the following command:
```
cargo build --package libra-genesis-tools
```

## How to Use the CLI Tool
The Genesis tool CLI (`main.rs`) offers a user-friendly command-line interface for initiating and configuring the Libra blockchain. It's centered around three primary commands:

### Genesis
- **Purpose**: Initializes the genesis block with specified configurations.
- **Key Features**:
  - GitHub integration for managing configurations and data.
  - Supply settings for initial token distribution and asset management.
- **Syntax**: `libra-genesis-tools genesis --org_github <ORG> --name_github <REPO_NAME> [--local_framework] [--json_legacy <PATH>]`
- **Function**: Initializes the genesis block using GitHub-based configurations.
- **Example**:
  ```
  libra-genesis genesis --org_github libra --name_github genesis --local_framework
  ```

### Register
- **Purpose**: Manages registration processes, focusing mainly on GitHub interactions.
- **Key Features**:
  - Facilitates GitHub-based configurations and data retrieval for the blockchain setup.
- **Syntax**: `libra-genesis-tools register --org_github <ORG> --name_github <REPO_NAME>`
- **Function**: Registers GitHub repositories and settings for blockchain setup.
- **Example**:
  ```
  libra-genesis register --org_github libra --name_github registry
  ```

### Wizard
- **Purpose**: Provides a guided, interactive setup process for initializing the genesis block and related configurations.
- **Key Features**:
  - User-friendly interface for blockchain configuration.
  - Combines GitHub integration and supply settings in an interactive setup.
- **Syntax**: `libra-genesis-tools wizard --org_github <ORG> --name_github <REPO_NAME> --local_framework`
- **Function**: Guides the user through an interactive process for setting up the genesis block and related configurations.
- **Example**:
  ```
  libra-genesis wizard --org_github libra --name_github setup --local_framework
  ```

---

