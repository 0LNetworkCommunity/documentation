# Libra Move Dev Quick Start

## Quick Start

### You must install `libra` cli tool to your PATH.

```
# in this repo
cargo build --release -p libra

# copy to a dir in your PATH,
# e.g. the $HOME/cargo/bin directory assuming it's added to your $PATH.

cp ./target/release/libra ~/.cargo/bin
# you may need to make it executable
chmod +x ~/.cargo/bin/libra
```

### Run some tests

```

# run framework tests with
cd ./framework/libra-framework
libra move framework test

# run formal verification with
libra move framework prove

# run smoke tests (using cargo)
# note the env variables, which you can add to your $HOME/.bashrc, or $HOME/.zshrc

cd ./smoke-tests
export RUST_MIN_STACK=104857600
export DIEM_FORGE_NODE_BIN_PATH="$HOME/.cargo/bin/libra"
cargo test
```


# TEST SUITES

## Running Move unit tests

Change into a Move project dir (i.e., the directory with a Move.toml).

`libra move test`

optionally with filters:

`libra move test -f <test name>`

## Build a libra framework release for smoke tests (head.mrb)

```
cd ./framework
libra move release

```

Your release will be in `./releases/head.mrb`, you will need this for genesis and smoketests.

Note for smoke tests: you must regenerate the .mrb file EVERYTIME YOU MAKE A CHANGE TO CORE MOVE CODE. Otherwise your tests will be against the old code

## Running smoke tests

Note: RUST_MIN_STACK needs to be set since there is an issue with the rust default stack size for tests which involve compiling, and then starting a local testnet

```
cd ./smoke-tests
export RUST_MIN_STACK=104857600
export DIEM_FORGE_NODE_BIN_PATH="$HOME/.cargo/bin/libra"
cargo test
```

## Troubleshooting

**Issue building `libra` binary **

If you encounter the following error:
`error[E0599]: no method named disable_lifo_slot found for mutable reference &mut tokio::runtime::Builder in the current scope`

**Solution**

You can resolve this issue by building with the following flag:

```
RUSTFLAGS="--cfg tokio_unstable" cargo build --profile cli -p diem-node --target-dir ~/.cargo/bin
```

This flag enables the unstable features required by the tokio runtime.
