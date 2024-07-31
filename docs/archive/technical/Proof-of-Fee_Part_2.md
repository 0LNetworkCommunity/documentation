

```
In [Part 1 of this paper](http://openlibra.blog/2022/10/15/proof-of-fee-part-1/) we laid the foundations for Proof of Fee. Some of the ideas expressed there may be different from what you have seen elsewhere, and we do urge you to read that before you begin here. In Part 2 of this paper, below, we get into the mechanics and implementation details of Proof-of-Fee (PoF).
```



From empirical evidence over the last five years, we have seen few malicious attacks by validators; clearly something is working. We don't want to break something that is working. What we want to evaluate is whether we can make it sustainably work at a lower cost.




## Gaming it out




In part 1, we concluded that estimating the security of the network in monetary terms is not directly correlated to the financial costs of stakes. PBFT as a consensus algorithm has compelling built\-in security properties. Plus, launching a PBFT network necessarily starts from a root of trust, and this can be reinforced by validator admission policies that reduce likelihood of Sybil attacks.




The central question is this: How is a large bond staked by a diverse group of agents contributing to security? Is it really necessary?




Before we can evaluate how the high bonding works on PBFT, we should define which actors can be Byzantine. Are we trying to be safe from the everyman who goes rogue, or a madman? The deterrence strategies you would apply in those two situations are not the same.




If you goal is educating the initially honest validators on what is expected, then we would argue that swift and sure penalties are much more important than highly severe but rare penalties. When it comes to madmen, however, economic guarantees are marginal at best.




### Deterrence is in the mind




Swift and sure penalties train actors in cause and effect and teach what is expected. A quick time\-out is a much better training method for wayward children than a rare but severe strapping.  In theory, high stakes penalties for unlikely events are a way of achieving compliant behavior without having to wait for the parties to learn (by way of experiencing the penalties) but they work mostly through perceptions and may easily backfire. The rare strapping, for example, may teach the child that punishment is random and parents are not to be trusted. 




Similarly, capital punishment is a pyschological game, not a device meant to train someone across a series of events. Moreover, for something as extreme as capital punishment to work well, it needs to be placed within a context of other swift and sure penalties. That is, the credibility of maximal punishment also depends on consistency. Catch people for spray painting graffiti and others may be deterred from more serious crimes, but let graffiti take over and all punishment will come to be doubted no matter the crime.




Punishments for unlikely events work within a context of swift and sure penalties for smaller events mostly by preventing good agents from "breaking bad". Normal people learn what is expected and don’t doubt that big deviations will be punished.




Severe penalties don’t necessarily deter people that don't evaluate the punishment in the same way (e.g., the mentally ill, the North Korean nuclear program), or engage in a repeated game with the state where the punishment is not dispensed (e.g., serial killers, organized crime, Iranian nuclear program). Policy designers may assume incorrectly that the only way to handle these situations is to ratchet rare punishments yet higher. Applying maximal punishment out of the context of learning may seem rational to deter a madman, but to the everyman it is terror and leads to distrust and learned helplessness. 




What does this mean for blockchain? 




An attack by a sophisticated and resourced or irrational malicious actor is not going to be deterred by high bonding. In practice, slashing is never complete because of the fear this creates in normal, and normally good, actors. As implemented in Tendermint, for example, a defector does not lose their entire stake in a single "slashing" event commensurate with the damage done because that would drive out good actors. Moreover, a well\-resourced attacker knows this, and isn't particularly deterred (and in fact could subsidize a one\-time attack with winnings along the way). The solution, however, isn’t to slash more.




There are always madmen that want to see the world burn; economic guarantees are not effective against them. The only thing that deters the madman, at any price, is the validator admission policy, as we describe below. Modest, swift, and sure penalties will achieve what can be achieved and at lower cost than “capital punishment” style slashing. We should leverage this in our favor to secure PBFT blockchains, at the appropriate cost.




### A town of robbers is no town at all




There's another argument often advanced for high bonds: Humans are not inherently honest ergo, we should assume people on the internet are out to rob the chain. This may be a perfectly reasonable philosophy but, in the specific case of PBFT, it's unlikely to be destabilizing.




