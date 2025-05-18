# Quick Start

## Install

### You must install `libra` cli tool to your PATH.

```bash
# in this repo
cargo build --release -p libra

# copy to a dir in your PATH,
# e.g. the $HOME/cargo/bin directory assuming it's added to your $PATH.

cp ./target/release/libra ~/.cargo/bin
chmod +x ~/.cargo/bin/libra

# check location
which libra

# check version
libra version
```

### Export some environment variables
```bash
# Add to your $HOME/.bashrc, or $HOME/.zshrc

##### Must export to see debug prints from Move VM

export DIEM_MOVE_DEBUG=true

##### NECESSARY ONLY FOR SMOKE TESTS

# must have correct path to `libra` bin for the local testnet to run
export DIEM_FORGE_NODE_BIN_PATH="$HOME/.cargo/bin/libra"

# for heavy smoke tests like `upgrades` and `restore`
export RUST_MIN_STACK=104857600
```

## Build the framework release
The output is a "move release bundle" at `./framework/releases/head.mrb`, which 
This is the file necessary for network genesis for mainnet and testnet.
NOTE: because it is the genesis file, the smoke tests (which simulate running networks) requires this file. 


```bash
cd ./framework
libra move framework release
```

Your release will be in `./releases/head.mrb`, you will need this for genesis and smoketests.



## Run tests

#### Framework unit tests

```bash
# run framework tests with:
# remember export DIEM_MOVE_DEBUG=true envvar for debug prints from Move VM
cd ./framework/libra-framework
libra move test

# optionally with filters:

`libra move test -f <test name>`
```

### Formal verification tests

```bash
# run formal verification with
libra move prove
```

## Smoke tests

Note for smoke tests: you must regenerate the .mrb file EVERYTIME YOU MAKE A CHANGE TO CORE MOVE CODE. Otherwise your tests will be against the old code. See above how to build a release

See instructions on environment variables above. Remember to export DIEM_FORGE_NODE_BIN_PATH, otherwise nothing will happen. For some tests (upgrade, rescue) the RUST_MIN_STACK needs to be set higher than the default for rust. That's because some tests have higher memory requirements when having multiple recompiliations for the move source.

Note that the Move VM `[debug]` prints do not appear in the terminal, they will appear in the log files of the individual simulated nodes.

```bash
# run smoke tests (using cargo)
cd ./smoke-tests
cargo test
```


## Troubleshooting

**Issue building `libra` binary **

If you encounter the following error:
`error[E0599]: no method named disable_lifo_slot found for mutable reference &mut tokio::runtime::Builder in the current scope`

**Solution**

You can resolve this issue by building with the following flag:

```bash
RUSTFLAGS="--cfg tokio_unstable" cargo build --profile cli -p diem-node --target-dir ~/.cargo/bin
```

This flag enables the unstable features required by the tokio runtime.
