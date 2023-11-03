---
sidebar_position: 3
description: 'Interact with Move Code'
---

# Txs - Generate Transaction



## Description
Generates a transaction to execute an Entry function on the 0L Network. This command is used to create transactions that call Entry functions of smart contracts deployed on-chain, facilitating direct interaction with public smart contract code.

### Generate-Transaction Command
- **Function**: Creates a transaction for interacting with public smart contract functions on the 0L Network.
- **Syntax**: `libra txs generate-transaction --function-id <FUNCTION_ID> [OPTIONS]`
- **Parameters**:
  - `--function-id <FUNCTION_ID>`: The fully qualified identifier of the smart contract function to be invoked. This identifier includes the module address, module name, and function name.
- **Example**:
  ```
  libra txs generate-transaction --function-id 0xd1281de242839fc939745996882c5fc2::message::set_message --args '42'
  ```
  This command generates a transaction to invoke the `set_message` function within the `message` module located at address `0xd1281de242839fc939745996882c5fc2`, passing '42' as the argument.
