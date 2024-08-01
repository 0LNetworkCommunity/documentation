---
title: "Validator Quickstart"
sidebar_label: 'Validator Quickstart'
sidebar_position: 2
---

## Quick Start

On an Ubuntu 22.04 host:

``` bash
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

# Copy libra binaries to cargo bins path
sudo cp -f ~/libra-framework/target/release/libra* ~/.cargo/bin/

# Check libra execution and version 
libra version
```

For a more detailed rundown see [here](/validators/detailed-instructions)
