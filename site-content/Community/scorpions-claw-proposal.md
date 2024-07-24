# Scorpion's Claw Recommendation

## Community Wallet Analytics and V7 Hard Fork Parameters [DRAFT]

April 9th 2024

# TL;DR

Operation Scorpion’s Claw identified 4.012 billion LIBRA involved in instances of abuse of the community wallet tooling; approximately 4% of the total supply.

A methodical approach was used to programmatically identify participating accounts. The endeavor took four weeks because

- new tools were developed
- new technologies implemented
- platform software updated

The result is a list of 436 accounts. If validators decide, they can now run a version of a network aiming to exclude dishonest accounts. The dishonest accounts which currently contain 3,768,939,592 LIBRA.

There was a handful of abuse cases. However, the vast majority of the exploit was conducted by a long-term community member who has publicly declared ownership of the accounts originating the exploit.

- 6DA2B828F3018637379203940C639A95
- 27E9577869ADFD677DBA9C940DEECE0A
- 988B8C3B7E55B6E5126884E02C8F166E

A hard fork is recommended, and should happen with a validator ceremony open to the public and using a clean database using the version 7.0.0 software release.

![image](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfpdWi_O_kHFqEKhvBDfr41QGlcBVH2As0u3xr5Hd0Fxb0IN9N8rBHfvFI5u76rOGSKZZFa36kWdY77XqVWhpRhSgptePszHNlvZJ-tptwfzZsp-WNkvVQLQyg4JTAe2N-uZDuTfhuO2I5XAuao1-1q84B1?key=UdkA8jBMllBve2WagZXXwA)

# What Happened

In preparation for the release of the 0L Network v7 Mainnet, analytics contributors ran a comprehensive on-chain analysis of all user-generated events – code named “Scorpion’s Claw”. This meticulous examination revealed several instances of abuse, predominantly to the Donor Voice accounts ("community wallets") which are a great source of pride of the 0L community.

Before a report on these abuses could be completed, the rogue players discovered the operation was underway and began to drain accounts into OTC markets. Some validators responded by stopping their nodes, preferring to wait for the final report and remediation recommendations than to continue participating on a network with that behavior. Many community members were interested in a Hard Fork. This report provides the facts, and basis for which a hard fork could be conducted.

Operation Scorpion’s Claw identified 4.012 billion LIBRA involved in these instances of abuse, or approximately 4% of the total supply.

In this report, a list of the accounts involved in the abuse has been developed by strictly adhering to the following goals:

- A deterministic approach for inclusion criteria.
- Maximum removal of misappropriated supply.
- Minimal adverse impact to uninvolved parties.

This endeavor yielded a final list of 436 accounts, holding 3,768,939,592 LIBRA.

Scorpion's Claw proposes that on a new network, these accounts will be excluded by being rendered inaccessible. As such, the associated supply will be permanently removed from circulation. These actions signify an exclusion rate of the total amount of dishonestly appropriated coins of 94%.

As with any hard fork the prior software would remain available to those who wish to continue on the prior chain. Though the recommendation of this report is that such a chain would not be popular with users for social and economic reasons, users and validators remain free to use that version of the chain if they so choose.

## Background

### Design Philosophy

The 0LNetwork community champions self-correcting systems instead of rigid white list driven systems with authoritarian control. Many 0L designers are informed by Karl Popper's vision of an open society and naturally self-correcting systems. This open approach to design and operations, while prone to exploitation, is essential for progress and encourages boundary testing that allows policy to evolve naturally. Exploitation and innovation are often distinguishable only in retrospect so open systems are necessarily open to what will later prove to be fraud. Eliminate any opportunity for exploitation and one also eliminates any opportunity for evolution. Exploit and evolve. We regard the tradeoff with equanimity.

Blockchains are probabilistic, not deterministic, systems. Hard forks in this paradigm are viewed not as indicators of failure nor guarantees of success, but as strategic adjustments that are vital to the longevity and success of a robust network which is resistant to abuse and central control.

0L's Approach to open policies:

- Emphasize the absence of absolute guarantees, lean on probabilities.
- Reject the need for foundational authority, embrace open participation.
- Recognize the constructive role of exploits and boundary-pushing by participants.
- Accept hard forks as evolutionary steps within the policy framework, aimed for continuous improvement.
- Invite a dynamic interaction with policies, where challenges are opportunities for advancement.
- Underscore the importance of adaptability and innovation in navigating open policies.

In this paradigm hard forks are viewed not as indicators of failure (nor success) but as strategic adjustments that are vital to the longevity and success of a robust network.

### 0L Network Policies

#### Slow Wallets

Ordinary wallets don’t limit transfer amounts and have no balance restrictions. Transactions are immediate in the typical wallet a user would initialize (e.g. in Carpe).

