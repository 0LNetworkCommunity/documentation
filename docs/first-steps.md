---
title: First Steps
sidebar_position: 4
slug: /
tags:
  - Getting started
---

# First steps - Common useful operations
## Introduction 

Welcome to the 0L Libra Framework! This guide is designed to help you set up your development environment and introduce you to some common operations that are useful for interacting with the Libra blockchain. Whether you're a validator, core developer, or simply curious about Libra, this document will walk you through the initial steps to get you started 🚀

## Setup Environment Quick Start
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
### Prepare Your Instance
Depending on your role (validator, core developer, Move developer, or CI), you will need to install different sets of tools:

```bash
# View all development setup options 
bash ./util/dev_setup.sh -h
# Install build tools for validators
bash ./util/dev_setup.sh -t

# Install build tools and Postgres for core developers 
bash ./util/dev_setup.sh -tP

# Install Move Prover tools for Move developers
bash ./util/dev_setup.sh -ty

# Setup for CI with no user input required
bash ./util/dev_setup.sh -tb
```

:::info

Once you have installed the required set of tools, make sure your shell has the access to the cargo binary. 
You can test this with:

``
cargo --version
``

If the cargo binary is not accessible from your shell, you may want to source your shell file. 

For e.g., For a bash shell you can run:

``
source "$HOME/.cargo/env"
``

:::

# Build the project
```
cargo build --release
```


### Finalizing Setup

After building the project, you'll have the Libra framework binaries ready. To make these binaries easily accessible, add them to your PATH: 

```bash
# Copy binaries to your Cargo bin directory
sudo cp -f ~/libra-framework/target/release/libra* ~/.cargo/bin/
```

Well done! 👏 You now have a fully operational node running the 0L Libra framework. 

## Basic Query Operations
### Check Account Balance
To check the balance of an account, use:

```bash
libra query balance --account ADDRESS
```

### Check Your Vouches
For validators, to check for vouches:

```bash
libra query resource --resource-path-string 0x1::vouch::MyVouches --account ADDRESS
```

### Get Total Supply

To view the total supply of Libra coins:

```bash 
libra query view --function-id "0x1::gas_coin::supply"
``` 

## Node Operations
### Send Coins

To transfer coins to another account:

```bash
libra txs transfer --to-account DESTINATION_ADDRESS --amount AMOUNT
```

## Validator-Specific Operations

These operations are exclusively for validators. 
### Vouch for an Account

To vouch for another account:

``` libra txs validator vouch --vouch-for ADDRESS ``` 

### Query for Vouches

To query for vouches you have received: 

```bash 
libra query view --function-id 0x1::vouch::true_friends --args ADDRESS 
```

### Bid for Position

To bid for a validator position:

```bash
libra txs validator pof --bid-pct PERCENT_YOU_PAY --expiry EPOCH_NUMBER_WHEN_BID_EXPIRES 
# Example
libra txs validator pof --bid-pct 0.9 --expiry 999
```

### Un-jail Account

To un-jail an account (note: self-unjail is not possible):

```bash
libra txs validator jail --unjail-acct ADDRESS
```

## Monitoring Your Node
### Status Page
To set up a local status page for monitoring:
```bash
git clone https://github.com/0LNetworkCommunity/status.git
cd status
yarn
yarn dev
# Visit http://localhost:5173 to view the status page
```

### Grafana Local Setup

Here's a quick guide to setting up Grafana locally on your PC. If you'd like to go into more detail, don't hesitate to consult the [official documentation](https://grafana.com/docs/grafana/latest/). 
#### Prerequisites
A server or local machine with a 0L node already set up and running.
Docker installed on your machine (recommended for simplicity).

#### Install Grafana Using Docker

Pull the Grafana Docker image by running the following command in your terminal:

```bash
docker pull grafana/grafana
```

Run the Grafana container with the following command:

```bash
docker run -d -p 3000:3000 grafana/grafana
```

This command runs Grafana in a Docker container and maps port 3000 of the container to port 3000 on your host machine, allowing you to access Grafana at http://localhost:3000.

#### Access Grafana

Open a web browser and navigate to http://localhost:3000.
Log in with the default credentials (username: admin, password: admin). You will be prompted to change the password.

#### Connect Grafana to Your 0L Node

To monitor your 0L node, you need to connect Grafana to the node's data source. If your 0L node exposes metrics via an HTTP API or a compatible database, follow these general steps:

#### Add a Data Source in Grafana:

- Go to the Grafana dashboard
- Navigate to "Configuration" > "Data Sources".
- Click "Add data source" and select the type that matches your 0L node's data output (e.g., Prometheus, MySQL, etc.).
- Configure the Data Source with the URL and any authentication details required to access your 0L node's metrics.

Save and Test to ensure Grafana can retrieve data successfully.

#### Create Dashboards

Once Grafana is connected to your 0L node's data source, you can create dashboards to visualize the data:

- Navigate to "Create" > "Dashboard".
- Add panels and select the metrics you wish to monitor.
- Configure the panel settings, such as the query, visualization type, and panel title.
- Repeat these steps to add more panels as needed, customizing your dashboard to display the 0L node metrics most relevant to you.


Here we go! You now have Grafana set up to monitor your 0L (Libra) node. You can extend this setup by exploring more Grafana features, such as alerts and more advanced dashboard configurations, to suit your monitoring needs.

