
## The Cost of Consensus




 




 




### TL;DR




As an alternative to the (near\-universally deployed) Delegated Proof of Stake (DPoS), we propose Proof of Fee (PoF), a sybil resistance technique designed natively and with consideration of the benefits and tradeoffs of PBFT consensus from empirical experience.




* Profits to blockchains are slim to non\-existent. Low consensus costs are foundational for any chain that wishes to provide consumer surplus and profit to coin\-holders; where excess winnings of the chain can be distributed to *all* account holders without preference to an investor class of "stakers".
* In PoF the cost of consensus is lowered maximally to the *operator opportunity cost*; with such an approach, the social cost of dilution through issuance is minimized.
* Validator seats are auctioned at each epoch, such that the validators private valuation of rewards, MEV, breakage, and governance is revealed.
* PoF coins have superior ergonomics. Every actor has a very simple instruction; no staking, no delegation, no yield games, no slashing.





```
Before we dive into the mechanics of Proof-of-Fee, in Part 1 of this paper we lay some foundations which may be different from what you have seen elsewhere. [Part 2 of the paper](http://openlibra.blog/2022/10/20/proof-of-fee-part-2-a-proposal/) gets into the mechanics and implementation details of Proof-of-Fee (PoF), an affordable sybil resistance technique native to PBFT consensus.
```



## Why Not Delegated Proof of Stake?




While the purpose of the document is not to dissect DPoS, what follows  is the briefest context  on reasons why DPoS may not work for a blockchain's community. 




A meaningful issue is the "ergonomics" of the token, that is, how do humans interact with it. End users may be unsophisticated and not know how to stake. They may have coins on an exchange which does not offer staking services. The coins may be in escrow in an application's smart contract, or across a bridge. Some of these issues are surmountable if there were sufficient education and infrastructure, but in the meantime the result is a disparity between the percentage of tokens staked and the percentage of account holders. A large percentage of the token supply may be staked (by whales and the savvy coin holders), but it represents only a small number of the total wallets.




Modern DPoS blockchains are also universally deployed with "inflation" or issuance of new coins to subsidize the validator operators and their stakers. This may be necessary because transaction fees from producing blocks are far lower than the validators deem acceptable to provide their services.




The result is that the accounts which are not staking are effectively paying a fee to the stakers. This means usually the retail investors are paying a fee to keep an account on the chain (a wealth tax) often to the founding members of the chain (venture capitalists and developers). This is not a widely advertised property of such chains. 




Promoters of the chains may say that this is transitory, that transaction fees will one day catch up, but this should be viewed with some skepticism. Looking forward to the next ten years, the cost of each state transition on a blockchain will drop radically due to secular engineering advances (e.g., parallelization, mempool optimization, sharding, layer 2, etc.); given a trend towards commoditization, prices tend to drop to marginal levels. Given the likelihood of a paucity of revenue from transaction fees, DPoS blockchains may be structurally and permanently in the business of taxing the depositors.




There is also some debate around the "delegation" component of DPOS and whether it is serving its purpose. Delegation is expensive as it adds to the cost of consensus (because now there are more people, and more opportunity costs, that need to be compensated). The cost must achieve the goals of plausible neutrality (decentralization) and select for ideal validators. Instead, the empirical evidence of what delegation does is select for the parties that can accumulate capital (e.g. large centralized exchanges). That behavior does not necessarily align with achieving the goals.




Lastly, the staking requirements may be excessive, inefficient uses of capital. One should ask the question: Does the bond really need to be 1,000 to 1,000,000 times the reward of an epoch? Given that L1s have not empirically seen slashing of large stakes from malicious attacks, the level of bonding is disproportionate to the need (more below on nothing\-at\-stake issues).




We start from the assumption that more exploration needs to be done on economic guarantees for modern blockchains, which are mostly all based on PBFT and derivations thereof. Proof of Fee is proposed as an experiment.




## Validator Economics




