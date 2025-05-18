# Start a Testnet

TL;DR: the `libra` cli tool has a helper to create all genesis files for a testnet from pre-determined test personas (Alice, Bob, Carol, and Dave).

Each host needs to present the same genesis information (just network address), and pick one persona.

A host can be bare metal, or a docker container.

Requirements: building the `libra` binary, or pulling the docker reference image at `https://github.com/0LNetworkCommunity/libra-framework/pkgs/container/libra-framework%2Flibra-node`

## On each host

Each node should run on their host the setup instructions.
WARNING: the usual `$HOME/.libra/` data director WILL BE DESTROYED in this process.

Here's an example of setting up a testnet with three hosts separated by the vast ocean of the internet.

In this case the first user will be "alice"
```
 libra ops genesis testnet --me alice \
 --host-list my.domain.com:6180 \
 --host-list 1.2.4.5:6180 \
 --host-list localhost:6182 \
 --framework-mrb-path <LIBRA_SOURCE>/framework/releases/head.mrb
```

Next, each other hosts must pick Bob, Carol, (and optionally) Dave.

NOTE: you need three (up to Carol) or optionally four (Dave) to start a testnet. Trying for example five hosts will fail since there are only four predetermined personas. Other nodes can join testnet after genesis.

## Network addresses

The `--host-list` argument can be a domain, IPv4, or IPv6 address. You need to add a PORT. In production for validator networking this is `6180`. If you are doing docker voodoo keep this in mind and check the `validator.yaml` on each host to see if they are using expected ports.

## Framework MRB
This fils is the binary of the Move code for the system smart contracts. This is needed to produce the genesis transaction.

### Using mainnet's current deployed framework
You can start a testnet with any of the historical `.mrb` files. We archive these in the libra-framework source.
For example, mainnet is here: `https://github.com/0LNetworkCommunity/libra-framework/blob/main/framework/releases/mainnet.mrb`


### Using bleeding edge framework
You will want to use a `head.mrb` file build from recent source
```
cd <LIBRA SOURCE>/framework
libra move framework release
// will produce a file at framework/releases/head.mrb
```

## After all hosts are configured

Just start the node:

```
libra node

```

# Troubleshooting
-  Can your nodes connect to each other on the internet?
- Do the ports in the `validator.yaml` file match on all nodes?
- Are the ports open on each host?
- (Docker) are you extra sure the ports are doing what you think?
