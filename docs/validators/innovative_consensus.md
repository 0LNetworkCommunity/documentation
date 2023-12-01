---
sidebar_position: 2
sidebar_label: 'Innovative Consensus'
description: '0L does consensus differently'
---
# Innovative Consensus
---
_PoF and musical chairs attempt to minimize (not eliminate) the surface area for governance: of negotiating setting inflation rate, rewards rate, validator set size, and voting in/out members of validator set._

In the context of the Libra framework, the integration of Proof of Fee (PoF) and Musical Chairs methods addresses the common issue of networks overpaying for security. PoF optimizes validator selection based on bids, balancing experienced and new participants, which helps in cost-effective security management. Musical Chairs, with its dynamic adjustment of validator set size based on actual network performance, prevents unnecessary expansion of the set, further contributing to cost efficiency. This approach, in line with the Libra framework, seeks to achieve robust security without the excessive costs often seen in other networks, ensuring a more efficient and economically sustainable blockchain ecosystem. Both methods operate under a principle of equal voting power per validator, aligning with Diem BFT's approach to consensus, and together, they offer a balanced, performance-oriented framework for blockchain networks.

## TL;DR: Process
---

### Algorithm Steps for Proof of Fee (PoF) and Musical Chairs

#### Proof of Fee (PoF)

1. **Bid Submission:**
   - Validators submit their bids for the auction process.

2. **Bid Evaluation:**
   - Bids are ordered and evaluated based on the amount.

3. **Validator Selection:**
   - Top bidders are selected until all available seats are filled.
   - Maintain a 2/3 majority of proven validators from the previous epoch.

4. **Jail Reputation Check:**
   - Assess validators’ jail records for reliability.

5. **Finalization:**
   - Confirm the final list of validators.
   - Determine the lowest accepted bid and set it as the fee for all.

#### Musical Chairs

1. **Performance Monitoring:**
   - Track and evaluate validators’ performance metrics.

2. **Set Size Adjustment:**
   - If 100% compliance, increase validator set size by one.
   - If less than 5% failure, maintain current size.
   - If more than 5% failure, reduce size to the number of compliant validators.

3. **Validator Assessment:**
   - Review validators’ performance for current epoch.

4. **Selection for Next Epoch:**
   - Based on performance, determine validators for the next epoch.

5. **Adaptation:**
   - Adjust the algorithm parameters based on overall network health and performance. 


## Proof of Fee (POF)
---
OL Network uses the [Libra Framework](https://github.com/0LNetworkCommunity/libra-framework) that uses an experimental algorithm called Proof of Fee(PoF) to determine the validator selection. Libra Framework's consensus mechanism stands apart from the more commonly known frameworks like Proof of Stake (PoS), Delegated Proof of Stake (DPoS), and Proof of Work (PoW), which are prevalent in many other blockchain networks. Instead of following these established paradigms, 0L Network employs a unique auction-based system for validator selection.

In this system, validators are required to submit bids as part of a competitive auction process. The number of available seats for validators is dynamic, and these seats are allocated based on the bid amounts. The bids are evaluated in descending order, and the highest bidders are granted validator status until all the seats are filled. A critical aspect of this mechanism is that all participating validators, regardless of their individual bid amounts, will eventually pay the same fee — equal to the lowest accepted bid in the auction.

For a deeper understanding of this distinctive approach, you can delve into the conceptual and operational intricacies detailed in the following papers: [Part 1](https://0l.network/2022/10/15/proof-of-fee-part-1/) & [Part 2](https://0l.network/2022/10/20/proof-of-fee-part-2-a-proposal/)


## Musical Chairs
---

The Libra Framework features an innovative algorithm known as "Musical Chairs" to dynamically determine the optimal number of validators. This approach diverges from traditional fixed-capacity models in blockchain networks, offering a more flexible and performance-based system.

In Musical Chairs, the size of the validator set is not static but fluctuates based on the real-time performance of the network. This method relies on a set of specific performance metrics to assess the efficiency and compliance of validators. The process ensures that the network remains robust, secure, and efficient without being overburdened by an unnecessarily large number of validators.

Further insights into this novel mechanism can be explored in PoF publications


## Vouching 
---

There is also a distinctive "vouching" system that is intricately woven into its consensus mechanism. This system plays a pivotal role in establishing and maintaining the network's integrity and security, complementing the Proof of Fee (PoF) and Musical Chairs models. Vouching in the 0L Network is designed to effectively navigate and utilize the trust graph, making it a cornerstone of the network's overall governance and functionality.

Vouching is primarily applied in the context of validators however it could be utilized in other places within the network in the future. In this system, each validator is required to secure vouches from two existing validators who must come from distinct ancestry trees. This means that the endorsing validators cannot be part of the same lineage or hierarchical chain of account creation, ensuring a broad and diverse base of trust. 

The vouching process is governed by specific rules to ensure its effectiveness and integrity:

- **Expiration of Vouches:** Each vouch is designed with a finite lifespan, expiring after 90 epochs. This temporal limitation necessitates active and ongoing participation in the network's trust-building processes.
  
- **Economic Aspect:** Obtaining a vouch incurs a cost of 1000 microlibra. Rather than functioning as a mere fee, this amount is burned. This signifies a substantial commitment on the part of the voucher and adds a layer of economic deterrence against insincere or inauthentic vouching.

## Examples
---
### Examples of Validators Not Entering the Set

- **High Bid Scenario:** 
  - All bids from validators are significantly higher than the network's threshold, leading to a situation where there aren't enough seats for all high bidders. This can happen if the validators overestimate the required bid amount.

- **Limited Seat Availability:** 
  - The number of available seats is less than the number of validators willing to participate. In such cases, even validators with reasonably high bids might not get selected.

- **Performance-Based Exclusion in Musical Chairs:** 
  - A validator who fails to meet the performance standards set by the network (e.g., uptime, block validation success rate) may be excluded from the next epoch's validator set, regardless of their bid in the PoF process.

- **Failure to Meet Qualification Criteria:** 
  - Validators not meeting essential criteria such as sufficient funds, minimum vouches, or having a history of being jailed in the previous round, will be excluded regardless of their bid.