Since validators are the largest cost of a network, we need to clearly understand their costs and their expected utility from participating in a network. 




Validators have a private valuation (*expected utility*) of a seat in consensus. The same validator has a private opportunity cost for the work it provides. If the expected utility is greater than the total costs, including opportunity cost, then a rational validator should participate in consensus.




### Validator Costs




One of the roles of protocol engineers is to lower the hard costs associated with being a validator; make the tools work reliably, make the node software use less hardware resources, and provide greater automation and monitoring.




Technical matters, however, cannot address all of the costs of the validator; there are also opportunity costs. The time it takes for the staff to operate the nodes, research, participate in governance, and do business administration could be used for other purposes (on other chains). Additionally, if there is a financial cost such as staking, then that value could always be used elsewhere, staked elsewhere.




Opportunity cost is out of the control of protocol engineers and designers, it is a feature of the global markets (labor, tokens, compute, energy, etc.).




### Validator Utility




Given that the opportunity cost is extrinsic, profitability for the validator (and the blockchain) is created by the business environment of the blockchain. Some of the factors that contribute to the private assessment of the utility of the validator seat are tangible and easily measurable (transaction fees), others are intangible and highly subjective (governance roles).




#### *Transaction Fees*




Most blockchains describe transaction fees as a title (property right) of node operators. (Note in Proof of Fee we take the view that transaction fees are a title of the coin holders, more on that later). The transaction fees flow by default to network operators. Most often those fees are far lower than what those same validators are earning from network subsidies.




#### *Subsidies*




Most blockchains provide subsidies in addition to transaction fees. This is supposed to supplement the validator's earnings while bootstrapping the network and the transactions are insufficient. Even in 2022 the most established blockchain, Bitcoin, generated only a fraction of earnings from transaction fees: Roughly 1% (i.e., roughly 99% comes from subsidies \- see the chart, below).




