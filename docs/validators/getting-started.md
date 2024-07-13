---
sidebar_label: 'Getting Started'
sidebar_position: 1
description: 'Learn whats involved running a validator on 0L Network'
---
# Getting Started
---

## Validators

Participating as a validator on the 0L Network is an open and permissionless process, accessible to all. The community is supportive and eager to assist those passionate about contributing to the network's security. However, it's important to note that this role comes with certain responsibilities, as outlined below, along with corresponding rewards for the efforts made.

### Validator Operations

#### Key Responsibilities
1. **Continuous Operation**: Validators must ensure their systems are operational 24/7.
2. **Technical Expertise**: A background in System Administration and DevOps is essential for those looking to become Validators.
3. **Network Maintenance**: Validators play a critical role in maintaining the network's integrity and are responsible for proposing blocks within the Libra network..

### Selection Process
OL Network uses the [Libra Framework](https://github.com/0LNetworkCommunity/libra-framework) that uses an experimental algorithm called Proof of Fee(PoF) to determine the validator selection. Libra Framework's consensus mechanism stands apart from the more commonly known frameworks like Proof of Stake (PoS), Delegated Proof of Stake (DPoS), and Proof of Work (PoW), which are prevalent in many other blockchain networks. Instead of following these established paradigms, 0L Network employs a unique auction-based system for validator selection.

In this system, validators are required to submit bids as part of a competitive auction process. The number of available seats for validators is dynamic, and these seats are allocated based on the bid amounts. The bids are evaluated in descending order, and the highest bidders are granted validator status until all the seats are filled. A critical aspect of this mechanism is that all participating validators, regardless of their individual bid amounts, will eventually pay the same fee — equal to the lowest accepted bid in the auction.

#### High-Level Steps for Validator Selection

1. **Bidding Process**: Prospective validators submit their bids during the Proof of Fee (PoF) auction for a specified number of epochs.
2. **Epoch Transition and Seat Availability**:
    - At each epoch change, the number of available seats for validators is determined. This depends on factors such as network performance, interest level among validators, and the number of epochs the network has been operational.
3. **Seat Allocation**:
    - Seats are allocated starting from the highest bid to the lowest, until either all the validators are included or all the seats are filled.
4. **Payment by Selected Validators**:
    - Validators who are chosen in the set pay an amount equal to the lowest bid within that set.
5. **Repetition of Process**:
    - This selection and bidding process is repeated at the beginning of each new epoch.

### Compliance Requirements for Validators

#### Overview
To participate in the bidding process for the next epoch, validators must
maintain compliance. Non-compliant validators at the time of an epoch change
will be [jailed](../cli-tools/txs/validator.md) and must be
un-jailed by one of the active validators to re-enter the process.

#### Detailed Compliance Criteria

1. **For New Entrants**:
   - Obtain 2 [vouches](../cli-tools/txs/validator.md#manage-vouching-operations) from existing validators, ensuring no shared ancestry.
   - Submit a bid that ranks among the highest in comparison to others, relative to the number of available validator seats. Essentially, the bid should be sufficiently competitive to fall within the range of top bids for the given number of validator seats.

2. **For Existing Epoch Validators**:
   - Fulfill all requirements applicable to new entrants.
   - Ensure the number of successfully proposed blocks exceeds the number of failed blocks.

#### Further Insights
For an in-depth exploration of these guidelines and their underlying principles, refer to the comprehensive discussions in these papers: [Proof of Fee Part 1](https://0l.network/2022/10/15/proof-of-fee-part-1/) and [Proof of Fee Part 2: A Proposal](https://0l.network/2022/10/20/proof-of-fee-part-2-a-proposal/).

### Validator Rewards Structure

#### Reward Distribution
Validators demonstrating high performance are awarded at the conclusion of each epoch, approximately every 24 hours. The source of these rewards is the [Infrastructure Ecosystem Pledge](https://0l.network/2022/10/11/proposal-2210-8-infrastructure-escrow-funding/), established following the network's upgrade from version 5 to version 6.9.0. This fund was primarily contributed to by both current and former validators, as well as the wider community.

#### Fund Origin and Decision Making
Details on the formation of this fund and the associated decision-making process are outlined in the [Arctika Recommendation](https://0l.network/2023/05/23/team-arctika-recommendation/). The establishment of the reward amount per epoch and the basis of the fund itself were influenced by several key factors:
   - A projected reward sustainability (or "runway") of approximately 10 years.
   - Setting reward amounts comparable to prevailing industry standards, assuming the network achieves a valuation close to $100 million.

These measures aim to incentivize consistent and effective network performance by validators, aligning with broader industry norms and long-term network health.


### How to become a Validator
1. [Configure and setup your machine](/validators/detailed-instructions)
2. [Sync Database to the current version](/validators/restore)
3. [Register your Validator](/validators/register)
