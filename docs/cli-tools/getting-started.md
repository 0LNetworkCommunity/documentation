---
title: "Getting Started"
sidebar_position: 1
description: 'quick start with libra cli'
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
This targets an ubuntu 22.04 build. You may also need to create an account. Do it [here](./wallet.md)
:::

```
# We suggest you run the following in a tmux session from your user home directory
tmux a
cd ~

# Checkout the source
git clone https://github.com/0LNetworkCommunity/libra-framework

# Install dependencies and Rust lang
cd ~/libra-framework
bash ./util/dev_setup.sh -t

# build and install the binary
cd ~/libra-framework
cargo build --release -p libra

# Make the release path global and persistent
sudo cp -f ~/libra-framework/target/release/libra* ~/.cargo/bin/

# Initialize your expanded PATH
source ~/.bashrc

# Check libra execution and version
libra -v
```
