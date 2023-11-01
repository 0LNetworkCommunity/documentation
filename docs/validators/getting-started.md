---
sidebar_label: 'Getting Started'
sidebar_position: 1
description: 'Learn whats involved running a validator on 0L Network'
---
# Getting Started

## Validators

Being a validator on OL Network is permissionless and open to anyone. The community is welcoming and helpful for keen enthusiasts interested in helping secure the network. With that said, there are also responsibilities that are outlined below and with these rewards for the work that is done.

### Validator Operations
- Running a validator is a 24/7 operation. 
- Being a Validator requires experience with System Administration and Dev Ops.
- Validators maintain the network and propose blocks within the Libra network. 

### Selection Process
OL Network uses the [Libra Framework](https://github.com/0LNetworkCommunity/libra-framework) that uses an experimental algorithm called Proof of Fee(PoF) to determine the validator selection. Libra Framework's consensus mechanism stands apart from the more commonly known frameworks like Proof of Stake (PoS), Delegated Proof of Stake (DPoS), and Proof of Work (PoW), which are prevalent in many other blockchain networks. Instead of following these established paradigms, OL Network employs a unique auction-based system for validator selection.

In this system, validators are required to submit bids as part of a competitive auction process. The number of available seats for validators is dynamic, and these seats are allocated based on the bid amounts. The bids are evaluated in descending order, and the highest bidders are granted validator status until all the seats are filled. A critical aspect of this mechanism is that all participating validators, regardless of their individual bid amounts, will eventually pay the same fee — equal to the lowest accepted bid in the auction.

#### High Level Steps
- Each prospective validator sets a bid in the PoF auction for n epoches
- On epoch change, there are a number of seats available depending on network performance, amount of interest from validators and epoch's the network has been running.
- Those seats are filled with the qualified bidders sorted by largest bid to smallest bid until either all validators are added or all the seats are filled.
- Each of the validators that are selected in the set then pays the amount of the lowest bidder in the set.
- The process repeats at every epoch

### Compliance
A validator must be compliant to be considered for the bidding process in the next epoch. If a current validator is not compliant on epoch change, they will be [Jailed](/tools/txs/validator#manage-jail-operations) and will require one of the active validators to unjail them.

**Compliance Specifications**
- New Entrants
    - 2 [Vouches](/tools/txs/validator#manage-vouching-operations) by Validators(not in the same Ancestry)
    - Submit a bid amount that is among the highest relative to other submissions, corresponding to the number of available validator seats. In other words, a bid must be high enough to rank within the top bids up to the maximum number of predefined validator seats. 

- Existing Epoch Validators
    - The above requirements of a New Entrant
    - An amount of proposed blocks greater than the amount of failed blocks

For a deeper understanding of this distinctive approach, you can delve into the conceptual and operational intricacies detailed in the following papers: [Part 1](https://0l.network/2022/10/15/proof-of-fee-part-1/) & [Part 2](https://0l.network/2022/10/20/proof-of-fee-part-2-a-proposal/)

### Rewards
Performant Validators are rewarded at the end of each epoch(~24hrs). The rewards come from the [Infrastructure Ecosystem Fund](https://0l.network/2022/10/11/proposal-2210-8-infrastructure-escrow-funding/) that was pledged by the Community at the hardfork from v5 -> v6.9.0 with the majority of the pledge being from current and previous validators. More on the decision can be found in the [Arctika Recommendation](https://0l.network/2023/05/23/team-arctika-recommendation/) but the basis of the fund and the reward amount per epoch was determined by a variety of factors. High level these are:
- Reward runway for ~10 years
- Rewards similar to current industry standards if the Network were to have a value roughly equivalent to ~100M  


### How to become a Validator
1. [Configure and setup your machine](/validators/running-a-validator)
2. [Sync Database to the current version](/validators/restore)
3. [Register your Validator](/validators/register)
