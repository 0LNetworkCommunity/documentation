---
title: "Validator Quickstart"
sidebar_label: 'Validator Quickstart'
sidebar_position: 2
---


## Quick Start
On an Ubuntu 22.04 host:

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
echo 'export PATH="$HOME/libra-framework/target/release:$PATH"' >> ~/.bashrc

# Initialize your expanded PATH
source ~/.bashrc

# Check libra execution and version 
libra -v
```

For a more detailed rundown see [here](/validators/detailed-instructions)
