
# Integrating systems with Open Libra

Open Libra provides containers with signed pre-built `libra` binary which starts nodes and sends transactions.

The default instructions assumes you are using container tools like docker, kubernetes, podman etc.

Below we include instructions for building from source.

# Run a container fullnode

Instructions for running a fullnode with docker etc. can be found at: https://github.com/0LNetworkCommunity/libra-framework/blob/main/container/README.md

# Execute transactions with `libra` binary
The `libra` cli binary for running the node, also includes subcommands for executing transactions.
[More info:](docs/cli-tools/txs/transfer.md)

## Optionally use NodeJS sdk
The NodeJS typescript SDK is available for integrators. This library is NOT included in the container environment.
NPM package: https://www.npmjs.com/package/open-libra-sdk

# Testing your integration
Testnets on Open Libra are configured exactly as in production. As such there are no special features (such as faucets).
To simulate transactions (e.g. create other accounts), you can load a wallet with predefined test mnemonics. These personas, alice, bob, carol, are the genesis validators of the testnets.

### Test accounts
#### Alice
address: `0x87515d94a244235a1433d7117bc0cb154c613c2f4b1e67ca8d98a542ee3f59f5`

mnemonic: `talent sunset lizard pill fame nuclear spy noodle basket okay critic grow sleep legend hurry pitch blanket clerk impose rough degree sock insane purse`

## Open Libra Testnet

A testnet API service can be accessed at: `http://testnet.openlibra.io:8080/v1`. Note the state resets every week. There is no faucet on OL testnets (we use production settings). You should use the default genesis test accounts (Alice, Bob, Carol) as described here.

Note that the chain id for the chain_name `TESTNET` is `2`. If you submit mainnet (id `1`) against this URL, transactions will be rejected.

## Start a local testnet

Using `docker compose` or equivalent you can start a containerized testnet of three nodes.
```
Checkout the files at:
https://github.com/0LNetworkCommunity/libra-framework/tree/main/container

# Start the testnet
docker up compose.yaml -d

# wait about one minute, then the API from node-1 (alice) will respond
curl localhost:8280/v1
```
### Connect to local testnet with client

### using `libra` cli
Update the $HOME/.libra/cli config
```
# Interactive tool: configure tools, enter the mnemonic above
libra config init
libra config --profile my-testnet fix --force-url localhost:8280/v1
```

Optionally for automated testing these envvars for non-interactive mode:

```
export LIBRA_CI=1
# obviously don't do this in production
export MNEM=<your mnemonic>
```

### Using typescript sdk

```
  import { Libra } from 'open-libra-sdk'
  // get the mainnet fullnode
  const libra = new Libra();

  // optionally connect to a local testnet
  const libra = new Libra(Network.TESTNET, 'localhost:8480/v1');

  const ledgerInfo = await libra.getLedgerInfo();
```

## Optionally Build Source
Instead of using the published container image you may choose to build from source. This assumes you have Rust installed on the `stable` channel.

```
git clone https://github.com/0LNetworkCommunity/libra-framework
cd libra-framework

rust build --release -p libra

# Copy the binary to where you need it
cp ./target/release/libra $HOME/.cargo/bin

```
