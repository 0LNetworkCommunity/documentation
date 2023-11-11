---
sidebar_position: 6
sidebar_label: 'Docker setup'
description: 'Running a fullnode/vfn/validator node with docker'
---

:::danger WIP
This page is a work in progress.
Tread carefully.
:::

## Node on a Docker setup

Running a fullnode/vfn/validator node with docker offers a simplified setup and management experience.
In addition, the dual NIC setup allows for running a VFN alongside the validator node on the same machine.

In theory, one is limited only by the number of NICs available on the machine and the CPU cores and available memory.

A node (fullnode/validator/VFN) requires a dedicated IP address.
A node process requires 1 CPU core.
A tower process requires 1 CPU core.

### Prerequisites

Ubuntu 22.04
Docker
docker compose
sudo access

If dual NIC is desired, a second NIC attached to the machine is required.

### Setup

__Dual NIC setup__

Part 1: Configure second IP

Using Netplan (default ubuntu network manager), edit your `/etc/netplan/01-netcfg.yaml` 

Identify your ethernet id (enp5s0 in this example), add the second IP to its addresses list

```
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

```
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

### Ports opening on the host

Ensure your PORTS are open on those interfaces (todo: how)


1. Build libra-framework image

Place this Dockerfile somewhere in your system (~/workspace/{SOME_NAME}/Dockerfile):

```
# Use Debian 11 image as the base for the build stage
FROM debian:11 as build

# Set the PATH environment variable to include the Rust Cargo bin directory
ENV PATH="/root/.cargo/bin:${PATH}"

# Install system dependencies required for building the project
# These include compilers, development tools, libraries, and other utilities
RUN apt-get update -y -q && apt-get install -y -q \
  build-essential \ # C/C++ compilation tools like gcc, g++, make, etc.
  curl \           # Utility to fetch content from URLs
  cmake \          # Cross-platform build system generator
  clang \          # C/C++ compiler from the LLVM project
  git \            # Version control system
  libgmp3-dev \    # Development files for the GNU MP library
  libssl-dev \     # Development files for the SSL libraries
  llvm \           # Collection of modular and reusable compiler and toolchain technologies
  lld \            # LLVM linker
  pkg-config \     # Helper tool that tells you how to link your dependencies
  && rm -rf /var/lib/apt/lists/* # Clean up the apt cache to reduce image size

# Install Rust using rustup and set the default toolchain to stable
RUN curl https://sh.rustup.rs -sSf | sh -s -- --default-toolchain stable -y

# Install Rust packages with Cargo
RUN cargo install toml-cli      # Command-line tool to manipulate TOML files
RUN cargo install sccache       # Shared Compilation Cache to speed up recompiles

# Arguments that can be overridden at build time
ARG REPO=https://github.com/0LNetworkCommunity/libra-framework.git
ARG BRANCH=release-6.9.0-rc.7

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

GPT comments are fucking it up




Next step: Create a docker network that will not use IP masquarading and will not be managed by docker compose.
A stand alone network that will be utilized by the image using the following command:

You can name this network as you wish.

`docker network create --attachable --opt ‘com.docker.network.bridge.name=bridge2’ --opt ‘com.docker.network.bridge.enable_ip_masquerade=false’ bridge2`

Ensure with docker network ls that it is there



Change IP tables so that all the traffic coming on this particular birdge network will be routed via the secondary NIC IP:

Dump iptables to a file
sudo iptables-save > iptables_current.txt


Identify the line that coincide with the ip addr bridge definition
-A POSTROUTING -s 172.18.0.0/16 ! -o br-c3301777a76a -j MASQUERADE

Change to
-A POSTROUTING -s 172.18.0.0/16 ! -o br-c3301777a76a -j SNAT --to-source <Secondary IP addrs>

save

sudo iptables-restore < iptables_current.txt 

By now you would not be interefering with any activity over your primary NIC IP



docker run --rm --network bridge2  byrnedo/alpine-curl http://ifconfig.me

ensure secondary IP at the end of the output

docker run --rm byrnedo/alpine-curl http://ifconfig.me

ensure primary IP at the end of the output

```
// docker-compose.yaml

##########      Defaults    #############
x-defaults: &defaults
  image: "kk-0l-6.9"
  restart: "on-failure"
  networks:
    - bridge2
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

  node:
    <<: *defaults
    container_name: "0l-6.9-node"
    cpuset: "0"
    command:
      [
        "libra",
        "node",
        "--config-path",
        "/root/.libra/validator-docker.yaml"
      ]
    ports:
      - "188.40.107.90:6180:6180"
      - "188.40.107.90:6181:6181"
      - "188.40.107.90:6182:6182"
      - "188.40.107.90:8080:8080"
      - "188.40.107.90:9101:9101"
      
 # tower: # needs mnemonic injection
 #   <<: *defaults
 #   container_name: "0l-tower"
 #   cpuset: "1"
 #   command:
 #     [
 #       "libra",
 #       "tower",
 #       "start",
 #     ]

  shell:
    <<: *util-defaults
    container_name: 0l-6.9-shell

networks:
  bridge2:
    external: true

volumes:
  node_data:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: "~/.libra"

```

change x-defaults image name to the name of your built image
change x-defaults networks to point the name of the previously created network
services node container name as you wish
services node ports. Change to your secondary IP address


Volume mounts to local ~/.libra. 
Change if your .libra config path is different


docker compose up

Update host ~/.libra/validator.yaml to point to /root/.libra