![](https://lh4.googleusercontent.com/IDSFhHIiMq_FQMvE7JKvK9tlUD9pKIRvXl-XJ_aDk5U2bur44IjQAQLx41gfWYUn6xOKHTKMkrR1Y2x--7UguUH0L-WlUJhpiW92PRzTEda8Ix8_uo_4HWSU3vsP1zMUl-IsbKcAR4LpyuihYRg6mN5pkX-gkBzwWr3OiJmDqXBcAlm5kYsc5kTu)




Source: [TheBlock.co](https://www.theblock.co/)




As a matter of practice, subsidies are almost exclusively newly issued network equity, and as such are dilutive. Meaning, subsidies are a cost to depositors on a blockchain due to the reduction in their percent equity. Assuming a network with a constant market\-cap valuation (which we must do from a unit\-economics analysis), new issuance to the miner which produced security, is a reduction in value to anyone who didn't receive a new coin. Additionally, this new equity is financing the current security needs by time shifting future earnings from transaction fees (presumably, unless new revenue models are discovered).




All known blockchains are loss\-making in this regard. While Ethereum makes some claims about becoming profitable, it remains to be seen whether this can be sustained over more than a brief period (, and there are at least a few pundits out there who are questioning that claim). 




#### *No\-Show Rewards*




Another aspect of validator utility to consider is no\-shows from other validators, that is, drop\-outs from competitors. When a validator is successful in the validator set, and one or more of its peers fails in consensus, there is a surplus of transaction fees (or subsidies) that are available to it. Meaning, the pool of rewards within an epoch is greater than what was nominally attributable to the validator at the start of the epoch. We separate this from the topic above because chance is involved and part of the utility is a wager on the success of the peers.




This is relevant because even if validation is nominally not profitable from transaction fees or expected subsidies, the validator may see value in "staying in the game" in case another node falls out.




#### *MEV*




MEV is a category of earnings that a validator can create by engaging in different types of frontrunning as it prepares transactions into blocks. As of 2022, this has become an important source of revenue for many operators. 




Though MEV seems to be becoming acceptable in some circles, when viewed through another lens, it can be argued that engaging in MEV violates the spirit of the agreement between validators and users. Validators are employing their access to insider information to game the system. From that perspective, MEV is an attack on the integrity of the system. (You can view a compilation of MEV attacks documented at [https://www.mev.wiki/attack\-examples](https://www.mev.wiki/attack-examples).)




From 2021 to 2022, the tools for engaging in MEV attacks have become commoditized on Ethereum, and the cumulative costs approach $700M taken from users.




![](https://lh6.googleusercontent.com/J6P-cUzicXGsCa6TyeCe8YmYykkYsOKnZpB5EQ1G6IvbG-rWc-b1JE98Blvhfz1yHsdA02I19Y34R8xSib4v1JKFNcqnPI42hgi5tqXFLY-9n2fFe7N6ZafPT4f-6-DUUByYx4D3tGR0UYn_SYhoX61inTYU8zl02joNeunR5oDsBq5N-3oZIKPJ)




Source: https://explore.flashbots.net/




MEV can be significant. In the early days of the Ethereum Post\-Merge, as the cost of consensus went down, the share of MEV became higher. In September 2022, post merge, the MEV would average $100K, per day, while earnings from subsidies was $2M and transaction fees roughly $700k. Though on certain days, there are worrisome outliers, on September 27th 2022, the total subsidies paid to operators was $2\.14M, while Tx Fees was $0\.67M and the MEV was $1\.5 M, that is 50% extra earnings over expected in\-protocol earnings. (see, [https://www.theblock.co/data/on\-chain\-metrics/ethereum](https://www.theblock.co/data/on-chain-metrics/ethereum)). 




In the long term there may be technical solutions to MEV attacks, such as the block producer and proposer separation seen in Ethereum (Flashbots MEV\-Boost Relay). There may also be solutions on the application layer for "tricking the bots" (see: [https://www.mev.wiki/attempts\-to\-trick\-the\-bots](https://www.mev.wiki/attempts-to-trick-the-bots)), and for fun see some applications' mousetraps: ([https://www.coindesk.com/tech/2021/03/22/bad\-sandwich\-defi\-trader\-poisons\-front\-running\-miners\-for\-250k\-profit/](https://www.coindesk.com/tech/2021/03/22/bad-sandwich-defi-trader-poisons-front-running-miners-for-250k-profit/))




#### *Governance*




Validator utility also includes the exercise of governance rights. Validators have outsized roles in governance (parameter changes, state machine upgrades). In fact, it may be said that validators hold the only "hard power" governance. Validators can always coordinate to apply a write to the database and that control over the protocol gives them de facto power to set policy. Most chains try to apply lower friction ways of other stakeholders changing policy, however ultimately the validator has the last say (or veto) on policies. Even if there are other governance mechanisms on\-chain, validators may in collusion reject such transactions which trigger an upgrade (more below on types of malicious behavior). Resolving this balance of power is not the topic of this paper; suffice to say that the validator can reasonably have a private valuation for this governance role.




## Cost of Consensus




Consensus is a shorthand for getting a database transaction approved, though there is some confusion in equating a consensus algorithm, and a sybil resistance mechanism. Usually when we refer to cost of consensus we mean both inputs. Proof of stake was an evolution in reducing the cost of preventing sybil attacks, in both reducing the hardware costs in preventing attacks from malicious actors.




### PoW Sybil resistance




Nakomoto consensus (invented for Bitcoin) relies on the longest chain principle, but it depends on Proof of Work (PoW) for sybil resistance. The longest chain principle helps in sequencing blocks of transactions, but not just anyone is allowed to do that. PoW as an identity mechanism says the block is proposed by the largest pool of CPU power. The more the CPU power of a pool, the more likely they get to propose the next block and hence, better rewards. As long as most CPU power rests with honest nodes, they outpace Byzantine actors by proposing more blocks. 




Over time, the demands for computing power kept rising from CPUs to GPUs to ASICs. As a result, the capital for infrastructure and the recurring cost of electricity resources kept growing, leading to increased costs for consensus (besides energy we have cost of capital). 




### What PoS solves and the Nothing\-at\-stake problem




Proof of Stake (PoS) addresses Sybil attacks using native tokens as a stake in the system in place of the capital requirements of the hardware. This approach significantly lowers the cost of sybil attack behavior compared to Nakomoto consensus plus PoW due to a drop in the cost of computation (since no proof of work puzzles need to be solved). 




However, this reduced cost could lead to nothing at stake problem wherein validators could behave arbitrarily (see, [Vitalik's original](https://blog.ethereum.org/2014/07/05/stake) description of the nothing at stake problem). In short: It's cheap for validators to create forks of the network, for example in a long range attack creating many plausible forks that in the future may be presented at the canonical fork. And for this reason, the earliest DPoS chains implemented high deposits and "slashing" when double\-signing was occurring. As we will see later, there has been debate as to whether the threat of the penalty has any effect, or if the value of the bond is actually the cost\-of\-capital of the parked coins, thus negating that there is really a nothing\-at\-stake issue.




DPoS can be applied to numerous consensus algorithms (including Nakamoto, though not plausibly). The most well known is Tendermint PBFT implementations (or derivatives of Cosmos Hub), but there are many others in the wild.




Our concern is narrower: How economic guarantees interacts specifically with PBFT and its derivatives.




### Profitability




If a network is profitable it will return value to coin holders. For this to happen, the revenue of the blockchain's products must be greater than the costs. That is, there can be no issuance of coins to fill the gap between what end\-users paid for services, and the different costs of goods sold (the validators). As of 2022, there has never been a reliably profitable blockchain.




Currently the infrastructure costs of most blockchains are equal to the cost of consensus (i.e, only nodes and miners are paid).  The true cost of consensus, as noted above, is not really technical or resource bound on post PoW chains; it’s the sum of the opportunity cost of validators. Validators have other means of using their time and compute resources to make money. Assuming a security guarantee of *S*, the validators have a cumulative opportunity cost of *C* (we don't assume these to be equal, or even necessarily correlated).




During bootstrapping of a network the relation between opportunity cost and issuance is indeterminate, since the network is discovering its value. In **steady state** however, the costs to the network should be the lowest possible (approaching the opportunity cost of node operators), such that the costs can be more readily covered with revenue. If the revenue cannot cover the cost of security, historically, chains have covered the shortfall by charging fees to account holders; those fees come in the form of dilution through issuance. Put another way, they pass through the costs to the account holders.




Chains can only provide security if the opportunity cost of a sufficiently non\-colluding validator set is being met. Chains can only cover those costs if they are solvent (they have revenue). The chains can finance the deficit with issuance, but this is also a tangle since it can only have value if it is long\-term solvent (by eventually having revenues greater or equal to security costs). Another way to think about it: Issuance is financing; it is only shifting the future revenues to the present validators.




### PBFT Further Lowers the Cost of Consensus




Proof of Stake is the dominant method of sybil resistance for PBFT chains. Proof of stake designs, however, predate implementation of PBFT consensus. The specifics of PBFT chains allow for different economic guarantees but, for historical reasons, those have not been fully explored. Moreover, there are some misunderstandings about the total security guarantee of PBFT chains in relation to economic costs.




### Background on PBFT




The Byzantine Generals problem was posed four decades ago in 1982\. The problem it addressed was how to reach a consensus among participants who might not necessarily trust each other and could have Byzantine failures. Reaching consensus facilitates state machine replication among distributed systems, where Byzantine failure is any arbitrary behavior, including intentional and unintentional behavior such as crash failures, collusion among participants, and software bugs. A solution to this problem is Byzantine fault\-tolerant (BFT) consensus algorithms, a family of consensus protocols for distributed systems that provide both safety (“bad things don’t happen”) and liveness (“good things do happen”) guarantees. 




The early BFT protocols assumed synchrony (i.e., synchronized clocks); that expectation can be challenging to obtain practically on the internet. PBFT is the first prominent practical solution to the Byzantine Generals problem. PBFT found its application in safety\-critical systems, such as aircraft and submarines, where hardware is complex and may become unreliable in unpredictable ways, sometimes in hostile environments. Over the past two decades, we observed numerous advances to PBFT protocols with advances in networking and cryptography. These advances have significantly improved performance, measured throughput (tx/sec), and latencies. 




Blockchains, where trust and security are critical, can leverage the underlying correctness guarantees of PBFT protocols. One downside, however, is that PBFT protocols assume a committee of participants and therefore can face Sybil attacks where a single participant has created multiple identities. To address this challenge, mechanism designs for establishing identity and economic incentives with guarantees from game theory are often necessary. One such mechanism widely used in blockchains is Proof of Stake, wherein anyone with native tokens in the system stakes their assets to become participants in the network. We've pointed out some of the issues with this sybil resistance approach, above.




History won't end with PBFT, there may be other consensus innovations in the future. For our purposes we assume that the technical cost of consensus (CPU, networking, disk) is a domain of computer science and that the lowest hanging fruit has already been plucked, absent a major breakthrough in the Byzantine Generals Problem. 




### Walking the graph: The Disconnect Between Security and Cost




Let us consider the common threat scenarios, relative to PBFT:




1. Malicious transactions : Impossible unless signed by the user. One cannot append malicious transactions even if they have a majority. State machine replication would not let this happen and is guaranteed by cryptography.
2. Reverse/delete blocks after finality: Leads to another fork, means abandoning the current chain. For that fork to continue it requires a  2/3rd majority on each block of the new fork.
3. Malicious writes: Requires 2/3rd of nodes to approve a forced malicious write. This also requires coordinated action among the malicious validators and cannot happen with state machine replication.




Empirically from approximately four years of PBFT permissionless networks in the wild, there is scant evidence of malicious writes to a database. One possible explanation for this may be the fact that chains are built by "walking" from a trusted root. All known blockchains using PBFT require starting up from a "genesis set". And usually this involves participating in a community (usually a company) and developing offline reputation. In few such networks are the validators anonymous.




Moreover, in PBFT there are games outside of consensus that increase the cost to authenticate (create reputation), such that amplification of attacks from performant malicious nodes becomes more costly. Systems can add other costs which then work in concert to create unsustainable costs for the attacker. There are a broad range of experiments in this area related to reputation, validator set accession, and disincentives for malicious behavior.




Mitigating attacks is not obviously mapped to economic costs. And economic costs will not exclusively deal with those attacks. Any analysis of cost paid for security versus the estimated dollar value of a safe transaction to send, are hampered by the noise of the effects of the reputation layer, which is very varied in the field.




Reputation and validator admission are high hurdles in PBFT chains, which is very different from Nakamoto consensus (which assumes no trusted root). But given that many of the security guarantees are arguable coming from "walking the graph", it seems that there may be optimizations in reducing the overpayment.  




The validators must receive a payment for their services. The challenge for all token holders is determining what is the correct fee to pay operators given that a) validator opportunity cost is extrinsic to chain b) the validators preferences (utility) is private.




If blockchains underpay, trust from the users goes down as fewer nodes participate. As a result, the security guarantees for halts and writes go down, and the subjective political neutrality of the chain is lowered. While perhaps a reasonable but imperfect assumption, that more payment always increases security, the designers of blockchain economics usually err on the side of overpaying for consensus.





```
This is the end of Part 1. [In Part 2](http://openlibra.blog/2022/10/20/proof-of-fee-part-2-a-proposal/), we will explore the mechanics and implementations of an alternative approach, Proof of Fee.
```
