---
sidebar_position: 9
sidebar_label: 'Hot Upgrades'
description: 'Upgrading Framework Libraries'
---



# Network Hot Upgrades

## Overview

The "framework" which contains all the consensus, account, econ policies, etc. for the network is written in Move. This code is stored in the network database, and effectively executed on demand. This means that framework upgrades can occur without redeploying the Move VM itself, or the supporting system code (network node software). It also means the state machine can upgrade without a coordinated halt.

- To do this we require the `libra` cli tool. The command `libra move framework` is used for building the artifacts, and `libra txs` for proposing, voting, and ultimately deploying the artifacts.

- Metadata with the upgrade artifacts and proposal documentation can be found at: https://github.com/0LNetworkCommunity/upgrades


## Historical Upgrade Information and Proposing Upgrades
Historical upgrade information since release 7.0.0 is canonically stored in the [upgrade repository](https://github.com/0LNetworkCommunity/upgrades). To submit an upgrade proposal, you should draft a PR with the relevant information detailing the upgrade using the provided [template](https://github.com/0LNetworkCommunity/upgrades/tree/main/proposals/template) and include the upgrade script packages.


## TL;DR

- **Fetch the latest release**:
```
cd libra-framework
git fetch --all
git checkout release-x.x.x
```
- **Build framework**:
```
libra move framework upgrade --output-dir <path/to>/framework_upgrade --framework-local-dir <path/to>/libra-framework/framework/
```

- **Propose**:
```
libra txs governance propose --proposal-script-dir <path/to>/framework_upgrade/1-move-stdlib/ --metadata-url https://github.com/0LNetworkCommunity/upgrades/tree/main/proposals/up-000<PROPOSAL_ID>.md

# NOTE: Do not repeat this step. Multistep (multiple modules) only need one proposal, and it should reference the first module, usually 1-move-stdlib
```

- **Each Validator votes**:
```
libra txs governance  vote --proposal-id <ID>
```

- **After vote, one person can resolve each module in order**:
```
libra txs governance resolve --proposal-script-dir <path/to>/framework_upgrade/1-move-stdlib/ --proposal-id <ID>

libra txs governance resolve --proposal-script-dir <path/to>/framework_upgrade/2-vendor-stdlib/ --proposal-id <ID>

libra txs governance resolve --proposal-script-dir <path/to>/framework_upgrade/3-libra-framework/ --proposal-id <ID>
```

## Upgrade Types: Single and Multiple

When performing upgrades within the network framework, two primary approaches can be employed: single and multiple module upgrades. The key distinction lies in how these upgrades are proposed, voted on, and executed, particularly with respect to handling multiple modules.

### Single Framework Upgrade
A single framework upgrade involves updating a singular set of modules within the framework. This process is straightforward and includes the following steps:

- **Build Framework**: Generate the upgrade Move transaction scripts for the module.
- **Proposal Submission**: Propose the upgrade for the specific framework module.
- **Validator Voting**: Validators within the network vote for or against the proposed upgrade.
- **Achieving Consensus**: The proposal moves forward once it receives support from at least 66% of active validators.
- **Resolution and Deployment**: Resolve the proposal using the exact framework directory that matches the build of the proposed upgrade. This can be done by any validator using the same release branch from the `libra-framework` repository.

### Multiple Framework Upgrades
Multiple framework upgrades require a more nuanced approach, especially regarding resolution stages, to ensure a coherent and secure update across several modules.

- **Build Framework**: Similar to a single upgrade, start by generating Move transaction scripts for all relevant modules.

- **Proposal for Initial Module**: Propose the upgrade by using the first module (`1-move-stdlib`). This initial proposal is critical as it kickstarts the governance process for the entire upgrade.

*WARN: Do not repeat proposals for subsequent modules, the three modules can be upgraded with a single instance.*

Importantly, the transaction script for upgrading this first module includes a significant addition: **the transaction hash for the subsequent modules** that needs upgrading. These hashes, produced during the artifact building phase, serve as secure identifiers for each module's upgrade script. Do not run this step twice.

- **Validator Voting**: As with single upgrades, validators vote for or against the proposed upgrade.
- **Achieving Consensus and Sequential Resolution**: Once at least 66% of active validators support the proposal, the initial upgrade can be resolved.
- **Sequential Upgrade Execution**: Execute the resolution process for all involved modules, following the order 1-3.


## Upgrade Policy
The diem framework has information in the metadata that controls the policy that a publisher can set for upgrading their modules. These are:
- Arbitrary(0): Allows code upgrades without compatibility checks, for non-shared packages.
- Compatible(1): Requires compatibility checks to ensure no breaking changes in public functions or resource layouts.
- Immutable(2): Prevents any upgrades, ensuring the permanence of critical code.

Due to some circumstances, a publisher may want to downgrade the policy to allow changes to go through that a restrictive policy would not allow. We can do this by building the framework with a flag(`--danger-force-upgrade`) that sets the upgrade policy as Arbitrary

#### Example

```
libra txs governance propose --proposal-script-dir <path/to>/framework_upgrade/3-libra-framework/ --metadata-url https://github.com/0LNetworkCommunity/upgrades/tree/main/proposals/up-000<PROPOSAL_ID> --danger-force-upgrade
```

## Procedure

We will use this guide to do a multi-step upgrade as this is the most common upgrade that is done.

### Build Artifacts

##### 1. Build the upgrade Move transaction scripts

This will be a Move package which is machine-generated for a one-time execution. It contains bytecode which will be allowed to be executed (by anyone), once there is a vote and agreement on the proposal passing. The on-chain execution is guarded with a hash of this transaction, which the proposer provides in the proposal transaction (in advance of the vote).

An upgrade script that is tampered with will yield a different execution hash, and will be prevented from running (it is likely to be blocked by the transaction size limits before entering the mempool).

The `libra-framework upgrade` command will produce a newly compiled Move upgrade transaction script, its binary, and the hash.

You need to provide:
- `--output-dir`: this directory the upgrade transaction files should be saved to. A new folder called `framework_upgrade` will be created under the output-dir path.

- `--framework-local-dir`: the source code for the framework so that the transaction script can import it as a dependency.

Optionally you could provide the flag `--danger-force-upgrade

#### Multi or Single Upgrade
Know the difference between a single step, and multi-step upgrades.
An upgrade that changes, all three (stdlib, vendor-stdlib, libra-framework) looks like this:
https://github.com/0LNetworkCommunity/upgrades/blob/main/proposals/up-0004/

AN upgrade that changes only one module `libra-framework` can be seen here:
https://github.com/0LNetworkCommunity/upgrades/tree/main/proposals/up-0009

### Default: Produce all three module upgrades
Includes: stdlib, vendor-stdlib, libra-framework.

```
# Note the paths
libra-framework upgrade \
--output-dir <OUTPUT_DIR> \
--framework-local-dir <FRAMEWORK_PATH>

# Example
libra-framework upgrade \
--output-dir <path/to>/framework_upgrade \
--framework-local-dir <path/to>/libra-framework/framework/
```


#### NOTE: This creates 3 separate library upgrade script directories
- 1-move-stdlib
- 2-vendor-stdlib
- 3-libra-framework

All the artifacts are now created, the proposal transaction can be submitted. But it's a good idea to document this on github first.

# Light: Only update one of the modules
If the code is backwards compatible you can update a single module. This can be true for `libra-framework`, when there are no changes to `stdlib` or `vendor-stdlib`.

In that case you can include the argument `--core-modules libra-framework`
```
# example:
libra-framework upgrade --core-modules libra-framework \
--output-dir <path/to>/framework_upgrade \
--framework-local-dir <path/to>/libra-framework/framework/

# Note: --danger-force-upgrade can also be used here
```
##### 2. Share the output artifacts on Github.

A dedicated repository for upgrade proposals exists at:

https://github.com/0LNetworkCommunity/upgrades/

The proposer can add the files folder and documentation  link to this Github repo, for example:
https://github.com/0LNetworkCommunity/upgrades/tree/main/proposals/up-0005

#### PRO-TIP:
If you already have this upgrades repo locally, you should run the command in the previous step (build artifacts) with `--output-dir` pointed to `./upgrades/proposals/up-000x`


### Upgrade Ceremony

##### 3. With `txs` anyone (no authority needed) can submit the proposal and metadata.

You'll need to provide the actual script compiled path, and an optional URL which contains documentation of the proposal (e.g github).

```

# NOTE: multi-step upgrades (all modules) only need ONE proposal, and it should reference the first module, usually 1-move-stdlib

libra txs governance propose --proposal-script-dir <PROPOSAL_SCRIPT_DIR> --metadata-url <URL>

# Example
libra txs governance propose \
--proposal-script-dir <path/to>/framework_upgrade/1-move-stdlib/ \
--metadata-url https://github.com/0LNetworkCommunity/upgrades/tree/main/proposals/up-000<PROPOSAL_ID>.md

```
If this transaction succeeds it will produce a proposal id, which is a number. Now the proposal is open to voting.

#### NOTE: You can query the next proposal using this command:
```
libra query view --function-id 0x1::diem_governance::get_next_governance_proposal_id
```
:::

##### 4. With `libra txs` anyone with governance authority (the epoch's validators as of `V7`), can submit a vote in favor (or against it with `--should-fail`).

We assume the default is to vote in favor. To vote "approve" simply:
```
libra txs governance vote --proposal-id <PROPOSAL_ID>
```

If voter would like the proposal to be rejected:
```
libra txs governance vote --proposal-id <PROPOSAL_ID> --should-fail
```
:::note
You can query to see the for and against votes using this command:
```
libra query view --function-id 0x1::diem_governance::get_votes --args <proposal_number>
```
:::

After everyone has voted (to reach the consensus threshold of 66% as of `V7`), the proposal will be in a "Resolvable" state. Anyone can resolve it by submitting the upgrade transaction. This means the sender must have the source transaction script for the upgrade (step #1 above).

##### 6. Use `txs` to resolve a successfully approved proposal
```
# Note the actual path
libra txs governance resolve --proposal-script-dir <PROPOSAL_SCRIPT_DIR> --proposal-id <PROPOSAL_ID>

# Example
    1. libra txs governance resolve --proposal-script-dir ~/framework_upgrade/1-move-stdlib/ --proposal-id 0

    2. libra txs governance resolve --proposal-script-dir ~/framework_upgrade/2-vendor-stdlib/ --proposal-id 0

    3. libra txs governance resolve --proposal-script-dir ~/framework_upgrade/3-libra-framework/ --proposal-id 0
```

If this transaction is successful the new bytecode will be written to the VM