Silvio Micali has a thought experiment; it goes like this: Why would anyone move into a neighborhood or town where the vast majority of people were thieves? Certainly no good actor. In fact, not even the robbers would want to live there! These are places that, by definition, cannot exist. This is called the "honesty assumption" of PBFT and PBFT algorithm provides a guarantee. If you want to reorganize the already committed blocks, you'll need ⅔rds of the validator set to go along with it. Certainly it's possible that ⅔rds of the validator set could act against the will of one party or the entirety of the accounts on chain, but it begs two questions: (1\) How does a network even arrive to the point of having ⅔ malicious actions? and (2\) Are we sure an honest community can't recover from this?




Since PBFT networks start from a root of trust and continue to reinforce the norms of behavior, it seems that the deterrent to this problem is not economic, but rather in the validator credentialing process. The ways this is implemented are diverse. We’ve seen multiple approaches, from a foundation or a company signing contracts (with testnet winners), or a decentralized vouching from the existing validators, or coin voting for validator admission.




Moreover, there is also a way for account holders to recover: They can fork the validators out. Forking is another deterrent to a cabal of malicious agents. If you reorg the blocks against the will of the account holders by creating a fork, it may be trivial for the account holders to continue from where the fork branched off, with a new validator set. This is considered "weak subjectivity", and informal in the eyes of certain blockchain designers, but it doesn't prevent it from being a real deterrent, since it only needs to exist in the mind of the malicious actor. All that effort by the madman will be for naught. (To be clear this property doesn't neatly generalize to all blockchain consensus algorithms).




### Cartels are unstable




Lastly, advocates of high bonding rates might say it's trivial to turn good actors bad – you can just bribe people to join a cartel. However, that argument fails to consider that bad agents also face challenges. Coordination in adversarial space is a hard problem and this also applies to malicious agents attempting to form a cartel. 




Cartels are not monopolists, though they try to achieve the maximum profit as if they were one. The trouble with cartels is that the dominant strategy of the cartel member is to cheat, not only once, but repeatedly. One defector from the cartel can reap the rewards of the monopoly price at a cost to other cartel members (not the consumer). And cheating in the repeated game quickly destabilizes the cartel. Plus, if your cartel operates outside the law or norms, is there any reason to expect a cartel member to respect the cartel's agreement? We know this from the behavior of other malicious cartels (think: drugs, mafia), which are rarely stable. The stable cartels that come to mind are those rare exceptions supported by governments (think: OPEC, American Medical Association).




So, if you are planning a long range attack on a blockchain, you'd better be sure that you are the monopolist and that you control all the nodes, otherwise you will be left holding the bag. This is a very expensive proposition, and likely loss\-making. The cartel argument is a distraction; though one\-time colluding attacks in PBFT can happen at a cost and uncertainty to the participants, sustaining collusion is another matter.




## Proof of Fee: Auctioning Consensus Seats




Given what we've seen above, a lot of the deterrence is already baked into the nature of the PBFT game and that deterrence is largely independent of the price. The madman attack is taken care of by admission controls, not economics. The cartel scenario is a red\-herring. The economic guarantees seem to only be needed to keep honest people… honest. 




So our provocation is this: What's the optimal price for the *social surplus*, so that everyone wins?




Proof of fee (PoF) is based on a premise: Let’s create equivalents of the bonding, staking, and slashing process by simply charging the equivalent cost of capital through an admission fee.




### Problem Definition




The PoF protocol assumes that all revenues to the chain belong to all the token holders. As such, transaction fees are not a property right of the operators (validators). We assume that blockchains intend to be self\-sufficient (or better), where sufficient revenues exist to pay for the consensus costs. As discussed in Part 1, because future blockspace is likely to become abundant (due to engineering advances), the blockchain must either develop other revenue streams besides blockspace, or become more cost efficient. For the cost\-conscious token holders, the key question is: For a given level of security, how much do token holders have to pay to validators?




### First Approach: A Reverse Auction




On all blockchains, nodes are competing in an auction of compute power. What if we turned the usual blockchain auction upside down?




