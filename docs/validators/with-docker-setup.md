---
title: "Running a fullnode/vfn/validator node with docker"
sidebar_position: 8
sidebar_label: 'Docker setup'
description: 'Running a fullnode/vfn/validator node with docker'
---

:::danger WIP
This page is a work in progress.
Tread carefully.
:::


The canonical way of running the standard 0L setup, is to have two machines, one for the validator node, and one for the fullnode that acts as the gateway of the validator to the world (see [VFN here](/validators/vfn-setup)).

This page describes how to setup a node with docker, which provides a convenient way to hit the ground running without managing packages and installation on the host machine.

In addition, a validator can take an advantage of this configuration and run both the validator node and the VFN on the same machine. This would require a second network interface with a new IPv4 address. See further details below.

<!-- In addition, one might want also to run the [tower](/Tools/tower) service and mine VDF proofs.

 -->

## Prerequisites

_This guide would not cover those_

- Ubuntu 22.04
- Docker
- docker compose
- sudo access

<!-- If dual NIC is desired, a second NIC attached to the machine is required. -->

## Build the libra node docker image (both for single or double IPv4)

Place this Dockerfile somewhere in your system (~/workspace/SOME_NAME/Dockerfile):

```bash
# Dockerfile

# Use Debian 11 image as the base for the build stage
FROM debian:11 as build

# Set the PATH environment variable to include the Rust Cargo bin directory
ENV PATH="/root/.cargo/bin:${PATH}"

# Install system dependencies required for building the project
# These include compilers, development tools, libraries, and other utilities
RUN apt-get update -y -q && apt-get install -y -q \
  build-essential \
  curl \
  cmake \
  clang \
  git \
  libgmp3-dev \
  libssl-dev \
  llvm \
  lld \
  pkg-config \
  ca-certificates \
  update-ca-certificates \
  && rm -rf /var/lib/apt/lists/*


# Install Rust using rustup and set the default toolchain to stable
RUN curl https://sh.rustup.rs -sSf | sh -s -- --default-toolchain stable -y

# Install Rust packages with Cargo
RUN cargo install toml-cli      # Command-line tool to manipulate TOML files
RUN cargo install sccache       # Shared Compilation Cache to speed up recompiles

# Arguments that can be overridden at build time
ARG REPO=https://github.com/0LNetworkCommunity/libra-framework.git
ARG BRANCH=main

# Set the working directory to /root
WORKDIR /root

# Clone the specified branch or release tag from the given repository
RUN echo "Checking out '${BRANCH}' from '${REPO}' ..." \
  && git clone ${REPO} \
  && cd libra-framework \
  && git fetch --all && git checkout ${BRANCH} \
  && echo "Commit hash: $(git rev-parse HEAD)"

# Set the working directory to the cloned repository
WORKDIR /root/libra-framework

# Build the specified Rust packages as release binaries
RUN cargo build --release \
     -p libra \
     -p libra-genesis-tools \
     -p libra-txs \
     -p diem-db-tool

# Start a new, final image to reduce size using Debian 11 slim variant
FROM debian:11-slim as production

# Copy the built binaries from the 'build' stage to the 'production' image
COPY --from=build [ \
  "/root/libra-framework/target/release/libra", \
  "/root/libra-framework/target/release/libra-genesis-tools", \
  "/root/libra-framework/target/release/libra-txs", \
  "/root/libra-framework/target/release/diem-db-tool", \
  "/usr/local/bin/"]

```

In the same folder you placed the Dockerfile, run the following commands to build the image
```bash
docker build -t openlibra:main .
```

This will take several minutes, depends on your machine. A community image might be available in the future from docker hub. There is a value also in building your own image and not relying on a centralized image.

Ensure image was built successfully
```bash
docker images | grep openlibra

openlibra      main                     b64dbca39f51   9 minutes ago   153MB
```

## Single IP setup

### Create the docker-compose file

Place the following docker-compose.yaml file in the same folder as the Dockerfile:

