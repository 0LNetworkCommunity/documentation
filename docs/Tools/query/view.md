---
sidebar_label: 'View'
sidebar_position: 7
description: 'Access pre-defined view methods'
---

# View
---

## Description

Throughout the codebase, there are many public methods with the `#[view]` attribute. These methods are meant to retrieve various states and network values that are not related to a specific account (or at least not nessecerily).

The `query view` command allows you to invoke those methods from the command line, including the passing of required params when needed.

---

## Usage

```
libra query view [OPTIONS] --function-id <FUNCTION_ID>

Options:
  -f, --function-id <FUNCTION_ID>  Function identifier has the form <ADDRESS>::<MODULE_ID>::<FUNCTION_NAME>
                                   
                                   Example:
                                   0x1::coin::balance
                                   
  -t, --type-args <TYPE_ARGS>      Type arguments separated by commas
                                   
                                   Example:
                                   'u8, u16, u32, u64, u128, u256, bool, address, vector<u8>, signer'
                                   
  -a, --args <ARGS>                Function arguments separated by commas
                                   
                                   Example:
                                   '0x1, true, 12, 24_u8, x"123456"'
                                   
  -h, --help                       Print help

```

## Examples

:::note View invocation format
Note that the examples are querying the canonical system resource at `0x1`, however, other view methods can be queried in the same way, following the `RESOURCE_ADDRESS::MODULE_NAME::FUNCTION_NAME` pattern
:::


```
# Get the total suppply of the GAS coin
# This will call the method with the following signature
#
# #[view]
# public fun supply<CoinType>(): Option<u128> acquires CoinInfo {...}

libra query view --function-id 0x1::gas_coin::supply

{
  "body": [
    "99999999355972010"
  ]
}
```

```
# Get validators votes for network upgrade proposal #2. First `Yes` vote count, then `No` vote count

# This will call the method with the following signature (note the expected `proposal_id` argument that is passed with the --args flag)
# #[view]
# public fun get_votes(proposal_id: u64) {...}

libra query view --function-id 0x1::diem_governance::get_votes --args 2

{
  "body": [
    "10",
    "0"
  ]
}
```

```
# Get the list of validators that vouched for an account

# This will call the method with the following signature (note the expected `proposal_id` argument that is passed with the --args flag)
# #[view]
# public fun all_vouchers(val: address): vector<address> acquires MyVouches {...}

libra query view --function-id 0x1::vouch::all_vouchers --args 0xd1281de242839fc939745996882c5fc2

{
  "body": [
    [
      "0xebbd5fb7042a7021dd71e3f6bddd55f3",
      "0xd3ad1f9682d57d562efd23924aa8aaaf4c0410df5b1a9ff3e4b1efa04273f5b9",
      "0x32f24e0488a4e189d38fccd1f2a94b53",
      "0x3d3763dd90531da4fa264b4b76c9c5a76435c9b3eed2699b1f79bda28d23c42e",
      "0x304a03c0b4acdfdce54bfaf39d4e0448",
      "0xd67f3ff22bd719eb5be2df6577c9b42d",
      "0xc208c09ecb52d626ef037c2011ba2d7b18f999eee5be54ac8161627613500c93"
    ]
  ]
}
```
