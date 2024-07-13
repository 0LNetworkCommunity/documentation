# Libra Move Dev Quick Start

## TL;DR

### Developer Environment

Below are the minimal recommended tools you need to work with Open Libra: 

- Visual Studio Code
- VS Extensions: rust-analyzer
- VS Extensions: move-analyzer
- VS Extensions: move-syntax
- VS Extensions: CodeLLDB

### Code Repo

Libra Framework - https://github.com/0LNetworkCommunity/libra-framework

### Setup Instructions

1. You must install `libra` cli tool to your PATH.

```
# install needed build tools 
bash ./util/dev_setup.sh -tPy

# in the libra-framework repo
cargo build --release -p libra

# copy to a dir in your PATH
cp ./target/release/libra ~/.cargo/bin

# you may need to make it executable
chmod +x ~/.cargo/bin/libra
```

2. Try running the Move tests

```
# run framework tests with
cd ./framework/libra-framework
libra move test

# run formal verification with
libra move prove
```

3. Try running the smoke tests

```
# run smoke tests with
cd ./smoke-tests
cargo test
```