Our first attempt at a delegation\-less and stake\-free economic system is a [reverse auction](https://en.wikipedia.org/wiki/Reverse_auction). Reverse auctions are also called procurement auctions, such that an enterprise has their orders for materials delivered at the lowest cost. In our case, the enterprise is the blockchain and the provider is the validator node.




One could set up an auction as follows: At the start of an upcoming epoch (period of blocks) a node which is selling compute power (to the blockchain for consensus) states the minimum reward they are willing to receive for the services at the end of the epoch. The X number nodes with lowest bids get admitted to the validator set.




The reverse auction model is attractive, namely for its simplicity. Alas, however, it is too simple. Simply agreeing to take a low fee, and subsequently being allowed to enter the validator set is not sufficient in permissionless and adversarial environments. We would really be pushing the limits on the guarantees of PBFT, since we really have the nothing\-at\-stake problem in this design.




The limitation of the above design is that there is no actual cost to enter the agreement with the blockchain. In such a simple reverse auction, the validator can bid a low fee but never deliver on services. In a group of carefully vetted operators, this would be fine. But in an adversarial scenario, or a scenario where the abilities of the validators are indeterminate (amateurs), there should be a real cost to non\-performance.  We can imagine ways in which a madman might wreak havoc in a number of ways (a "split brain" attack for instance). But as we said above, preventing this belongs in the domain of the validator credentialing. The real threat is operator incompetence. Suppose a validator bids the maximal amount, and simply forgets to start the machine at the right time. This hurts the network in a meaningful way, it will slow down and ultimately halt, and at no cost to the validator. The risks are asymmetric, and leads to a type of prisoner's dilemma game. Empirically this has been the greatest threat to PBFT networks: Amateurism. 




### Pricing Carelessness With A Forward Auction




In almost all markets there are entry fees, some are explicit, and some are implicit. In Bitcoin, there is a hardware capital cost. In DPoS, there is a bond. How else can we charge an entry fee?




As a reverse auction is not ideal, we'll need to go back to an ordinary (forward) auction, where the blockchain is selling consensus seats. In this case, the validators need to know what they are bidding on, and know what the cost of non\-performance is. 




The design is equally simple: The blockchain must determine the baseline reward it is willing to offer validators for the epoch, and validators pay to gain admission.




As an example, suppose the blockchain offers 10 coins per validator every epoch and suppose that the validator is profitable at 4 coins to validate (with 4 being the real dollar cost evaluated in coins at current dollar\-coin exchange rates). Validators, functioning as bidders, would then bid on the seats in consensus, e.g. pay in advance up to 6 coins, for the benefit of winning 10, and thus netting 4 coins. This is functionally equivalent to the reverse auction where the validator would bid 4 coins. The difference is that the node is bonded within the epoch. The payment to get a validator seat is final. So if the validator does not perform, their admission fee is lost and they lose 6 coins. Thus, this auction format is the equivalent in DPoS of "slashing" a part of the bond.




The bond may seem low, but remember our thesis: We are only trying to keep honest actors from turning bad, and also not encourage careless operators with asymmetric risks. 




The disadvantage of this model is that the blockchain must set the baseline reward wisely (10 coins in the above example). If the baseline is set very wrong, it can create an uncompetitive auction. We discuss this issue further below.




### Thermostatic Baseline Price




How can the baseline price stay within a range in which the bidders are motivated to participate, given the external market conditions? If one sets the baseline too high and not enough biders show up, the network may dilute or exhaust their reward subsidies. If the baseline becomes too low, then no bidders show up.




Suppose the baseline reward to validators is set too low, given extrinsic market conditions. Such a situation does not create a large implicit bond, and thus does not create an effective deterrent. For example, suppose that instead of setting the baseline reward at 10 in the above example, the reward was set to 5\. Now validators will bid up to 1 for the right to earn 5 but this means that a validator that fails to validate loses only 1\. Worse yet if the baseline reward falls to less than 4 then eventually no validators show up. To solve for this, a “thermostatic” solution could be applied: as in home heating devices, the heat increases or decreases by a certain amount to target a given temperature. 




Let’s look at an example. Let the baseline reward be BR and the cost of validation C then validators will bid up to BR\-C to enter the validation set. To simplify notation we can assume that C contains an opportunity cost of capital so that if bidders are paid C they are earning a normal profit. In this case, in a competitive market, bids will rise until Bid\=BR\-C. (Recall from the previous example that BR was 10, C was 4 and bids rose to 6\). The bid is also the equivalent bond since it is the bid which may be lost by failing to validate. Now from this perspective, there is an easy solution to setting the baseline reward: Set it absurdly high, say 1000\. In this case bids will rise to 996 and validators will be extremely careful never to fail to validate since the bond is 996\. The problem with this simple solution is that the higher the bond the greater the rewards to collusion and the more risk is imposed on validators. The competitive price in this scenario is 996 but even minimal collusion that brought the price down to say 900 would create very large profits and thus this model is asking for collusion. Even without collusion there may arise a situation where, for accidental or unusual reasons, there are only a handful of bidders who bid say 900 or less and thus they win the rights to earn 1000 for a pittance. In addition, a very high bid/bond means that an error on the part of the validators (“trembling hands”) subjects them to large losses. Risk aversion may then dissuade bidders from bidding which in turn could make collusion easier. High fees could thus potentially put the network at risk. Low fees, however, result in too few bidders as we noted above.




Thus, the protocol must target a bid (BR\-C) which is large enough to promote good and careful behavior on the part of the validators but also small enough to not induce collusion and to withstand “trembling hands,” i.e. small errors in competitive behavior or execution. Fortunately, there is a very large range under which these conditions are satisfied. Thus, the targeting need not be precise.




Essentially we want the bid to be large enough so that poor performance hurts but not so large as to deter bidders for fear of losing the bond nor so large as to encourage collusion. It’s likely that a bond greater than 2C would be enough which would mean BR\-C\>2C or BR\>3C and BR\>5C would be plenty so we would target a baseline reward (BR) at 3 to 5 times validator costs. Costs (including opportunity costs) don’t vary much over time so this could be set slowly. 




There are a few ways this could be implemented. Some blockchains may find it acceptable to set this manually through governance (one or two times a year), though this just creates another issue to quarrel about. It's possible an oracle could be used to target an extrinsic price signal, i.e. the dollar price of the reward. Though we would prefer on\-chain algorithms.




A simple algorithm could be implemented that when the bids are persistently near 100% or 0% of the reward then the baseline may increase or decrease by N coins in the following epoch. Alternatively, something more straightforward may be possible: Target BR so that the number of bidders relative to the validator set is always large and well above the validator set. That is, BR would rise as the number of bidders fell and fall as the number of bidders rose. Again, the precision does not matter, so long as BR doesn't fall out of range for a prolonged period of time.




Note again, that because the bidders will bid more when the BR rises there is little to no danger in a large BR so long as there are many bidders and we avoid situations where BR is so high that the network cannot afford accidental large payments.




The numbers, above, are illustrations. The actual numbers would need to be experimentally tested and paired with thermostatic adjustments to properly tune the design space.




## Implementation Details




### Limited Validator Set Rotation




The auction should not be used to replace the entirety of the seats in the validator set. For example, if there are 21 seats available, and there are 100 candidates for the seats, it wouldn't be prudent to allow all the 21 seats to be replaced by highest bidders from the 100 candidates. 




Theoretically, the problem here is that a sufficiently well funded adversary, with no experience (or perhaps even the hardware) could completely halt the network simply by creating accounts and funding them. While we think madmen scenarios are unlikely, this would just be an invitation to them. 




As we discussed above, operator error is the most common threat, (ou may have ⅓ of the nodes that simply were not ready, or were hit by a data center outage, or failed to upgrade, or were asleep, etc.). This problem also exists in PoS blockchains, and the most common solution to this as observed in the field is to limit the validator rotation 




In practice this means limiting the amount of turnover between one epoch and the next for exactly this reason. In PoF, we would have to accommodate for this as well. For example, no more than ⅓ of the new incoming validators can be of unknown "readiness". (Practically, it should be a lower number than one third to accommodate for 2f\+1 errors where you might be putting your network really at the borderline of forming consensus. So perhaps ¼ is better.)




Fortunately the solution is straightforward for PoF: Rank the maximum bidders of outgoing and prospective sets, and drop the bottom ⅓ validators from outgoing set to open up for the prospects. 




Assuming epoch E1 and E2, and a prospective validator universe P, which is a set of all bidding validator candidates, and the respective epoch validators V1 and V2\. We first fill the two\-thirds of cardinality of V2, i.e,  ⅔ \* V2, with *the* highest bids of V1, called continuing, denoted by C. Then we fill the set of (V2\-C) with the ranked bids of P excluding C the continuing validators. 




This way the union is always maximizing for the highest bidders, and not endangering the network for halts by operator unpreparedness.




Readers might ask, why not take the most reliable validators by some metric, and then auction off the remaining ⅓ of the seats? This leads to a couple problems:




1. You're introducing a vector for gaming. A validator that is consistently the best performing will rationally bid zero. And as such this opens a Sybil issue and malicious behavior can be rewarded. Moreover, the auction is not maximizing revenue.
2. More importantly, we don't have reliable metrics to use on\-chain for this. We only really know who signed and who proposed the previous block at any time. If we create a target threshold from either of these points, we introduce other undesirable properties of a network that should be plausibly neutral. In PBFT there's one artifact of networking which would cause the validators that are in the nearest datacenters (by network ping) to propagate their proposals and votes faster. Thus, to rely solely on the ratio of signatures or proposals creates a race to centralization.




### The Seats Should Be Uniform




The product of the auction matters: Is it auctioning consensus power, or consensus seats of the same power?




The mechanism described above is notionally for multiple units of the same product: Seats in consensus. However, BFT consensus has another feature which is voting weights, or consensus power. Every block requires a quorum to be committed where quorum is two\-thirds of total voting weight. A validator selection process needs to also address the weight of each vote in reaching consensus. In DPoS systems, stakers have their  "consensus weight" determined by the amount staked. The implication of a higher consensus weight is that the nodes are able to cast more "votes" on a block, and thus have an outsized role in consensus. Layered on top of that may be an economic reward for proposers (for example, the proposer bonus in Cosmos Hub).




In having different weights, especially when there is huge deviation, consensus would be reached faster by reaching a quorum with lesser participants. For instance, some PoS networks have 100\+ validators but only the top 5 make the quorum. 




Our current opinion is that all seats should be treated equally. Most BFT academic work, and deployment pre\-blockchain, assume equal weights. Recent derivations, such as HotStuff, Narwhal, and BlockSTM, talk in terms of equal weight in their published academic work. It was with Tendermint and DPoS that the concept of weighting gained prominence (possibly because of an assumption that it would optimize the auction for seats by stake, which may not bear out).




We think that variable votes in consensus removes one of the important sybil resistance properties of the "madman" attack described above. That said there may be a reason a blockchain wishes to give greater weight to different nodes. 




Through entry fees, a node could be assigned relative weights depending on the price that they bid. That is, the nodes which forgo the most payment will have higher chances of qualifying for liveness. Conversely, the nodes whose hardware and operation constantly perform the highest, will likely be able to charge higher fees, since they are not at risk of being below threshold. Auctioning a “liveness bonus”, so to speak, is a price signal, and there may be legitimate reasons why validators are needing to get a bonus (their nodes are harder to reach). 




Future research should decide if there is a meaningful optimization in having variable votes per seat, without compromising the security. Note variable votes per seat has important consequences for the auction mechanism (more detail below).




### Auction Formats




There are multiple auction formats that should be discussed. There's a risk in getting side\-tracked in a discussion on auction mechanisms, but fundamentally, the big picture is simple: There's no auction mechanism that can correct for the absence of bidders. Ensuring an ample supply of bidders that always exceeds the number of validator slots is of first order importance. 




The auctioneer maximizes revenue mainly by having better products. And if the product can’t be improved, the auction increases revenue by adding another  marginal bidder. This needs to be highlighted: **Everyone’s effort is best spent on making a better product**. The only job of the auction designer is to eliminate the worst auctions, and then pick the auction that is easiest to understand by the bidder, and appears fair. This will increase the amount of bidders, and thus revenue.




In terms of picking the auction, the designer needs to  prioritize certain features, as these decisions will impact your choice of auction format and configuration. Key issues impacting that choice are: 




* Whether to optimize for revenue of the chain?
* Should validators bid their true expected utility?
* Are seats uniform?
* What level of privacy is desired?
* Do we expect collusion from bidders?




The principal decision to be made is whether the product is "votes" in consensus or seats which are all equal. Above, we recommend seats with the same consensus weight, but we will give some notes below for the auction for votes scenario.




#### *If All Seats Are Equal*




The most important optimization as we say above is that the auction has to invite the most bidders, that is: It needs to be low friction, not require much analysis, and generally feel fair.




##### Vickrey\-Clarke\-Groves




The main constraint on the auction design is whether private bidding is possible. A sealed bid, (implemented with commit\-reveal) may be possible, but is likely impractical for the workflows of operators. Assuming this was an acceptable position, we could make use of incentive\-compatible Vickrey\-Clarke\-Groves auctions. There's a lot to be said about VCG auctions and their ability to surface bidder preferences in a truthful manner. In blockchain applications, however, this has been impractical, so we need to consider open auction formats.




##### Open Nth\-Price Auctions




The simplest and most common auction type is a *first price auction*. Despite known tradeoffs Blockchains implement first prices often, and they seem reliable in adversarial environments. First price auctions can be conducted in the open. Bitcoin uses first price for transaction ordering. A [Generalized First Price Auction](https://en.wikipedia.org/wiki/Generalized_first-price_auction) has been historically used in online environments (ads), also for positional ordering, but it is difficult for bidders to discover optimal strategies and for these reasons is susceptible to manipulation (reducing revenue to auctioneer) based on its non\-truthful properties.




A [Generalized Second Price Auction](https://en.wikipedia.org/wiki/Generalized_second-price_auction) (also a variation of a Vickrey Auction), seems similar to a Vickrey auction but is misnamed since the truthful properties of bidding are not always preserved in GSP. (VCG is the true generalized second price auction.) For similar reasons, the bidder has to work on figuring out where they are placed with other validators. In practice, it works reasonably well, however, and revenues are typically as high as in VCG.




##### Uniform price auctions




We recommend a single price auction for the case of uniform seats. ([Also called treasury auctions,](https://en.wikipedia.org/wiki/Single-price_auction) since this format is used in U.S. Treasury market operations.) The last ranked qualifying bid sets the price for all validators.




This may be counter intuitive, but even though everyone pays the *lowest* accepted bid the revenue to the auctioneer has been demonstrated to be similar to other auction formats such as the first price format in which everyone pays their own bid. In essence, under first price people shade their bids down but in a uniform auction bids are higher and it works out that on average revenues are the same. The major advantage of uniform\-price auctions is that it's easier for the bidders to know what to do: They can bid their true preferences since they will never overpay. Gaming may not be worth the effort. It's an elegant solution, and very easily applied to blockchain contexts, though it would require that all seats have the same properties.




Uniform price auctions are usually done as a sealed\-bid, however it appears that open auctions with repeat bidding, with bids that cannot be retracted (lowered), will approximate the revenue of sealed bids. A reserve price also helps prevent non\-truthful bidding.




#### *If Selling Votes in Consensus*




In the case of auctioning variable votes in consensus we have multiple units of the product, and the bidder can buy multiple ones. Typically a [sealed multiunit auction](https://en.wikipedia.org/wiki/Multiunit_auction) would be recommended. Though we have the same privacy issues described above for VCG. The multi\-unit auction and single price auctions have a winner take all problem, where one bidder can take all the votes available in consensus in a single bid: if you know the highest price you can outbid and take all  votes available.




Given these issues we should consider nth\-price auctions. A generalized first price auction (described above) would be the alternative to experiment with. This format gives the bidder the value that they were willing to pay. It is also practical for blockchain environments and can be played openly, but not perfectly susceptible to collusion with a limited amount of bidders.  If they were to pay a lower price than what they bid (as in a second price auction), the incentive is to vote only above the remaining votes, possibly shading the bid. 




### Negative Fees




Negative fees are possible, and might be allowed in PoF since they are a relevant price signal. As described above, if bidders are consistently on average bidding 100% of the reward, this means that the reward is low, and we might be losing validators because we are not paying the opportunity cost. If 100% was the limit, it would be hard to discover how much we are underpaying. That is, it might take longer for a thermostatic mechanism to adjust. Said differently: Thermostatic baseline pricing allows for negative fee price signaling.




Negative fees should be avoided if there is no thermostatic adjustment, due to the risk of making validators compete on MEV frontrunning. Validators may engage in frontrunning, and as such should pay for it – PoF allows for this. It becomes something of a detractor for those who try to gain an edge with MEV. 




In another situation, it’s conceivable that MEV might become widespread, and negative fees would force validators who are not engaging in front running to do so in order to remain competitive. PoF is not a solution to MEV; this will eventually be resolved through engineering advances in transaction inclusion design (e.g. proposer and validator separation). Until this gets solved, the blockchain can monetize some of the MEV.




If negative fees are permitted, there must be lower bounds, even though negative fees means more revenue for coin holders until the thermostatic adjustment kicks in. Without limits, it would be trivial for a sufficiently funded Byzantine adversary to take all the seats (or consensus power depending on auction) in a given epoch.




## Discussion




### Ergonomics




The greatest benefit of PoF is that it is simple. Every actor has a very simple instruction on what to do:




* Holders: Just hold. You are losing nothing by being passive.
* Validators: Bid what it's worth to you.
* Apps: Developers can develop scenarios where the coin is used in the app, or held, without risking its loss of value from dilution.




There are no secret handshakes, it doesn't require being able to become connected to capital to fund your stake. Historical DPoS networks have started by using a company or foundation sponsoring the initial stakes of validators (and this is often hidden information). PoF removes this out\-of\-band game. It not only provides an open opportunity to prospective validators, it's optimal for the network: The validators must compete on price, and not pre\-existing business relationships.




### Bonding




The greatest question about PoF is if it is safe. Put differently, is the inter\-epoch bond (the entry fee) a sufficient deterrent. 




In DPOS systems, very large bonds are placed to disincentivize, via the cost of capital of the parked coins combined with the threat of slashing. These costs appear to work. But to what extent is the cost too high? The bond and expense of a validator in DPOS is measured in the collateral and the expense of the cost of capital during the epoch. This cost can be orders of magnitude greater than the profit of the validator during the epoch.




The trap is that, in DPOS, the answer to the question of how much of a bond is needed is usually "more". Modeling this is an exercise fraught with assumptions. Above we argue that the baseline "'honesty assumptions" of BFT and the empirical evidence show that slashing large stakes is not needed. Notably, Avalanche blockchain is a Proof\-of\-Stake network without slashing.




PoF has no slashing except for losing the bid, which is effectively a bond. The question PoF asks is whether that bond needs to be 1,000X the profit, or if by slashing smaller stakes (i.e. the bid) repeatedly, if need be, we will have the same deterrence on less\-than\-competent validators.




### Delegation




A notable feature of Proof of Fee is that there is no delegation. Delegation in POS proposes to solve two issues: (1\) how to distribute rewards broadly, and (2\) how to have economic agents participate in validator selection.




#### *Less investor rent\-seeking*




We assume with DPOS that all rewards are distributed to the "stakers" of the validator, and that a marginal fee (usually around 3\-5%) is paid to the validator's operator. Historically, this means the initial stakes are set up by investors from conventional venture capital or, until about 2019, "retail" market ICOs. As we stated earlier, there are social effects to having this investor class receiving rents from future depositors.




In PoF, the principal property is that all coin holders are effectively stakers of the entire validator set. This is because PoF removes delegation and the investor class. While there are opportunities for capitalists in PoF, such as financing entry fees, this operates much more like a type of receivables financing rather than a preferred shares early investor financing. There could be no broader distribution of excess rewards. So, while PoF welcomes capitalist financing, it does not depend on it to get off the ground, and doesn't promise rents into perpetuity above and beyond what other coin holders receive. 




#### *Participation in Validator Selection*




Validator selection is an issue on PBFT chains. PoF and DPOS have similar issues when there is no mechanism for selecting validators beyond economics, i.e. the party with the most economic budget can join the validator set.




A PBFT network is born from a group of validators, and the social norms of those validators propagate to subsequent participants. In contrast, PoF leaves the question of validator selection open, allowing for variations of delegation to exist, for example:




* On\-chain or off\-chain vouching mechanisms for validators will be desired by most communities.
* Delegation, whereby validators may receive loans from different agents to pay for entry fees.
* A community may even be willing to risk adversarial nodes (e.g. MEV) in consensus for a while. We would expect that such behavior would quickly cease to be attractive as participants are outbid by honest agents.




The DPOS hypothesis is that the holders of coins are good estimators of validator "quality" for the network. This is actually a public goods provision problem: A free rider problem. Estimating the abilities and usefulness of a validator is valuable to the network, but someone must pay for it, and neither end\-user nor validator has the incentive to pay to create that information. 




The DPOS hypothesis is that staking is a good heuristic. The trouble is that the game forces operators to have a distributed group of economic agents wager on which validator they should be a party to. Empirically, this leads to a race from operators to offer "rebates" and negative commissions to users. Additionally, in practice, many stakers are in fact passive and allow their virtual asset service provider (i.e. Coinbase, Binance, etc.) to choose the destination of the delegation (usually their own nodes). On the part of the account holder, this is a perfectly rational decision in response to asymmetric information about the blockchain's condition. It's not entirely obvious that there is a high signal from the stakers on validator selection. Do we really know if we are picking the best, most performant and honest validator set? There are commentators in the field that say that the opposite often happens.




#### *Delegation increases Costs*




Our hypothesis is that the cost of consensus is not only higher on non\-staked depositors in DPOS, but also it is higher globally. That is, for the transaction fees of the chain to adequately cover the security budget of consensus, the fees need to be sufficient to cover the opportunity costs of not only the operator, but also of the stakers. 




This means that higher transaction fees are needed than in the absence of delegation, and this picture is further complicated when issuance is needed to supplant that deficit in transaction fees. Non\-staked coin holders are disadvantaged by this design.




### Law




A final point to mention here is regulatory profile. This topic is of increasing relevance to actors in this sector and DPoS needs to be considered in light of what is known. There's a long discussion to be had on whether regulatory issues are outside of protocol or not, that is, should regulators be considered agents in your game and is regulation an attack vector. Regardless of your views on that, DPoS clearly has a heightened regulatory profile due to the presence of various approaches to pooling, lending, and equity that variations of DPoS apply. Proof of Fee and its cost to enter the service market is more distinct, in that it does not rely on overt capital pooling mechanisms.




## Conclusion




The PoF design is upside\-down from mainstream blockchains: Usually the protocol determines the price that is right for each validator, and the validator can choose to enter the validator set. As such it needs to make assumptions about private information of the validator, and so the validator is left with a binary choice: Take it or leave it. Over the very long term this may approximate opportunity cost, but with the practice of most blockchains heavily weighting rewards to early participants, the blockchain usually errs on the side of overpaying for security. In PoF, the onus is on the validator to reveal the correct price of consensus.




The above proposal starts with the assumption that PBFT networks are theoretically resilient before economic guarantees are applied: They a) have a high bar for transaction reordering which is easily caught with cryptography, and b) walk a trusted graph of nodes from the genesis. As such those chains have a higher safety profile than Nakamoto consensus for many theoretical threats. As for economic guarantees, DPOS on PBFT is cheaper than PoW with Nakamoto consensus.




With PoF we may be able to make PBFT even more cost effective for the chain, by safely removing delegation, which adds costs and taxes the less\-informed and the accounts that are otherwise restricted from staking. If anything, our conclusion is that DPoS may be a local maximum, and there is still further experimentation to be made on economic guarantees for PBFT consensus.




Proof of Fee, with its emphasis on reducing the cost of security to a market\-driven minimum, provides a new mechanism for blockchains concerned with building sustainable business models and for those concerned with maintaining greater equity among the participants in their ecosystem. We think this is a first step to creating networks that the mainstream population actually want to belong to.


