---
sidebar_position: 3
description: 'Create an Account'
---

# Wallet 

## Description
The Libra wallet tool provides essential functionalities for managing digital wallets within the 0L Network ecosystem. It is designed to handle digital currencies and assets through secure key management, account maintenance, and transaction processes.

### Core vs. Legacy Wallets
The wallet tool comprises two main components: `core` and `legacy`. In previous Libra versions(V5 and below) the software used the legacy format, while Legacy wallets were migrated with the hard fork from V5 -> V6.9.0 it is recommended users now create wallets using HKDF. Here is an outline that represents different approaches and functionalities of each of the wallet types:

#### Legacy Wallet
- **Compatibility**: Maintains functionality and compatibility with older wallet versions. This includes handling legacy address formats and key derivation schemes.
- **Simpler Security Model**: Features a less complex security model, evident from the unencrypted storage of mnemonics and simpler key management.
- **Transition Support**: Acts as a transitional component for users migrating from older systems to the newer, more secure core wallet system.

#### Core Wallet
- **Modern Cryptography**: Utilizes ed25519 and Hierarchical Key Derivation Function (HKDF) based on RFC 5869, aligning with current cryptographic standards.
- **Key Management**: Manages a variety of key types, including mnemonic phrases, with a focus on security and compliance with modern standards.
- **Future-Proof**: The core wallet is an evolving component, indicating ongoing improvements and updates to maintain security and feature enhancements.

## How to Use the CLI Tool
The wallet CLI tool offers a user-friendly command-line interface for interacting with the 0L Network. Key functionalities include:


### Key Generation
- **Syntax**: `libra wallet keygen [--mnemonic <MNEMONIC>] [--output_dir <DIRECTORY>]`
- **Function**: Generates new keys and account addresses. Can recover accounts from mnemonics.
- **Example**:
  - To generate a new key and account address:
    ```
    libra wallet keygen --output_dir /path/to/directory
    ```
  - To recover an account using a mnemonic:
    ```
    libra wallet keygen --mnemonic "your mnemonic phrase here"
    ```

### Legacy Operations
- **Syntax**: `libra wallet legacy [--display] [--output_path <PATH>] [--keygen]`
- **Function**: Manages operations related to legacy wallets, including displaying private keys, saving keys to a specified path, and generating new keys in the legacy format.
- **Example**:
  - To display private keys in the legacy format:
    ```
    libra wallet legacy --display
    ```
  - To save legacy keys to a file:
    ```
    libra wallet legacy --output_path /path/to/keys
    ```
  - To generate new keys in the legacy format:
    ```
    libra wallet legacy --keygen
    ```

---



---
