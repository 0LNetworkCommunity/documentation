---
title: "Validator Quickstart"
id: "index"
hidden: false
---


## Quick Start
On an Ubuntu 22.04 host:

```
# run all this in a tmux session, a cheatsheet below
tmux a

# checkout the source
git clone https://github.com/0LNetworkCommunity/libra-framework.git

# Install dependencies and Rust lang
cd libra-framework
bash util/dev_setup.sh -t

# build and install the binary
cd libra-framework
cargo build --release -p libra 
cp target/release/libra ~/.cargo/bin

# check you can run it
libra -v
```

For a more detailed rundown see [here](/validators/running-a-validator)