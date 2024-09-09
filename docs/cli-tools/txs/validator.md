---
sidebar_position: 3
description: "Control a Validator"
---

# Txs - Validator

## Description

The `libra txs validator` subcommand includes a set of subcommands tailored for validator operations. These commands facilitate actions like managing validator-specific transactions such as bids for joining the validator set.

## Validator Transactions

### Proof of Fee (POF) Operations

OL Network uses the [Libra Framework](https://github.com/0LNetworkCommunity/libra-framework) that uses an experimental algorithm called Proof of Fee(PoF) to determine the validator selection. Libra Framework's consensus mechanism stands apart from the more commonly known frameworks like Proof of Stake (PoS), Delegated Proof of Stake (DPoS), and Proof of Work (PoW), which are prevalent in many other blockchain networks. Instead of following these established paradigms, 0L Network employs a unique auction-based system for validator selection.

In this system, validators are required to submit bids as part of a competitive auction process. The number of available seats for validators is dynamic, and these seats are allocated based on the bid amounts. The bids are evaluated in descending order, and the highest bidders are granted validator status until all the seats are filled. A critical aspect of this mechanism is that all participating validators, regardless of their individual bid amounts, will eventually pay the same fee — equal to the lowest accepted bid in the auction.

For a deeper understanding of this distinctive approach, you can delve into the conceptual and operational intricacies detailed in the following papers: [Part 1](https://0l.network/2022/10/15/proof-of-fee-part-1/) & [Part 2](https://0l.network/2022/10/20/proof-of-fee-part-2-a-proposal/)

- **Function**: Manages bids for joining the validator set.
- **Syntax**: `libra txs validator pof --bid-pct <BID_PERCENTAGE>   --expiry <EXPIRY>`
- **Parameters**:
  - `bid-pct`: Percentage of the nominal reward bid for validator set entry.
  - `expiry`: Set the expiry epoch that your bid expires on.
- **Example**:
  ```
  libra txs validator pof --bid-pct 123.4 --expiry 1000
  ```

### Register Validator

> Make sure you have your config at `~/.libra/libra.yaml` with `libra config init`

- **Function**: Registers a new validator on the network.
- **Syntax**: `libra txs validator register [--operator-file <OPERATOR_FILE_PATH>]`
- **Parameters**:
  - `operator-file`: the file with a validators operator information. Usually found in ~/.libra/operator.yaml.
- **Example**:
  ```
  libra txs validator register --operator-file ~/.libra/operator.yaml
  ```

### Update Network and Fullnode Addresses

Within the Libra framework, the validator's operational settings are managed through a configuration file named operator.yaml, typically located in the ~/.libra/ directory. This file encapsulates key configuration details for the validator. To update the validator's operational parameters, one can modify this configuration file and then submit a corresponding transaction to the Libra blockchain. This transaction ensures that the changes in the configuration file are acknowledged and implemented by the network.

For your reference, the structure and content of the operator.yaml file are outlined below. It's important to note that the actual configuration may vary based on specific network requirements and validator setups:

```
---
operator_account_address: 00000000000000000000000000000000d1281de242839fc939745996882c5fc2
operator_account_public_key: "0x264cb0b3463a61177bc2a33a1b81df55cf92177ab216a0460f6aba57b5b0d2f2"
consensus_public_key: "0xb99f4b268d6aac24e4ca47f08faa2cb8aead75d2f495982c736dce340edd8a5bcba2d052e23f135e0ccc13136be16e97"
consensus_proof_of_possession: "0xb382b44e9a115e044da4f9bcc1bd8f75d819a029644ff2221b019bc20dea08f7ebfc1ea47d3e1d4a0c44c4207865e972116ef75af121bb9baefed3fb8e71e98b540da60bbd0375e70dd8df24f9e85ed69bacac65a6b440dd476b27fdfdf5475fe"
validator_network_public_key: "0x0a3cab5f2ecb29bdb4a9efe1dd4576feacefe4ec74ab7ef65d472bbb4461804d"
validator_host:
  host: 35.86.200.84
  port: 6180
full_node_network_public_key: ~
full_node_host: ~

```

- **Function**: Updates network addresses for a validator and associated full nodes.
- **Syntax**: `libra txs validator update --operator-file <OPERATOR_FILE_PATH>`
- **Parameters**:
  - `operator-file`: the file with a validators operator information. Usually found in ~/.libra/operator.yaml.
- **Example**:
  ```
  libra txs validator update --operator-file ~/.libra/operator.yaml
  ```

### Manage Vouching Operations

In the Libra framework, the concept of "vouching" is implemented as a means to establish and assess trust among participants. Primarily applied in the context of validators, this mechanism requires each validator to secure vouches from two existing validators. These endorsing validators must belong to distinct ancestry trees; in other words, they should not be part of the same lineage or hierarchical chain of account creation.

Additionally, the vouching system is governed by certain predefined rules. Each vouch has a finite lifespan, set to expire after 90 epochs. There is also a financial aspect to vouching: obtaining a vouch incurs a cost of 1000 microlibra. This amount is not merely a fee but is burned, signifying a tangible commitment and adding a layer of economic deterrence against frivolous or inauthentic vouching.

- **Function**: Manages vouching for or revoking a vouch for other entities in the network.
- **Syntax**: `libra txs validator vouch --vouch-for <VALIDATOR_ADDRESS> [--revoke]`
- **Parameters**:
  - `vouch-for`: The account of the validator you would like to vouch for or remove your vouch for
- **Example**:
- **Vouch for a validator**
  ```
  libra txs validator vouch --vouch-for 0xC7394B8AF7BC3BDB9258C53DFFDA7F2B
  ```
- **Remove a vouch for a validator**
  ```
  libra txs validator vouch --vouch-for 0xC7394B8AF7BC3BDB9258C53DFFDA7F2B --revoke
  ```

### Manage Jail Operations

In the Libra framework, validators who fail to meet consensus rules, particularly in terms of performance, are 'jailed' and removed from the validator set. They can only rejoin if a validator from the active set, who previously vouched for them, submits an 'unjail' transaction. This jailing process, part of the Vouch system, affects the reputations and responsibilities of both the jailed validator and their voucher, with consequences extending recursively to others in the vouching chain. Additionally, the voucher risks losing financial deposits, which adds significant stakes to maintaining network standards and performance.

- **Function**: Manages Jail functions within the network.
- **Syntax**: `libra txs validator jail --unjail-acct <UNJAIL_ACCT>`
- **Parameters**:
  - `unjail-acct`: The account of the validator a voucher would like to unjail
- **Example**:
  ```
  libra txs validator jail --unjail-acct 0xC7394B8AF7BC3BDB9258C53DFFDA7F2B
  ```

---
