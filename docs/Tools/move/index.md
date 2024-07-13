---
title: "Move"
id: "index"
hidden: true
description: 'Develop with the Move Tool'
---
:::danger WIP
The Move tool is a Diem wrapper that needs some TLC.... Bounties are available through the Tool Scrubbers Guild if you would like to contribute!
:::

# Move

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
The below example uses the `HelloBlockchain` in [fixtures](https://github.com/0LNetworkCommunity/libra-framework/tree/main/tools/txs/tests/fixtures/test_publish).

:::note
You will first need to uncomment `[addresses]` in `Move.toml` and add your address you will be using
:::
```
[package]
name = 'test_publish'
version = '1.0.0'

#[addresses]
#this_address='0xd1281de242839fc939745996882c5fc2'

[dependencies.DiemFramework]
git = 'https://github.com/0LNetworkCommunity/diem.git'
rev = 'release'
subdir = 'diem-move/framework/diem-framework'
```



```bash
$ libra move compile --package-dir /libra-framework/tools/txs/tests/fixtures/test_publish
```

The above command will generate the below terminal output:
```bash
Compiling, may take a little while to download git dependencies...
UPDATING GIT DEPENDENCY https://github.com/0LNetworkCommunity/diem.git
INCLUDING DEPENDENCY DiemFramework
INCLUDING DEPENDENCY DiemStdlib
INCLUDING DEPENDENCY MoveStdlib
BUILDING test_publish
```

### Compiling and unit testing Move

The `libra` CLI can also be used to compile and run unit tests locally.
In this example, we'll use the `HelloBlockchain` in [fixtures](https://github.com/0LNetworkCommunity/libra-framework/tree/main/tools/txs/tests/fixtures/test_publish).

```bash
$ libra move test --package-dir /libra-framework/tools/txs/tests/fixtures/test_publish
```
The above command will generate the following terminal output:
```bash
INCLUDING DEPENDENCY DiemFramework
INCLUDING DEPENDENCY DiemStdlib
INCLUDING DEPENDENCY MoveStdlib
BUILDING test_publish
Running Move unit tests
Test result: OK. Total tests: 0; passed: 0; failed: 0
```
### Generating test coverage details for Move
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

5. Find failures and iteratively improve your testing and running these commands to eliminate gaps in your testing coverage.

### Proving Move
:::note
This functionality is currently unavailable... Check back soon
:::

### Profiling gas usage
:::note
This functionality is currently unavailable... Check back soon
:::
### Debugging and printing stack trace

In this example, we will use `DebugDemo` in [debug-move-example](https://github.com/aptos-labs/aptos-core/tree/main/crates/aptos/debug-move-example).

Now, you can use `debug::print` and `debug::print_stack_trace` in your [DebugDemo Move file](https://github.com/aptos-labs/aptos-core/tree/main/crates/aptos/debug-move-example/sources/DebugDemo.move).

> NOTE: This command does not work but gives an example for coding best practices

```bash
$ libra move test --package-dir https://github.com/aptos-labs/aptos-core/tree/main/crates/aptos/debug-move-example
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


### Publishing a Move package with a named address
:::note
Named Addresses is currently unavailable... Check back soon
:::
:::tip
As an open source project, the source code as well as compiled code published to the 0L Network is inherently open by default. This means code you upload may be downloaded from on-chain data. Even without source access, it is possible to regenerate Move source from Move bytecode. To disable source access, publish with the `--included-artifacts none` argument, like so:

```
libra move publish --included-artifacts none
```
:::

:::tip
When publishing Move modules, if multiple modules are in one package, then all the modules in this package must have the same account. If they have different accounts, then the publishing will fail at the transaction level.
:::

### Running a Move function
:::note
The `move run` feature is currently not available but we have a work around for interacting with move functions. View a full description [here](../txs/generate-transaction.md)
:::


```bash
$ libra txs generate-transaction --function-id 0xd1281de242839fc939745996882c5fc2::message::set_message --args '42'
```


### View functions
:::note
The `libra move view` feature is currently not available but we have a couple of work arounds for viewing move functions and values. View a full description [here](../getting-started.md)
:::
```bash
$ libra query move-value --account 0xd1281de242839fc939745996882c5fc2 --module-name message --struct-name MessageHolder --key-name message
```
```bash
$ libra query view --function-id 0x1::reconfiguration::get_current_epoch
```