Early participants in a network may receive generous subsidies, but the chain’s policies should be designed in such a way as to prevent early participants from dumping on less sophisticated users. To address this need, rewards are sent to Slow Wallets (SW) rather than regular wallets. All validator node accounts, where a majority of rewards flow, are Slow Wallets. Slow Wallets have a drip mechanism that unlocks its balance in increments of 35k coins per epoch until the full balance eventually becomes unlocked.

#### Community Wallets

0L Network chain provides tools and patterns for communities to self-fund their activities with LIBRA. One pattern is the Donor Voice participatory payments together with Matching Donation Index, a.k.a., informally "Community Wallets".

Unlike traditional systems, the core innovation here is that there is no whitelist or global governance structure. 0L Network had no pre-mine state, and designs such as "founder rewards" are antithetical to our design philosophy.

A Community Wallet (CW) is instantiated not only with a number of on-chain tools (smart contracts), but also with off-chain commitments. Without going into further detail, a user could create a CW (on chain), and ask for donations (off chain). Those donations would also serve as a way to index a Matching Donations list, which validators and other contributors could opt-into (more below).

Notably, this open system is probabilistic, it was known in advance that it was likely that this would be abused (and as you see below, it was). So there are a number of conditions a CW owner, opts-into by instantiating Donor Voice covenants on their account:

- That account can only transfer coins to a Slow Wallet
- Proposed transfer takes three epochs (days) to finalize.
- During this period, Donors to have the opportunity to veto a transaction.
- Sequential vetoes to the account will freeze it from doing future transfers.
- Since V6.9.0, Donor Voice enabled accounts are required to be multi-sigs.

The astute reader will notice, the probabilistic equilibrium depends on players.

With an insufficient number of players observing Donor Voice accounts, or misplaced trust in observers of those accounts, abuse will take place. This is not a surprise, and was known from the start. A trade-off in playing open games.

#### Match Index

