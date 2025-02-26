
# Using the Testnet

## TL;DR
1. The API endpoint for the testnet is `http://testnet.openlibra.io/v1`
1. The Chain ID of the testnet is `2`, on the command line you may `export MODE_0L=testnet` for the tools to pick up this change.
1. Every week a testnet will be restarted with a clean genesis.

## Getting coins to an account
Testnet does not use a faucet (it uses only production code).

You can use Alice's address to test, or to create new accounts:

address:
```
0x87515d94a244235a1433d7117bc0cb154c613c2f4b1e67ca8d98a542ee3f59f5
```

mnemonic:
```
talent sunset lizard pill fame nuclear spy noodle basket okay critic grow sleep legend hurry pitch blanket clerk impose rough degree sock insane purse
```

## Using `open-libra-sdk` for typescript

Simply construct the `Libra` class with the network testnet, and the URL above.

```
// Just use a client:
const l = new Libra(Network.TESTNET, "http://testnet.openlibra.io/v1")

// Restoring a wallet:
const wallet = new LibraWallet("talent sunset lizard pill fame nuclear spy noodle basket okay critic grow sleep legend hurry pitch blanket clerk impose rough degree sock insane purse", Network.TESTNET, "http://testnet.openlibra.io/v1").

```


## Using `libra-cli` client
This assumes you have build the Rust `libra` tool from source.

When you are initially configuring the cli client you may want to generate a config file for the testnet.
You may also add an additional profile to the config (such that you have the mainnet and testnet configs).

```
libra config --chain-name testnet --profile my-testnet init
```

## Starting a new testnet

The libra-cli tool includes a command which generates some pre-set accounts for a three or four node validator set.
Each of the nodes will use default addresses
```
# on host 1
libra ops genesis testnet --me alice
# on host 2
libra ops genesis testnet --me bob
# ... finally on host 3
libra ops genesis testnet --me carol
```

### Docker
A "testnet in a bottle" exists for development purposes. See the docker compose file here:

```
https://github.com/0LNetworkCommunity/libra-framework/tree/main/container
```
