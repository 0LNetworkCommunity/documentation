---
sidebar_position: 3
description: 'Publish Move Modules'
---

# Txs - Publish



## Description
The `txs` tool is instrumental in sending Package Publish transactions, enabling developers to deploy their smart contracts on the Libra blockchain. An example Move package, used in internal "smoke tests", can be found under `./tests/fixtures/test_publish`.

### Publishing Smart Contracts

#### Compiling
Before publishing, it is advised to test and compile the code. However, the `txs publish` command will automatically compile the package as part of the submission process, making pre-compilation optional but recommended for ensuring smooth deployment.

To compile you can use the `libra move` tool with the command `libra move compile --package-dir ../../tools/txs/tests/fixtures/test_publish` 

#### Named Addresses
When deploying a module, the address in the module must match the address of the account (signer) performing the publication. There are two approaches to handle addresses in your Move package:

1. **Hard-coding the Address**:
    You can specify the address directly in the `Move.toml` file. For example:
    ```toml
    [package]
    name = 'test_publish'
    version = '1.0.0'

    [addresses]
    this_address='0000000000000000000000000000000069a385e1744e33fbb24a42ecbd1603e3'
    ```

    And in your Move contract:
    ```move
    module this_address::message {
        // Your code here
    }
    ```

2. **Setting the Name at Publishing**:
    If you prefer not to hard-code the address, you can use the `--named-addresses` CLI argument to dynamically set the address at the time of publishing. The argument takes pairs of strings: an alias (key) and an address (value).
    ```sh
    txs publish --package-dir ./path/to/Move/code --named-addresses "this_address=0x1234"
    ```

### Publish a Smart Contract
- **Function**: Deploys smart contracts (Move modules and scripts) onto the Libra blockchain.
- **Syntax**: `libra txs publish --dev|--package-dir <PACKAGE_DIR>|--output-dir <OUTPUT_DIR> | --skip-fetch-latest-git-deps|--bytecode-version <BYTECODE_VERSION>`
- **Parameters**:.
  - `--dev` (optional): Enables dev mode, which uses all dev-addresses and dev-dependencies. Dev mode allows for changing dependencies and addresses to the preset [dev-addresses] and [dev-dependencies] fields.  This works both inside and out of tests for using preset values. Currently, it also additionally pulls in all test compilation artifacts
  - `--package-dir <PACKAGE_DIR>`: Path to a move package (the folder with a Move.toml file)
  - `--output-dir <OUTPUT_DIR>` (optional): Path to save the compiled move package. Defaults to `<package_dir>/build`
  - `--skip-fetch-latest-git-deps` (optional): Skip pulling the latest git dependencies.If you don't have a network connection, the compiler may fail due to no ability to pull git dependencies. This will allow overriding this for local development.
  - `--bytecode-version <BYTECODE_VERSION>` (optional): Specify the version of the bytecode the compiler is going to emit
- **Examples**:
  - Publishing a Module:
    ```
    libra txs publish --module /path/to/module
    ```
    This command publishes a module located at `/path/to/module`.
  

---
