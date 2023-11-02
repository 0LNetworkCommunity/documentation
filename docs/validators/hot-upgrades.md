---
sidebar_position: 5
sidebar_label: 'Hot Upgrades'
description: 'Upgrading Framework Libraries'
---


# Network Hot Upgrades

## Overview
The "framework" which contains all the consensus, account, econ policies, etc. for the network is written in Move. This code is stored in the network database, and effectively executed on demand. This means that framework upgrades can occur without redeploying the Move VM itself, or the supporting system code (network node software). It also means the state machine can upgrade without a coordinated halt.
To do this we require two libra tools: `framework` for building the artifacts, and `txs` for proposing, voting, and ultimately deploying the artifacts.

## Procedure

#### Build Artifacts

##### 1. Build the upgrade Move transaction scripts

This will be a Move package which is machine-generated for a one-time execution. It contains bytecode which will be allowed to be executed (by anyone), once there is a vote and agreement on the proposal passing. The on-chain execution is guarded a hash of this transction, which the proposer provides in the proposal transaction (in advance of the vote).

An upgrade script that is tampered with will yield a different execution hash, and will be prevented from running (it is likely to be blocked by the transaction size limits before entering the mempool).

The `framework upgrade` command will produce a newly compiled Move upgrade transaction script, its binary, and the hash.

You need to provide:
- `--output-dir`: this directory the upgrade transaction files should be saved to. A new folder called `framework_upgrade` will be created under the output-dir path.

- `--framework-local-dir`: the source code for the framework so that the transaction script can import it as a dependency.

```
# At the moment this uses libra-framework that is built and stored in /libra-framework/target/release after compiling libra package
# Note the paths
libra-framework  upgrade --output-dir /your/update/dir/ --framework-local-dir /path/to/the/built/framework

# Example
libra-framework  upgrade --output-dir framework_upgrade --framework-local-dir /home/ubuntu/libra-framework/framework/
```
:::note
This creates 3 seperate library upgrade script directories
- 1-move-stdlib
- 2-vendor-stdlib
- 3-libra-framework

You will choose depending on which library you want updated
:::

All the artifacts are now created, the proposal transaction can be submitted. But it's a good idea to document this on github first.

##### 3. Share the output artifacts on Github.

Create a new repository with the outputted directory. Add a README.md file.

The proposer can add the link to this Github repo in the proposal phase.


### Upgrade Ceremony

##### 4. With `txs` anyone (no authority needed) can submit the proposal and metadata. You'll need to provide the actual script compiled path, and an optional URL which contains documentation of the proposal (e.g github).

```
# note the actual script dir
libra txs upgrade propose --proposal-script-dir /path/to/your/built/scripts --metadata-url https://www.urltoshowproposalinformation.com

# Example
libra txs upgrade propose --proposal-script-dir /home/ubuntu/libra-framework/target/release/new-upgrade/3-libra-framework/ --metadata-url https://www.github.com/0LNetworkCommunity/UpdateProposalTemplate

```
If this transaction succeeds it will produce a proposal id, which is a number. Now the proposal is open to voting.

:::note
You can query the next proposal using this command: ` libra query view --function-id 0x1::diem_governance::get_next_governance_proposal_id`
:::

##### 5. With `libra txs` anyone with governance authority (the epoch's validators as of `V7`), can submit a vote in favor (or against it with `--should-fail`).

We assume the default is to vote in favor. To vote "approve" simply:
```
txs vote --proposal-id <number>
```

If voter would like the proposal to be rejected:
```
txs vote --proposal-id <number> --should-fail
```
:::note
You can query to see the for and against votes using this command: ` libra query view --function-id 0x1::diem_governance::get_votes --args <the proposal number>`
:::

After everyone has voted (to reach the consensus threshold of 66% as of  `V7`), the proposal will be in a "Resolvable" state. Anyone can resolve it by submitting the upgrade transaction. This means the sender must have the source transaction script for the upgrade (step #2 above).

##### 6. Use `txs` to resolve a successfully approved proposal
```
# Note the actual path
libra txs upgrade resolve --proposal-script-dir ./framework/release/framework_upgrade --proposal-id <the proposal id>

# Example 
libra txs upgrade resolve --proposal-script-dir /home/ubuntu/libra-framework/target/release/new-upgrade/3-libra-framework/ --proposal-id 0
```

If this transction is successful the new bytecode will be written to the VM, and a new epoch will be triggered.
