# Libra Move Dev Quick Start

## TL;DR

### Developer Environment

Below are the minimal recommended tools you need to work with Open Libra: 

- Visual Studio Code
- VS Extensions: rust-analyzer
- VS Extensions: move-analyzer
- VS Extensions: move-syntax
- VS Extensions: CodeLLDB

### Clone the Repository

First, let's clone the libra-framework repository to your local machine. This contains all the necessary code and tools to work with the Libra blockchain. We recommend using a tmux session to keep your setup process manageable, especially if you're connecting over SSH.

```bash
# Start or attach to a tmux session
tmux a
cd ~
# Clone the libra-framework repository
git clone https://github.com/0LNetworkCommunity/libra-framework
cd ~/libra-framework
```

### Setup Instructions

1. Prepare your environment

```
# install needed build tools 
bash ./util/dev_setup.sh -tPy
```

:::info

Once you have installed the required set of tools, make sure your shell has the access to the cargo binary. 
You can test this with:

```
cargo --version
```


If the cargo binary is not accessible from your shell, you may want to source your shell file. 

For e.g., For a bash shell you can run:

``
source "$HOME/.cargo/env"
``
:::

2. You must install `libra` cli tool to your PATH.

```
# in the libra-framework repo
cargo build --release -p libra

# copy to a dir in your PATH
cp ./target/release/libra ~/.cargo/bin

# you may need to make it executable
chmod +x ~/.cargo/bin/libra
```

3. Try running the Move tests

```
# run framework tests with
cd ./framework/libra-framework
libra move test

# run formal verification with
libra move prove
```

4. Try running the smoke tests

```
# run smoke tests with
cd ./smoke-tests
cargo test
```