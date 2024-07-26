## TL;DR


Incentives are hard. There are many different stakeholders in a healthy economy and the needs of those stakeholders can be a moving target. Advanced mechanisms are employed to address the trade\-off between clear rules and adaptive capacity. Polycentric programs with community wallets provide a means of voluntarily contributing to capex, while thermostatic security dynamically rebalances validator rewards based on validator count in order to manage opex. Furthermore, incentive alignment between network operators and end users is enhanced via two mechanisms: i) the introduction of slow wallets for validators which rate limit the availability to spend their rewards and ii) the introduction of an identity subsidy whereby end users may submit proofs of elapsed time to establish persistent identities and earn rewards (which do not have spending rate limits).


Part II discussed some principles and constraints of core protocol blockchain economic design. What follows is a discussion on what might reasonably be achieved at bootstrapping given the considerations outlined in the previous part of this article.


One caveat, we don't claim that these mechanisms are all necessarily stable or appropriate in steady\-state, but that they are useful bootstrapping tools. The working assumption is that a viable network at maturity can articulate a transition to other economic guarantees.


### Polycentric Programs


A successful network needs builders, not just on day\-one but throughout the life of an evolving, growing, improving network. The time and effort of builders has an opportunity cost and so must be rewarded. A network, however, is unowned which makes it challenging to provide to the builders appropriate incentives that are binding and results oriented.


Not every holder of the initial token supply is a builder. Similarly, not every builder is in a position to benefit the network indirectly, i.e. with cash. In ordinary startups this isn’t a problem as the liquid investors \- the capitalists \- pay for the services of the illiquid builders. In the case of a network, a similar process could work if the builders hold tokens that are sold to investors, but there are obvious and notorious regulatory issues with this approach.


There is also a free rider problem. Since the network is unowned, each builder stands to gain from the investments of the other builders and may have an incentive to free ride, i.e. hold their own tokens letting others sell their tokens and make the necessary investments. The problem becomes worse as more people accumulate tokens.


