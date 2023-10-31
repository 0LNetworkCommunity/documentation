---
title: "Move"
id: "index"
hidden: true
---
:::danger WIP
This page is a work in progress and may contain false information
:::

# Txs - Move

> The Move CLI is a vendor package and original documentation can be found [here](https://github.com/0LNetworkCommunity/diem/tree/release/third_party/move/tools/move-cli)

## Description
The Move command-line interface (Move CLI) is a tool that provides an easy way to interact with Move, to experiment
with writing and running Move code, and to experiment with developing new tools useful
for Move development. To reflect this, the Move CLI commands are grouped into
three main subcommands:
* **package commands**: are commands to create, compile, and test Move packages, as well as perform other operations related to packages. These do not rely on a Move Adapter implementation nor an implementation of storage.
* **sandbox commands**: are commands that allow you to write Move modules and scripts, write and run scripts and tests, and view the resulting state of execution in a local sandboxed environment.
* **experimental commands**: are experimental commands that are currently in development.

Every Move CLI command, with the exception of `package create`, is expected to be run within the context of a [Move package](https://move-language.github.io/move/packages.html).

### Compliling
The `libra` CLI can be used to compile a Move package locally.
<!-- #TODO: The below example uses the `HelloBlockchain` in [move-examples](https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples). -->

The named addresses can be either an account address, or a profile name.

```bash
# TODO: $ libra move compile --package-dir aptos-move/move-examples/hello_blockchain/ --named-addresses hello_blockchain=superuser
```

The above command will generate the below terminal output:
```bash
{
  "Result": [
    "742854F7DCA56EA6309B51E8CEBB830B12623F9C9D76C72C3242E4CAD353DEDC::Message"
  ]
}
```

## Compiling and unit testing Move

The `libra` CLI can also be used to compile and run unit tests locally.
In this example, we'll use the `HelloBlockchain` in [move-examples](https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples).

```bash
#TODO: $ libra move test --package-dir aptos-move/move-examples/hello_blockchain/ --named-addresses hello_blockchain=superuser
```
The above command will generate the following terminal output:
```bash
INCLUDING DEPENDENCY DiemFramework
INCLUDING DEPENDENCY DiemsStdlib
INCLUDING DEPENDENCY DiemStdlib
BUILDING Examples
Running Move unit tests
[ PASS    ] 0x742854f7dca56ea6309b51e8cebb830b12623f9c9d76c72c3242e4cad353dedc::MessageTests::sender_can_set_message
[ PASS    ] 0x742854f7dca56ea6309b51e8cebb830b12623f9c9d76c72c3242e4cad353dedc::Message::sender_can_set_message
Test result: OK. Total tests: 2; passed: 2; failed: 0
{
  "Result": "Success"
}
```
## Generating test coverage details for Move
The `libra` CLI can be used to analyze and improve the testing of your Move modules. To use this feature:
1. In your `libra` source checkout, navigate to the `libra-framework/framework/move-stdlib` directory.
2. Execute the command:
   ```bash
   $ libra move test --coverage
   ```
3. Receive results in standard output containing the result for each test case followed by a basic coverage summary resembling:
   ```bash
   BUILDING MoveStdlib
Running Move unit tests
[ PASS    ] 0x1::vector_tests::append_empties_is_empty
[ PASS    ] 0x1::option_tests::borrow_mut_none
[ PASS    ] 0x1::fixed_point32_tests::ceil_can_round_up_correctly
[ PASS    ] 0x1::features::test_change_feature_txn
[ PASS    ] 0x1::bcs_tests::bcs_bool
[ PASS    ] 0x1::bit_vector_tests::empty_bitvector
[ PASS    ] 0x1::option_tests::borrow_mut_some
Test result: OK. Total tests: 149; passed: 149; failed: 0
+-------------------------+
| Move Coverage Summary   |
+-------------------------+
Module 0000000000000000000000000000000000000000000000000000000000000001::bcs
>>> % Module coverage: NaN
Module 0000000000000000000000000000000000000000000000000000000000000001::fixed_point32
>>> % Module coverage: 100.00
Module 0000000000000000000000000000000000000000000000000000000000000001::hash
>>> % Module coverage: NaN
Module 0000000000000000000000000000000000000000000000000000000000000001::vector
>>> % Module coverage: 92.19
Module 0000000000000000000000000000000000000000000000000000000000000001::error
>>> % Module coverage: 0.00
Module 0000000000000000000000000000000000000000000000000000000000000001::acl
>>> % Module coverage: 0.00
Module 0000000000000000000000000000000000000000000000000000000000000001::bit_vector
>>> % Module coverage: 97.32
Module 0000000000000000000000000000000000000000000000000000000000000001::signer
>>> % Module coverage: 100.00
Module 0000000000000000000000000000000000000000000000000000000000000001::features
>>> % Module coverage: 69.41
Module 0000000000000000000000000000000000000000000000000000000000000001::option
>>> % Module coverage: 100.00
Module 0000000000000000000000000000000000000000000000000000000000000001::string
>>> % Module coverage: 81.82
+-------------------------+
| % Move Coverage: 83.50  |
+-------------------------+
Please use `libra move coverage -h` for more detailed test coverage of this package
{
  "Result": "Success"
}
   ```

4. Optionally, narrow down your test runs and results to a specific package name with the `--filter` option, like so:
   ```bash
   $ libra move test --coverage --filter vector
   ```

   With results like:
   ```
   BUILDING MoveStdlib
   Running Move unit tests
   [ PASS    ] 0x1::bit_vector_tests::empty_bitvector
   [ PASS    ] 0x1::vector_tests::append_empties_is_empty
   [ PASS    ] 0x1::bit_vector_tests::index_bit_out_of_bounds
   [ PASS    ] 0x1::vector_tests::append_respects_order_empty_lhs
   ```
5. Run the `libra move coverage` command to obtain more detailed coverage information.
6. Optionally, isolate the results to a module by passing its name to the `--module` option, for example:
   ```bash
   $ libra move coverage source --module signer
   ```

   With results:
   ```
   module std::signer {
       // Borrows the address of the signer
       // Conceptually, you can think of the `signer` as being a struct wrapper arround an
       // address
       // ```
       // struct signer has drop { addr: address }
       // ```
       // `borrow_address` borrows this inner field
       native public fun borrow_address(s: &signer): &address;

       // Copies the address of the signer
       public fun address_of(s: &signer): address {
           *borrow_address(s)
       }

    /// Return true only if `s` is a transaction signer. This is a spec function only available in spec.
    spec native fun is_txn_signer(s: signer): bool;

    /// Return true only if `a` is a transaction signer address. This is a spec function only available in spec.
    spec native fun is_txn_signer_addr(a: address): bool;
}
{
  "Result": "Success"
}
   ```
6. Find failures and iteratively improve your testing and running these commands to eliminate gaps in your testing coverage.

## Proving Move

<!-- TODO:The `libra` CLI can be used to run [Move Prover](../../move/prover/index.md), which is a formal verification tool for the Move language. The below example proves the `hello_prover` package in [move-examples](https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples). -->
```bash
<!-- TODO: libra move prove --package-dir aptos-move/move-examples/hello_prover/ -->
```
The above command will generate the following terminal output:
```bash
SUCCESS proving 1 modules from package `hello_prover` in 1.649s
{
  "Result": "Success"
}
```

Move Prover may fail with the following terminal output if the dependencies are not installed and set up properly:
```bash
FAILURE proving 1 modules from package `hello_prover` in 0.067s
{
  "Error": "Move Prover failed: No boogie executable set.  Please set BOOGIE_EXE"
}
```
<!-- TODO: In this case, see [Install the dependencies of Move Prover](../../tools/aptos-cli/install-cli/index.md#step-3-optional-install-the-dependencies-of-move-prover). -->

## Profiling gas usage

<!-- TODO: This *experimental* feature lets you [profile gas usage](https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/aptos-gas-profiling) in the Aptos virtual machine locally rather than [simulating transactions](../../concepts/gas-txn-fee.md#estimating-the-gas-units-via-simulation) at the [fullnode](https://fullnode.devnet.aptoslabs.com/v1/spec#/operations/simulate_transaction). You may also use it to visualize gas usage in the form of a flame graph. -->

Run the gas profiler by appending the `--profile-gas` option to the Libra CLI `move publish`, `move run` or `move run-script` command, for example:
```bash
libra move publish --profile-gas
```

And receive output resembling:
```bash
Compiling, may take a little while to download git dependencies...
BUILDING empty_fun
package size 427 bytes
Simulating transaction locally with the gas profiler...
This is still experimental so results may be inaccurate.
Execution & IO Gas flamegraph saved to gas-profiling/txn-69e19ee4-0x1-code-publish_package_txn.exec_io.svg
Storage fee flamegraph saved to gas-profiling/txn-69e19ee4-0x1-code-publish_package_txn.storage.svg
{
  "Result": {
    "transaction_hash": "0x69e19ee4cc89cb1f84ee21a46e6b281bd8696115aa332275eca38c4857818dfe",
    "gas_used": 1007,
    "gas_unit_price": 100,
    "sender": "dbcbe741d003a7369d87ec8717afb5df425977106497052f96f4e236372f7dd5",
    "success": true,
    "version": 473269362,
    "vm_status": "status EXECUTED of type Execution"
  }
}
```

Find the flame graphs in the newly created `gas-profiling/` directory. To interact with a graph, open the file in a web browser.

Note these limitations of the experimental gas profiling feature:

  * It may produce results that are different from the simulation.
  * The graphs may contain errors, and the numbers may not add up to the total gas cost as shown in the transaction output.

## Debugging and printing stack trace

<!-- TODO: In this example, we will use `DebugDemo` in [debug-move-example](https://github.com/aptos-labs/aptos-core/tree/main/crates/aptos/debug-move-example).

Now, you can use `debug::print` and `debug::print_stack_trace` in your [DebugDemo Move file](https://github.com/aptos-labs/aptos-core/tree/main/crates/aptos/debug-move-example/sources/DebugDemo.move). -->

You can run the following command:
```bash
# $ libra move test --package-dir crates/aptos/debug-move-example
```

The command will generate the following output:
```bash
Running Move unit tests
[debug] 0000000000000000000000000000000000000000000000000000000000000001
Call Stack:
    [0] 0000000000000000000000000000000000000000000000000000000000000001::Message::sender_can_set_message

        Code:
            [4] CallGeneric(0)
            [5] MoveLoc(0)
            [6] LdConst(0)
          > [7] Call(1)
            [8] Ret

        Locals:
            [0] -
            [1] 0000000000000000000000000000000000000000000000000000000000000001


Operand Stack:
```


## Publishing a Move package with a named address

<!-- TODO: In this example, we'll use the `HelloBlockchain` in [move-examples](https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples). -->

Publish the package with your account address set for `HelloBlockchain`.

Here, you need to change 8946741e5c907c43c9e042b3739993f32904723f8e2d1491564d38959b59ac71 to your account address.
```bash
$ libra move publish --package-dir aptos-move/move-examples/hello_blockchain/ --named-addresses hello_blockchain=8946741e5c907c43c9e042b3739993f32904723f8e2d1491564d38959b59ac71
```

:::tip
As an open source project, the source code as well as compiled code published to the Libra blockchain is inherently open by default. This means code you upload may be downloaded from on-chain data. Even without source access, it is possible to regenerate Move source from Move bytecode. To disable source access, publish with the `--included-artifacts none` argument, like so:

```
libra move publish --included-artifacts none
```
:::

You can additionally use named profiles for the addresses.  The first placeholder is `default`
```bash
# TODO: $ libra move publish --package-dir aptos-move/move-examples/hello_blockchain/ --named-addresses hello_blockchain=default
```

:::tip
When publishing Move modules, if multiple modules are in one package, then all the modules in this package must have the same account. If they have different accounts, then the publishing will fail at the transaction level.
:::

## Running a Move function

Now that you've published the function above, you can run it.

Arguments must be given a type with a colon to separate it.  In this example, we want the input to be
parsed as a string, so we put `string:Hello!`.

```bash
$ libra move run --function-id 0xb9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb::message::set_message --args string:hello!
{
  "Result": {
    "changes": [
      {
        "address": "b9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
        "data": {
          "authentication_key": "0xb9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
          "self_address": "0xb9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
          "sequence_number": "3"
        },
        "event": "write_resource",
        "resource": "0x1::account::Account"
      },
      {
        "address": "b9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
        "data": {
          "coin": {
            "value": "9777"
          },
          "deposit_events": {
            "counter": "1",
            "guid": {
              "id": {
                "addr": "0xb9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
                "creation_num": "1"
              }
            }
          },
          "withdraw_events": {
            "counter": "1",
            "guid": {
              "id": {
                "addr": "0xb9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
                "creation_num": "2"
              }
            }
          }
        },
        "event": "write_resource",
        TODO: "resource": "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>"
      },
      {
        "address": "b9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
        "data": {
          "counter": "4"
        },
        "event": "write_resource",
        "resource": "0x1::guid::Generator"
      },
      {
        "address": "b9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
        "data": {
          "message": "hello!",
          "message_change_events": {
            "counter": "0",
            "guid": {
              "id": {
                "addr": "0xb9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
                "creation_num": "3"
              }
            }
          }
        },
        "event": "write_resource",
        "resource": "0xb9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb::Message::MessageHolder"
      }
    ],
    "gas_used": 41,
    "success": true,
    "version": 3488,
    "vm_status": "Executed successfully"
  }
}
```

Additionally, profiles can replace addresses in the function id.
```bash
$ libra move run --function-id default::message::set_message --args string:hello!
{
  "Result": {
    "changes": [
      {
        "address": "b9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
        "data": {
          "authentication_key": "0xb9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
          "self_address": "0xb9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
          "sequence_number": "3"
        },
        "event": "write_resource",
        "resource": "0x1::account::Account"
      },
      {
        "address": "b9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
        "data": {
          "coin": {
            "value": "9777"
          },
          "deposit_events": {
            "counter": "1",
            "guid": {
              "id": {
                "addr": "0xb9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
                "creation_num": "1"
              }
            }
          },
          "withdraw_events": {
            "counter": "1",
            "guid": {
              "id": {
                "addr": "0xb9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
                "creation_num": "2"
              }
            }
          }
        },
        "event": "write_resource",
        TODO: "resource": "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>"
      },
      {
        "address": "b9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
        "data": {
          "counter": "4"
        },
        "event": "write_resource",
        "resource": "0x1::guid::Generator"
      },
      {
        "address": "b9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
        "data": {
          "message": "hello!",
          "message_change_events": {
            "counter": "0",
            "guid": {
              "id": {
                "addr": "0xb9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb",
                "creation_num": "3"
              }
            }
          }
        },
        "event": "write_resource",
        "resource": "0xb9bd2cfa58ca29bce1d7add25fce5c62220604cd0236fe3f90d9de91ed9fb8cb::Message::MessageHolder"
      }
    ],
    "gas_used": 41,
    "success": true,
    "version": 3488,
    "vm_status": "Executed successfully"
  }
}
```

## Arguments in JSON

### Package info

<!-- TODO:This section references the [`CliArgs` example package](https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples/cli_args), which contains the following manifest: -->

<!-- TODO: import move_toml from '!!raw-loader!../../../../aptos-move/move-examples/cli_args/Move.toml'; -->

<!-- TODO:<CodeBlock language="toml" title="Move.toml">{move_toml}</CodeBlock> -->

Here, the package is deployed under the named address `test_account`.

:::tip
<!-- TODO: Set your working directory to [`aptos-move/move-examples/cli_args`](https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples/cli_args) to follow along: -->

```bash
# TODO: cd <aptos-core-parent-directory>/aptos-core/aptos-move/move-examples/cli_args
```
:::

### Deploying the package

Start by mining a vanity address for Ace, who will deploy the package:


```bash title=Command
aptos key generate \
    --vanity-prefix 0xace \
    --output-file ace.key
```

<details><summary>Output</summary>

```bash
{
  "Result": {
    "Account Address:": "0xacef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46",
    "PublicKey Path": "ace.key.pub",
    "PrivateKey Path": "ace.key"
  }
}
```

</details>

:::tip
The exact account address should vary for each run, though the vanity prefix should not.
:::

Store Ace's address in a shell variable so you can call it inline later on:

```bash
# Your exact address should vary
ace_addr=0xacef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46
```

Fund Ace's account with the faucet (either devnet or testnet):

```bash title=Command
aptos account fund-with-faucet --account $ace_addr
```

<details><summary>Output</summary>

```bash
{
  "Result": "Added 100000000 Octas to account acef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46"
}
```

</details>

Now publish the package under Ace's account:

```bash title=Command
libra move publish \
    --named-addresses test_account=$ace_addr \
    --private-key-file ace.key \
    --assume-yes
```

<details><summary>Output</summary>

```bash
{
  "Result": {
    "transaction_hash": "0x1d7b074dd95724c5459a1c30fe4cb3875e7b0478cc90c87c8e3f21381625bec1",
    "gas_used": 1294,
    "gas_unit_price": 100,
    "sender": "acef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46",
    "sequence_number": 0,
    "success": true,
    "timestamp_us": 1685077849297587,
    "version": 528422121,
    "vm_status": "Executed successfully"
  }
}
```

</details>

### Entry functions

The only module in the package, `cli_args.move`, defines a simple `Holder` resource with fields of various data types:

```rust title="Holder in cli_args.move"
:!: static/move-examples/cli_args/sources/cli_args.move resource
```

A public entry function with multi-nested vectors can be used to set the fields:

```rust title="Setter function in cli_args.move"
:!: static/move-examples/cli_args/sources/cli_args.move setter
```

After the package has been published, `libra move run` can be used to call `set_vals()`:

:::tip
To pass vectors (including nested vectors) as arguments from the command line, use JSON syntax escaped with quotes!
:::

```bash title="Running function with nested vector arguments from CLI"
libra move run \
    --function-id $ace_addr::cli_args::set_vals \
    --type-args \
        0x1::account::Account \
        0x1::chain_id::ChainId \
    --args \
        u8:123 \
        "bool:[false, true, false, false]" \
        'address:[["0xace", "0xbee"], ["0xcad"], []]' \
    --private-key-file ace.key \
    --assume-yes
```

<details><summary>Output</summary>

```bash
{
  "Result": {
    "transaction_hash": "0x5e141dc6c28e86fa9f5594de93d07a014264ebadfb99be6db922a929eb1da24f",
    "gas_used": 504,
    "gas_unit_price": 100,
    "sender": "acef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46",
    "sequence_number": 1,
    "success": true,
    "timestamp_us": 1685077888820037,
    "version": 528422422,
    "vm_status": "Executed successfully"
  }
}
```

</details>

The function ID, type arguments, and arguments can alternatively be specified in a JSON file:

<!-- TODO: import entry_json_file from '!!raw-loader!../../../../aptos-move/move-examples/cli_args/entry_function_arguments.json'; -->

<!-- TODO: <CodeBlock language="json" title="entry_function_arguments.json">{entry_json_file}</CodeBlock> -->

Here, the call to `libra move run` looks like:

```bash title="Running function with JSON input file"
libra move run \
    --json-file entry_function_arguments.json \
    --private-key-file ace.key \
    --assume-yes
```

<details><summary>Output</summary>

```bash
{
  "Result": {
    "transaction_hash": "0x60a32315bb48bf6d31629332f6b1a3471dd0cb016fdee8d0bb7dcd0be9833e60",
    "gas_used": 3,
    "gas_unit_price": 100,
    "sender": "acef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46",
    "sequence_number": 2,
    "success": true,
    "timestamp_us": 1685077961499641,
    "version": 528422965,
    "vm_status": "Executed successfully"
  }
}
```

</details>

:::tip
If you are trying to run the example yourself don't forget to substitute Ace's actual address for `<test_account>` in `entry_function_arguments.json`!
:::

### View functions

Once the values in a `Holder` have been set, the `reveal()` view function can be used to check the first three fields, and to compare type arguments against the last two fields:

```rust title="View function"
:!: static/move-examples/cli_args/sources/cli_args.move view
```

This view function can be called with arguments specified either from the CLI or from a JSON file:

```bash title="Arguments via CLI"
libra move view \
    --function-id $ace_addr::cli_args::reveal \
    --type-args \
        0x1::account::Account \
        0x1::account::Account \
    --args address:$ace_addr
```

```bash title="Arguments via JSON file"
libra move view --json-file view_function_arguments.json
```

:::tip
If you are trying to run the example yourself don't forget to substitute Ace's actual address for `<test_account>` in `view_function_arguments.json` (twice)!
:::

<!-- TODO: import view_json_file from '!!raw-loader!../../../../aptos-move/move-examples/cli_args/view_function_arguments.json'; -->

<!-- TODO: <CodeBlock language="json" title="view_function_arguments.json">{view_json_file}</CodeBlock> -->

```bash title="Output"
{
  "Result": [
    {
      "address_vec_vec": [
        [
          "0xace",
          "0xbee"
        ],
        [
          "0xcad"
        ],
        []
      ],
      "bool_vec": [
        false,
        true,
        false,
        false
      ],
      "type_info_1_match": true,
      "type_info_2_match": false,
      "u8_solo": 123
    }
  ]
}
```

### Script functions

The package also contains a script, `set_vals.move`, which is a wrapper for the setter function:

```rust title="script"
:!: static/move-examples/cli_args/scripts/set_vals.move script
```

First compile the package (this will compile the script):

```bash title=Compilation
libra move compile --named-addresses test_account=$ace_addr
```

<details><summary>Output</summary>

```bash
{
  "Result": [
    "acef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46::cli_args"
  ]
}
```

</details>

Next, run `libra move run-script`:

```bash title="Arguments via CLI"
libra move run-script \
    --compiled-script-path build/CliArgs/bytecode_scripts/set_vals.mv \
    --type-args \
        0x1::account::Account \
        0x1::chain_id::ChainId \
    --args \
        u8:123 \
        "u8:[122, 123, 124, 125]" \
        address:"0xace" \
    --private-key-file ace.key \
    --assume-yes
```

<details><summary>Output</summary>

```bash
{
  "Result": {
    "transaction_hash": "0x1d644eba8187843cc43919469112339bc2c435a49a733ac813b7bc6c79770152",
    "gas_used": 3,
    "gas_unit_price": 100,
    "sender": "acef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46",
    "sequence_number": 3,
    "success": true,
    "timestamp_us": 1685078415935612,
    "version": 528426413,
    "vm_status": "Executed successfully"
  }
}
```

</details>

```bash title="Arguments via JSON file"
libra move run-script \
    --compiled-script-path build/CliArgs/bytecode_scripts/set_vals.mv \
    --json-file script_function_arguments.json \
    --private-key-file ace.key \
    --assume-yes
```

<details><summary>Output</summary>

```bash
{
  "Result": {
    "transaction_hash": "0x840e2d6a5ab80d5a570effb3665f775f1755e0fd8d76e52bfa7241aaade883d7",
    "gas_used": 3,
    "gas_unit_price": 100,
    "sender": "acef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46",
    "sequence_number": 4,
    "success": true,
    "timestamp_us": 1685078516832128,
    "version": 528427132,
    "vm_status": "Executed successfully"
  }
}
```

</details>

<!-- TODO: import script_json_file from '!!raw-loader!../../../../aptos-move/move-examples/cli_args/script_function_arguments.json'; -->

<!-- TODO: <CodeBlock language="json" title="script_function_arguments.json">{script_json_file}</CodeBlock> -->

Both such script function invocations result in the following `reveal()` view function output:

```bash title="View function call"
libra move view \
    --function-id $ace_addr::cli_args::reveal \
    --type-args \
        0x1::account::Account \
        0x1::chain_id::ChainId \
    --args address:$ace_addr
```

```json title="View function output"
{
  "Result": [
    {
      "address_vec_vec": [
        [
          "0xace"
        ]
      ],
      "bool_vec": [
        false,
        false,
        true,
        true
      ],
      "type_info_1_match": true,
      "type_info_2_match": true,
      "u8_solo": 123
    }
  ]
}
```

:::note
As of the time of this writing, the `libra` CLI only supports script function arguments for vectors of type `u8`, and only up to a vector depth of 1. Hence `vector<address>` and `vector<vector<u8>>` are invalid script function argument types.
:::