```bash
# docker-compose.yaml

##########      Defaults    #############
x-defaults: &defaults
  image: "openlibra:main"
  restart: "on-failure"
  pid: host
  ulimits:
    nproc: 500000
    nofile: 500000
  volumes:
    - "node_data:/root/.libra"

x-util-defaults: &util-defaults
  <<: *defaults
  restart: "no"
  command: [ "tail", "-f", "/dev/null" ]

version: "3.8"
services:
  ##########  Main services   #############

  fullnode:
    <<: *defaults
    container_name: "0l-fullnode"
    cpuset: "0"
    command:
      [
        "libra",
        "node",
        "--config-path",
        "/root/.libra/fullnode.yaml"
      ]
    ports:
      - "6180:6180"
      - "6181:6181"
      - "6182:6182"
      - "8080:8080"
      - "9101:9101"

  validator:
    <<: *defaults
    container_name: "0l-validator"
    cpuset: "0"
    command:
      [
        "libra",
        "node",
        "--config-path",
        "/root/.libra/validator.yaml"
      ]
    ports:
      - "6180:6180"
      - "6181:6181"
      - "6182:6182"
      - "8080:8080"
      - "9101:9101"

  vfn:
    <<: *defaults
    container_name: "0l-vfn"
    cpuset: "0"
    command:
      [
        "libra",
        "node",
        "--config-path",
        "/root/.libra/vfn.yaml"
      ]
    ports:
      - "6180:6180"
      - "6181:6181"
      - "6182:6182"
      - "8080:8080"
      - "9101:9101"

  tower: # needs mnemonic injection
   <<: *defaults
   container_name: "0l-tower"
   cpuset: "1"
   stdin_open: true
   tty: true
   command:
     [
       "libra",
       "tower",
       "start",
     ]

  shell:
   <<: *util-defaults
   container_name: 0l-shell

volumes:
  node_data:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: "~/.libra"

```


### Ensure your configuration files are in place.

Depends on which service you wish to run (fullnode/validator/vfn), you'd need to place the relevant yaml files in the `~/.libra` folder.

Run the following commands based on your needs:
```bash
libra config fullnode-init

# or

libra config validator-init

# or

libra config validator-init --vfn

```

Note that you'd need to replace your user home path in the template default `data_dir`, and the `genesis_file_location` to point to `/root/.libra/...rest_of_path_unchanged`

Here is an example of modified `fullnode.yaml` relevant entries:
```bash
...

base:
  data_dir: '/root/.libra/data'

execution:
  genesis_file_location: '/root/.libra/genesis/genesis.blob'
...
```

Start the desired service with `docker compose`

```bash
docker compose up -d fullnode

# or

docker compose up -d validator

# or vfn or tower, etc.
```

Ensure the node is running by examining the updated `ledger_version` over few seconds

```bash
watch 'curl localhost:8080/v1/ | jq'
```

Or check the container logs
```bash
docker compose logs -f --tail 50 fullnode

# or replace fullnode with validator or vfn
```

:::warning If the version is 0 or you're having connectvitiy issues
Do the manual DB restore as described in the Restore section (TODO: link) and then clean and sync (TODO: link)
:::


### Run tower

```bash
docker compose run tower
```










## Create the docker-compose file (double IP)

:::warning WIP Beyond this line

:::

__Dual NIC setup__

Part 1: Configure second IP

Using Netplan (default ubuntu network manager), edit your `/etc/netplan/01-netcfg.yaml`

Identify your ethernet id (enp5s0 in this example), add the second IP to its addresses list

```bash
network:
  version: 2
  renderer: networkd
  ethernets:
    enp5s0:
      addresses:
        - 188.primary.ip.here/32
        - 188.secondary.ip.here/32 # <--- add this line
        - primary:ip:v:6/64
      routes:
        - on-link: true
          to: 0.0.0.0/0
          via: your.ip.subnet.mask
        - to: default
          via: fe80::1
      nameservers:
        addresses:
          - some.ip.v.4
          - some.ip.v.6
```

Apply changes
`sudo netplan apply`

Confirm changes
`ip addr`

Under the modified interface, you should see the second IP address

```bash
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: enp5s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether c8:7f:tag:tag:tag brd ff:ff:ff:ff:ff:ff
    ############
    inet your.primary.ip.here/32 scope global enp5s0
       valid_lft forever preferred_lft forever
    inet your.secondary.ip.here/32 scope global enp5s0 # <--- make sure second IP appears here
       valid_lft forever preferred_lft forever
    ############
    inet6 primary:ip:v:6/64 scope global
       valid_lft forever preferred_lft forever
```
