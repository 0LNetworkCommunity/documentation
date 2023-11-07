---
title: "Getting Started"
sidebar_position: 1
description: 'Libra Framework Tool Design'
---

# Getting Started
---

## About Libra Tool Design
The tools are intended to be minimalist, yet modular. Upstream vendors have sophisticated and complex tooling. This is usually unwieldy for the profile of typical 0L users.

### The Customer
If you have a typical end-user use case, Carpe will likely be all you need.
These tools are for users which are engaged in more admin level operations on the network: configuring and querying contracts.

For that user the cli tools here will like have sufficient features: query, transact, run node.

Similarly if you are a Move dev, similarly the most common features are covered: testing, verifying, compiling, deploying.

### Bring your own tool
If you have needs that aren't met with these tools, all of them are also exported as libraries. Meaning: they are architected so that they are easy to extend.

#### Start a new minimal Rust crate
With a simple Rust project, that uses Clap as a CLI scaffold, you can import all of the CLI types, whole or in part. This means you can extend the existing methods (by creating a `trait` extension in your own tool).

Additionally the most relevant vendor SDK types are re-exported by `libra-types`. So you should be able to take advantage of much of the Move resource parsing (e.g converting account addresses from API calls to structs);

### Build
:::note
This targets an ubuntu 22.04 build. You may need to create an account. Do it [here](/tools/wallet)
:::

```
#build dependencies
sudo apt update
sudo apt install -y git tmux jq build-essential cmake clang llvm libgmp-dev pkg-config libssl-dev lld libpq-dev

#install rust
curl https://sh.rustup.rs -sSf | sh -s -- --default-toolchain stable -y

#restart your bash instance to pickup the cargo paths
. ~/.bashrc

#clone the repo
git clone https://github.com/0LNetworkCommunity/libra-framework.git
cd ~/libra-framework
git fetch --all && git checkout main

#build
cargo build --release -p libra 


#make global and persistant. this assumes the `libra` binary is already built and located at `~/libra-framework/target/release/libra`.
echo 'export PATH="$HOME/libra-framework/target/release:$PATH"' >> ~/.bashrc
source ~/.bashrc

#verification
libra --version 
```