In many blockchains there is programmatic removal of coins from supply. Without going into much detail, there are cases when a user should pay competitively for a resource (e.g. transaction ordering), but the cost of providing that value is not proportional to the fee. One pattern is to exclude from the new network - colloquially, “burn” - the difference, and remove it from circulation permanently (see for example Ethereum's EIP 1551).

Typically the reason for burning instead of redirecting, is that burns prevent a kind of exploit loop where attackers can harvest the redirect. This is true, but it is also a missed opportunity and 0L Network proposed a market driven experiment.

There is also an opt-in alternative built into all accounts, that allows any user to redirect burns attributed to their accounts to community programs. Strictly speaking: a Donor Voice enabled account usually elects to be a part of Matching Index. This means instead of permanently removing the excess coins, validators can use them to fund any community's programs.

When a miner or validator opted into making matching donations to a CW, certain regular programmatic removal of coins, would instead recycle coins to the Match Index. (People have compared this mechanism as akin to implementations in the crypto industry of Quadratic Finance, without the quadratic nature of votes).

### The Equilibrium

The intersection of Community Wallets and Matching Donations was designed to create a healthy tension:

- Community Wallet Creation: Any community member has the power to create a Community Wallet, allowing for community participation in a diverse set of initiatives.
- Influence through Donations: By donating to these wallets, individual community members can influence the allocation of matching donations. This system is designed to encourage community support.

To the objection that more controls were necessary, the old adage of payment processing applies: "I can promise you zero fraud, as long as you receive zero payments".

#### Boundaries and Consequences

We've mentioned on-chain constraints to these accounts. It's also worth highlighting that the economic game involving community wallet, exists offline too. The blockchain serves as a coordination layer for the game, it is not the boundary of the game. All users of community wallet tooling should have the expectation that the laws and norms of society continue to apply (code is not law).

- Social: Community backlash or loss of trust among peers.
- Legal: Potential legal actions based on the severity and nature of the manipulation.
- Hard Fork: In extreme cases, the network might undergo a hard fork — a significant change to the protocol software and database which contain any rules the new network participants choose to enforce, for example: dropping accounts.

# The Exploits

This section explains the three types of abuse by community wallet creators which led to the hard fork decision.

### Harvesting

The Harvesting exploit involves skewing the matching donations algorithm by donating to a community wallet under the control of one validator with the only purpose of collecting coins from unsuspecting Match Index donors.

- Harvesting is the act of creating a Community Wallet, then:
  - Creating multiple accounts (usually Validators)
  - Programming them to funnel their donations and locked coins to the CW they control.
  - By doing so, the bad actors are increasing their CW balance while also creating the perception their Community Wallet is highly valued and directing more donations from the rest of the validators and the community as a whole.
- The image below is an example of the harvesting exploit. The blue nodes (validators), made AUTOPAY (blue lines) to a community wallet (orange node). In the case presented below, you can see two CWs that the validators that participated in the Sybil attack donated to (one above the validators, one below):

![image](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdDv0XeO11HLUR0NFbfKZkIMu33cTFNOtVs8jrwbHF45XecHE4tZO7MGQBUeeOIHGUAXh6G2cB5oqCxKdHVsRQh41wjG5r0OIEthoJwlz2-HYC78Ic5EDcNfp8a7sYfq9X6VXbVogCm3nyWrqYs9NljeDqT?key=UdkA8jBMllBve2WagZXXwA)

### Spraying

Spraying exploits circumvent the standard Slow Wallet time-locking algorithm by dividing payments into several Slow Wallets.

- By design, a Community Wallet only makes payments to a Slow Wallet.
  - Coins that are sent from CW to a SW first enter a “bucket” of “locked” coins.
  - They vest and then eventually transition to an unlocked state at a rate of 35,000 coins per epoch.
- Spraying is the act of creating multiple Slow Wallets and then sending CW_PAYMENT to them in parallel. Doing so linearly increases the number of unlocked coins. Instead of the allowed 35k unlocked coins per epoch, this exploit multiplies the effect by the number of slow wallets involved in the exploit.
- In the image below, the purple nodes represent slow wallets, and the green lines represent CW_PAYMENTs. In this case 2773 payment events were made to 433 slow wallets.
  - That means that every epoch, the owner of that network accumulated 15.1 million unlocked coins.

![image](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdedjYc4qNdnT7RzmvLX2vZNgrF0SiobpUAFrQT-X3k69OxssdhXIE0FXbblYocdKintniwjcMx9tde51PD587GAJaABy6J8rFkwQgnClMVj_KH1tHTvC5YBFvCJJMB2ssQGrBiW3jPRR9lq8EXwBjyinQ?key=UdkA8jBMllBve2WagZXXwA)

### Transfer Bug

A regression to the codebase was introduced during the v6.9.0 upgrade.

- The codebase regression manifested in the ability of a CW to make ordinary transfers. This meant bypassing all Donor Voice governance including donor observability, and restricting to Slow Wallets.
- The bug exploit can be seen in the image below with the red lines (transfers) from the CW (orange) to the nodes around it. In this particular case, you can see it exhibits also the first (multiple validators donate to it) and second exploits (making many payments to a multitude of Slow Wallets).

![image](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdg4tqkagkrHnHtGSOaOQgul_UDCLG2v1RFp3R1eKigc8Y3Psx6XsAeClqxwkF2nnvSFciXTP2hslnlOvMZiw2EaatK0dacqEncm2JRL3-W9c6xQOTbNTcbYoRgA1Aj-1Pl6VPW3i0I3WFkt-kDtO8B9ION?key=UdkA8jBMllBve2WagZXXwA)

# CASE 1 Principal Exploit

We will not cover each exploit in detail. However CASE 1 is exceptional because of the exploit size, there were approximately 3,614,811,756 (3.6 Billion) unlocked coins in possession of an individual (the largest unlocked coin stake by perhaps 30x). This is approximately 3.6% of the network supply.

### Principal Accounts involved

There are many hundreds of accounts created by a single exploiter. This is verifiable by observing the path of account creation from a seed set of a few accounts.

![image](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfiR_6nWttmM-i-0e5digE-8N3Z3HfFC1cQZtQR0Jy3imt67q44yYlFVMgKsp7vJN1iP6af1pfNBxbGQdy3kF7wBJrmEstINS4NaTCorV3tks6jtYr8kemVaK_f_u3W_9aGiB06Q6xLnVFIQLj_tiO9KWyy?key=UdkA8jBMllBve2WagZXXwA)

If the relationships of these few nodes are expanded, the flow of funds goes through these nodes:

![image](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd2GfTBgsrE6jEFLkeSFOyQJjaRaNyQb5FuBgV1ExEoMjf489bfdS9WKX4o8B7khcS_ibHawRgYAvZLInFWt76e6heG-Y24kA5XrT-W_oWzZ5Nuz1jj1Je42ou5bEACLroPMZgszHp3EDoNQccJCcv2bCE?key=UdkA8jBMllBve2WagZXXwA)

#### Sham Community Programs

The community wallets involved in this case are:

- 7B61439A88060096213AC4F5853B598E
- 5E68026887147DE0EA9CA90962C25A41
- 97DCBC6BFAA7EDF00F9002DAAED49C46

There is no information publicly available about these "community" programs. Different from other credible and well regarded programs in the community. Their principal source of funding was from "validators" nodes which the individual publicly associated themselves with. Due to the nature of Match Index (described above), many other validators became unwitting contributors to these accounts (the "harvesting" exploit).

#### Sybil Validator Accounts

Community wallets could not reasonably accumulate much capital unless they solicited donations from many people. But if an individual had acquired access to many "validators" with high reward potential, they could do so. (Note, acquiring multiple validators was also outside the stated norms of the community. Several validators were notified publicly that you should not try to run multiple validators even though you might be able to get around some of the constraints).

In this case, the exploiter had ownership of the following validator addresses:

- 6DA2B828F3018637379203940C639A95
- 15B291FFCA97895D726E8AA9A5BE6A2A
- 5DC8C3878E99E9FD12EBDEFA1803D332
- C5162C65FDE8C9D9CA9B564E41A54003
- 988B8C3B7E55B6E5126884E02C8F166E
- 7D299BF3D624E937C23302D8B5E3A1B2
- 99E4EE712E2A57F694344D288A0FC27A
- 9F1D8C66883768F167A097FF4C58DE88
- C0FFEE1A3393516D27B72B28464EAA5F

# The Hard Fork Goals

Once validators realized the magnitude of the exploit, they and core contributors responded by stopping their nodes preferring to await a full analysis and recommendation.

The recommendation here is to perform a hard fork of the 0L Network, which maintains all properties of the canonical chain except that it does not migrate the accounts involved in the abuse of the system’s hardcoded rules and prevents the abuse of those hardcoded rules from taking place again.

Punishment is not an end-goal. The recommendation is to simply remove abusive accounts, while perhaps setting a non-binding social precedent signaling that a decentralized group of validators are capable of taking, and willing to take, coordinated action to prevent abuse and will not run software that allows abuse.

# The Process

The first part of the process involved defining the exploit types. The effort had three key objectives: ensure accuracy, capture as much questionable activity as possible, and avoid penalizing innocent parties all while still being deterministic.

The Goals were to:

1. Find all the community wallets that participated in the defined exploits.
2. For each of them, via pattern matching, identify and collect a list of the nodes that participated in the scheme.
3. Identify edge cases where the common patterns did not apply or the scheme operator attempted to obfuscate their actions or balance by spreading nodes via common “superspreaders” like the Discord onboarders.
4. Ensure no common, widely known accounts were present on the list such as Discord onboarders.
5. Leave every harvesting case with a single validator node (both as a show of grace and to reward their legitimate contribution to the network).
6. Applying a 200K LIBRA balance threshold to reduce the impact to innocent parties who might be caught up accidentally in the exploit. This approach led to 45.58% of the accounts being excluded from further examination, ensuring the focus of remediation on more chief offenders (see table A in appendix).
7. A single database command should generate a list of accounts without human intervention.

This whole process was written in several Cypher language (graph DB) queries and packaged into a Python tool that can be run by anyone to produce an identical checksum of the final list. This tool and the queries have been made public in the following directory on GitHub: [https://github.com/0LNetworkCommunity/scorpions-claws](https://github.com/0LNetworkCommunity/scorpions-claws).

# The Result

- 436 accounts excluded from new network
- Total LIBRA excluded from new network (“burned”): 3,768,939,592
- Circulating LIBRA burned: 1,419,359,988
- Locked LIBRA burned: 640,266,766
- Community Wallet LIBRA burned: 1,709,312,837
- Community Wallet excluded from new network: 6
- Historical validator accounts excluded from new network: 11

# Actions Needed by The Coin Holders

No action is required by community members who were not involved in the exploits. The transition to the hard fork and all subsequent version upgrades will occur seamlessly and automatically.

# Other Mitigations in Place

What does the future look like and what more needs to be done?

- The Bug exploit was fixed in January 2024 in an on-chain upgrade.
- A new off-chain monitoring infrastructure will be built post v7.
  - This will improve network visualization and investigative capabilities. The tools that have been developed and utilized during this exploit analysis, will be available soon for public use.
- A dedicated Community Wallets page in explorer will provide valuable insights and live CW activity.
  - The community and contributors will continue to report any discovered exploits, rather than taking advantage of them to the detriment of the rest of the community.
- There is no more easy money left.
  - A majority of the exploits occurred during a time in the evolution of the network where exploits like harvesting could be rewarded. That time has passed.

# Acknowledgments

Special thanks to the Scorpion's Claw task force and all the contributors who worked tirelessly over weeks to resolve these issues on behalf of the extended community. Your commitment to the network is greatly appreciated, and the community is very thankful for your efforts.

A very sincere and heartfelt thank you also to the wider community for your patience and support throughout this process.

# Appendix

Scorpion’s Claw Farm Report: [https://docs.google.com/document/d/e/2PACX-1vQXu7IISWJIAYQ1OG--ETtdaqE7tYG5Gs0kxDkwfRWZAD0W7SFVdb_EgoN8IqHyTj3DXIhF1okYLFT2/pub](https://docs.google.com/document/d/e/2PACX-1vQXu7IISWJIAYQ1OG--ETtdaqE7tYG5Gs0kxDkwfRWZAD0W7SFVdb_EgoN8IqHyTj3DXIhF1okYLFT2/pub)