A complete solution to both the free rider problem and the funding of public goods in a market setting is unsolved;solving it algorithmically only [compounds the problem](https://kelsienabben.substack.com/p/algorithms-as-policy). Funding what rides the rails is a human activity. Algorithmically picking the correct moonshot application and the team to execute is an AI\-complete problem. As such, there are many attempts to scale up this decision making that ultimately are doomed by the meta\-game.


"The DAO" was the early example of a venture fund for "pirate equity" on the Ethereum chain. The story of the colossal hack is only remarkable, because it brought the designers of The DAO to the attention of regulators, which used it as the case\-study for the [SEC's shot across the bow at protocol developers](https://www.sec.gov/litigation/investreport/34-81207.pdf). Variations on this are to be avoided if your protocol is to have a moat against such "nation state attacks". Regulators haven't commented on funding protocol treasuries from pre\-mines, founder rewards, and network taxes, but these mechanisms are likely too close for the comfort of many, especially the next generation of protocol builders who have yet to wade into the waters. Given the uncertainty and the potential downsides, most people will want a bigger moat.


So what are the enlightened self interested security guards of the early blockchains to do? Donations to programs run by individuals, businesses, or foundations are straight\-forward. Soliciting contributions to do work on open\-source projects is the bread\-and\-butter of many developers. As described previously, expecting early miners to do this post hoc is just a case\-study in the prisoner's dilemma, and will lead to protocols' [capex being perpetually under\-funded](https://vitalik.ca/general/2021/08/16/voting3.html). To get to a plausible solution we need to weigh some supply and demand\-side effects.


On the demand side (early contributors wanting to contribute to programs which benefit the community), how do you get people to act in favor of their most virtuous preferences? Donations are prisoner’s dilemmas that are vulnerable to free riding and to simple greed. Even if I value a project to produce a public good, I may try to free ride on the contributions of others \-\- a problem that gets worse if I don’t value the public good at all.


On the supply side (the programs on offer), the question becomes how to prevent the things that blockchain as a movement is antithetical to: Graft, nepotism, exploits, and incompetence? Centralization of pools and discretion, such as premines to a foundation or network taxes to a group account, just seem to attract a type of Lord of the Flies standard of governance. Is it possible to have a market of programs, and do away with centralization and whitelists?


#### Optimizing Demand Side


You can encourage people to elect at a rate closer to the community optimum by making opt\-in donations obvious, effortless, [automated, and highly visible](https://medium.com/commonsstack/automating-ostrom-for-effective-dao-management-cfe7a7aea138). Elinor Ostrom, the Nobel prize winning economist and political scientist, showed that [tolerable solutions](https://www.onthecommons.org/magazine/elinor-ostroms-8-principles-managing-commmons) exist for these kinds of problems especially in small, long\-lasting groups where people can be monitored and initially gently chastised for norm\-breaking with subsequent graduated sanctions.


#### Optimizing Supply Side


The supply of programs need not be fixed. Anyone should be able to create a program, and solicit donations \- no matter the size. Like big\-brand global non\-profits who compete with each other for donor dollars, protocol programs are in a market. The most credible programs will attract the most funding. The programs with the most safeguards will also receive the most funding. A market for projects allows real world outcomes to form a feedback loop for which some projects continue to get funding and some die out.


Programs opting into participatory decision\-making increase their chances of serving the market, i.e. the donors’ preferences. While it doesn't need to be included in the protocol, the protocol may offer smart\-contract capabilities by which people can prove that they are a donor, such that the program can more easily poll the market for upcoming decisions, big or small. This is complex to do in the offline world, but in a smart contracts environment it's as simple as providing an on\-chain "receipt" of donation to the account. Again, the protocol need not bind a program to do this, but making it readily available and there being simply one program adopting this could very well make it the standard by which other programs need to compete against in the market for donations.


A second boost to credibility of programs is giving them the ability to delegate the catching of fraud. Again, this is not possible with traditional offline foundations, but the transparency of a public ledger provides opportunities. A smart contract could be provided to programs such as a "secure wallet", where the program can elect a group which has supervisory authority in some very narrow cases. Typically on blockchain this is done with "multi\-sig" wallets that require multiple signatories to allow a disbursement. However, electing signatories is an opaque process, and the technology to implement this is cumbersome In practice, most multi\-sigs (some with billions of US dollars worth of assets) have fewer than ten authorities.


There's another more practical issue, that is, getting authorities to proactively sign every invoice is impractical. The process can be onerous when the goal is to prevent self\-dealing and fraud. As an alternative, the program administrator should recruit the stakeholders to identify fraudulent transactions, i.e., slow them down to be scrutinized, and ultimately blocked. This could allow a larger group of stakeholders to observe, and they need not be fixed but may freely join or leave that role. More practically, the program may just elect the validator set operators (consensus nodes) to be in that role since they are ultimately the most trusted authorities on the network.


We think providing these tools to both consumers and providers of public good generation processes can create market micro\-structures that fend off the prisoner's dilemma for a time. But this game relies on Ostrom's assumptions that social consensus can be enforced, and this does not scale. Scaling social coordination, however, is part of the magic of blockchain. In subsequent rounds of play, and with new players, stronger consensus can be encoded into the blockchain's policy. Modifying these games to create greater benefits for donors, ultimately incorporating guild\-like tithes, or even a subscription of services, may be acceptable by subsequent cohorts.


Said differently: While regulators may not allow you to create binding games to solve prisoner's dilemma at genesis, with the right social norms this can be punted into a future round of the game.


Native token balances don't automatically solve your funding issues. Valuation of your dry powder is a vanity metric, given that actually using the funds can cause extreme turbulence in the market and therefore [needs to be considered carefully](https://uncommoncore.co/a-new-mental-model-for-defi-treasuries/). In this situation, proportions matter. Assuming that there is a healthy market for programs that are working to produce public goods, the next step is preventing the program ecosystem from becoming ransacked, not by fraud, but by a more stealthy actor: Dilution.


### Thermostatic Security


In designing a blockchain system, attention should be given to where the value flows.  
How economic value is allocated depends on the rules of a system. In a competitive market with free entry, for example, suppliers compete prices down to costs and most of the surplus value flows to consumers. In a system with monopoly, the total value generated is smaller but a larger share flows to suppliers.


The biggest impact on the distribution of credits are the subsidies to node operators, after all, that is how the credits materialize in the first place and continue to be issued. In many protocols, especially early ones, much of the value flows to the miners in the form of block rewards (subsidies in the absence of transaction fees). The miners in turn compete to obtain that value and in so doing dissipate it in the form of server and electricity costs. Since much of the value per transaction (in the form of mining fees and subsidies) flows to suppliers, those blockchains aren't providing much consumer surplus in terms of transactions, although they can be very useful as a store of value.


Validators and full node operators verify that the transactions submitted to a blockchain follow the formal rules of the blockchain. Validation is critical to the successful operation of a blockchain, but it is an essentially mechanical or algorithmic procedure, much like verifying that a letter is appropriately addressed and stamped or that a contract has been signed. Validators should be paid enough to cover their costs and a normal profit, but there are few reasons to offer validators the prospects of extraordinary returns. Validation is like road maintenance, garbage pickup or web services\-\-a critical service that should be prioritized, paid regularly, securely, and well. But, if you want value to flow to users of the service, validators should be paid based on the costs of supplying the service, not on the value of the service itself.


##### *The auction*


To avoid both over and underpayment of validators, and to distinguish validator payment from the fundamental properties of the system, the blockchain uses a simple and clear algorithmic process to converge on a fixed number of validators. The equilibrium number of validors is set so that it is at an optimal level for the validation of the network: large enough for competitive pricing and robust security, yet small enough to prevent value dissipation.


The key variable is the count of validators that have signed blocks within the last Y blocks. This moving average is data which is available to the core system's state machine. When the count of validators is below the optimal level, total validator compensation increases. When the count is above the optimal level, total validator compensation decreases.


![](https://siasky.net/TACPw_L307kSOzbii_ZrbZYQQJJzPzdbkn6ttjCXz96z8Q/graph.png)


Validators in this model are well paid but not overpaid. They are also paid equally, assuming the work is above a threshold. Based on the chart above, we propose that having, for example, over 100 nodes performing validation (in classical pBFT based consensus) has diminishing marginal returns to security, and therefore should not be overcompensated.


For this auction to work, it's important that it should be easy for validators to enter the market and also to exit. Ease of entry and exit and an adjustment process that changes validator compensation to keep the number of validators roughly constant around the optimal level together ensure that validators are always paid a price that reflects the true cost of providing validator services.


### Slow Wallets


Bootstrapping the network requires a careful balancing of two considerations. First, early contributors and adopters should be rewarded for their investments and efforts. Second, early contributors and adopters should not be rewarded such that later contributors are second\-class citizens and thus should not be incentivized to “pump and dump.” A chain can balance these two considerations by rewarding early contributors and adopters, but locking them in until after everyone has had an opportunity to join, test and use the network. Thus, early contributors and adopters who may have outsized gains are not rewarded until the network matures.


There is no obvious reason the entirety of the credits for computation should be transferable between accounts. It is not like this for airline miles. It is also not like this for commodities, or real estate. If you are designing the credit to be durable and useful for computation in the future, or more, it is wise to keep in mind how the flows of those other assets work. Not all gold in the world can be transferred between accounts at a moment's notice. And how much of Manhattan's real estate by "market\-cap" changes hands on a given day? The answer: A fraction of one percent.


At the start of a network, when an ecosystem is not yet developed, there are limited places to use your compute credits. There are limited smart contracts to execute, limited places to bond your credit for access to other benefits. So, while you can earn credits, and they are yours free and clear to use an unlimited amount in smart contract execution, there's not a great operating case for transferring them to other parties at the start of the network.


Speculation is one case, and there's nothing inherently wrong with that. What is a problem, however, is speculation by people with information advantages, people that have no ["duty of care" to the platform](https://medium.com/token-engineering-commons/engineering-ethics-in-web3-18d981278018?source=linkShare-bdd1335dfbd-1636835251) (i.e. the risk of rug\-pulls, and dumping); those actors make it a less trusted environment.


The network may choose to enforce limits on balance transfers in the code, for the simple reason of preventing a prisoner's dilemma, that is, while some parties may be happy to opt\-in to slowly transferring their account balances, as soon as someone breaks the rule it causes a run on the bank.


Slow wallets should be opt\-in, and not seen as a tax. The outcome an enlightened self\-interested miner is seeking is: "I'll place my funds in a slow wallet, as long as others do so". To increase the incentive the collective can say certain activities on the network, ones that require greater trust for instance, need to be done by people with slow wallets, e.g. running validator nodes, can only be done by accounts with slow wallets. Additionally, this can be coupled with other ecosystem activities that create stronger consensus: The development programs (e.g., an engineering fund) can have a policy that will state that it will only pay out to individuals who have opted into having a "slow wallet". Thus, it becomes possible for the network to persuade the actors which have the most power to disrupt the economics of the chain to voluntarily opt into a lockup.


In many protocols we observe that locking schemes do, however, still tend to privilege early members (or investors with different term sheets) and those with information asymmetries. Two proposals can mitigate this: (1\) there should not be any lower "castes" of the unlocking regime; everyone has the same rule, and (2\) people get the same flat amount unlocked everyday (not on a percentage basis).


A reasonable lockup policy might look like this: Slow wallets are enforced by the state machine. If you want to be a validator, or otherwise access early features, those features will check if you have a slow wallet. You can, of course, keep an end\-user wallet which has no limitations, but also does not access certain features. Transfer limits on slow wallets start at 0 and increase daily at a fixed amount (not a percentage, so whales do not have extra advantage). Every slow wallet has the same transfer limit schedule.


A possible variation on the above can be considered: The transfer limit schedule can be adjusted over time as transaction fees increase Thus, transferability matches the maturity of the network as measured by usage. This mechanism, however, suffers from a kind of problem: It will be very unpredictable, and have a low user experience. The user will not know what to do differently to effect the change.


Principally, and this should by now be obvious, the main benefit of locking is that it incentivizes early contributors to play the long game. All players over time should effectively be hearing the same instruction: Creating trains to ride the rails increases the long\-term value of the network. Producing the public goods of the network is what makes your number go up. In other words, by limiting the opportunity to dump, locking incentivizes socially valuable greed. Extrinsic incentives are good when they incentivize actions in the social interest, that is, when they encourage investments that will increase the value of the network. Said differently, people who have bound themselves together for an extended period of time are incentivized to discover ways to cooperate (in and out\-of\-band) to produce and fund the application layer.


## Conclusion


We intend our principles to be a Schelling point to attract certain personalities. Not all of our designs are necessarily stable under all scenarios. In fact, we've made it clear that the donation game will eventually break down. We're confident though that these mechanisms will attract the people necessary to iterate in subsequent rounds of the game. People like you, since you've read this far!


The warning signs of the past mistakes are loud and clear for public infrastructure. To return to our prior narrative, railway profits were eroded by competition with the interstate highway system and air travel. This brought the Pennsylvania Railroad company to its knees. The lesson is: Don’t fall in love with instances of public goods, but do build on them, and plan for the next century.


We are playing an infinite game, not a finite game and the only way to win an infinite game is to keep playing. Carpe diem ✊☀️


 


