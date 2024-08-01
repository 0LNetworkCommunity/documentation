"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[1223],{7573:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>h});var s=o(5893),a=o(1151);const n={},i=void 0,r={id:"archive/canonical/technical/Proof_of_Fee_Part_1",title:"Proof_of_Fee_Part_1",description:"The Cost of Consensus",source:"@site/docs/archive/canonical/technical/Proof_of_Fee_Part_1.md",sourceDirName:"archive/canonical/technical",slug:"/archive/canonical/technical/Proof_of_Fee_Part_1",permalink:"/pr-preview/pr-99/archive/canonical/technical/Proof_of_Fee_Part_1",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/archive/canonical/technical/Proof_of_Fee_Part_1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Proof-of-Fee_Part_2",permalink:"/pr-preview/pr-99/archive/canonical/technical/Proof-of-Fee_Part_2"},next:{title:"Research_Report_Decentralizing_Permissioned_Blockchain_with_Delay_Towers",permalink:"/pr-preview/pr-99/archive/canonical/technical/Research_Report_Decentralizing_Permissioned_Blockchain_with_Delay_Towers"}},c={},h=[{value:"The Cost of Consensus",id:"the-cost-of-consensus",level:2},{value:"TL;DR",id:"tldr",level:3},{value:"Why Not Delegated Proof of Stake?",id:"why-not-delegated-proof-of-stake",level:2},{value:"Validator Economics",id:"validator-economics",level:2},{value:"Validator Costs",id:"validator-costs",level:3},{value:"Validator Utility",id:"validator-utility",level:3},{value:"<em>Transaction Fees</em>",id:"transaction-fees",level:4},{value:"<em>Subsidies</em>",id:"subsidies",level:4},{value:"<em>No-Show Rewards</em>",id:"no-show-rewards",level:4},{value:"<em>MEV</em>",id:"mev",level:4},{value:"<em>Governance</em>",id:"governance",level:4},{value:"Cost of Consensus",id:"cost-of-consensus",level:2},{value:"PoW Sybil resistance",id:"pow-sybil-resistance",level:3},{value:"What PoS solves and the Nothing-at-stake problem",id:"what-pos-solves-and-the-nothing-at-stake-problem",level:3},{value:"Profitability",id:"profitability",level:3},{value:"PBFT Further Lowers the Cost of Consensus",id:"pbft-further-lowers-the-cost-of-consensus",level:3},{value:"Background on PBFT",id:"background-on-pbft",level:3},{value:"Walking the graph: The Disconnect Between Security and Cost",id:"walking-the-graph-the-disconnect-between-security-and-cost",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"the-cost-of-consensus",children:"The Cost of Consensus"}),"\n",(0,s.jsx)(t.p,{children:"\xa0"}),"\n",(0,s.jsx)(t.p,{children:"\xa0"}),"\n",(0,s.jsx)(t.h3,{id:"tldr",children:"TL;DR"}),"\n",(0,s.jsx)(t.p,{children:"As an alternative to the (near-universally deployed) Delegated Proof of Stake (DPoS), we propose Proof of Fee (PoF), a sybil resistance technique designed natively and with consideration of the benefits and tradeoffs of PBFT consensus from empirical experience."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Profits to blockchains are slim to non-existent. Low consensus costs are foundational for any chain that wishes to provide consumer surplus and profit to coin-holders; where excess winnings of the chain can be distributed to ",(0,s.jsx)(t.em,{children:"all"}),' account holders without preference to an investor class of "stakers".']}),"\n",(0,s.jsxs)(t.li,{children:["In PoF the cost of consensus is lowered maximally to the ",(0,s.jsx)(t.em,{children:"operator opportunity cost"}),"; with such an approach, the social cost of dilution through issuance is minimized."]}),"\n",(0,s.jsx)(t.li,{children:"Validator seats are auctioned at each epoch, such that the validators private valuation of rewards, MEV, breakage, and governance is revealed."}),"\n",(0,s.jsx)(t.li,{children:"PoF coins have superior ergonomics. Every actor has a very simple instruction; no staking, no delegation, no yield games, no slashing."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Before we dive into the mechanics of Proof-of-Fee, in Part 1 of this paper we lay some foundations which may be different from what you have seen elsewhere. [Part 2 of the paper](http://openlibra.blog/2022/10/20/proof-of-fee-part-2-a-proposal/) gets into the mechanics and implementation details of Proof-of-Fee (PoF), an affordable sybil resistance technique native to PBFT consensus.\n"})}),"\n",(0,s.jsx)(t.h2,{id:"why-not-delegated-proof-of-stake",children:"Why Not Delegated Proof of Stake?"}),"\n",(0,s.jsx)(t.p,{children:"While the purpose of the document is not to dissect DPoS, what follows\xa0 is the briefest context\xa0 on reasons why DPoS may not work for a blockchain's community.\xa0"}),"\n",(0,s.jsx)(t.p,{children:'A meaningful issue is the "ergonomics" of the token, that is, how do humans interact with it. End users may be unsophisticated and not know how to stake. They may have coins on an exchange which does not offer staking services. The coins may be in escrow in an application\'s smart contract, or across a bridge. Some of these issues are surmountable if there were sufficient education and infrastructure, but in the meantime the result is a disparity between the percentage of tokens staked and the percentage of account holders. A large percentage of the token supply may be staked (by whales and the savvy coin holders), but it represents only a small number of the total wallets.'}),"\n",(0,s.jsx)(t.p,{children:'Modern DPoS blockchains are also universally deployed with "inflation" or issuance of new coins to subsidize the validator operators and their stakers. This may be necessary because transaction fees from producing blocks are far lower than the validators deem acceptable to provide their services.'}),"\n",(0,s.jsx)(t.p,{children:"The result is that the accounts which are not staking are effectively paying a fee to the stakers. This means usually the retail investors are paying a fee to keep an account on the chain (a wealth tax) often to the founding members of the chain (venture capitalists and developers). This is not a widely advertised property of such chains.\xa0"}),"\n",(0,s.jsx)(t.p,{children:"Promoters of the chains may say that this is transitory, that transaction fees will one day catch up, but this should be viewed with some skepticism. Looking forward to the next ten years, the cost of each state transition on a blockchain will drop radically due to secular engineering advances (e.g., parallelization, mempool optimization, sharding, layer 2, etc.); given a trend towards commoditization, prices tend to drop to marginal levels. Given the likelihood of a paucity of revenue from transaction fees, DPoS blockchains may be structurally and permanently in the business of taxing the depositors."}),"\n",(0,s.jsx)(t.p,{children:'There is also some debate around the "delegation" component of DPOS and whether it is serving its purpose. Delegation is expensive as it adds to the cost of consensus (because now there are more people, and more opportunity costs, that need to be compensated). The cost must achieve the goals of plausible neutrality (decentralization) and select for ideal validators. Instead, the empirical evidence of what delegation does is select for the parties that can accumulate capital (e.g. large centralized exchanges). That behavior does not necessarily align with achieving the goals.'}),"\n",(0,s.jsx)(t.p,{children:"Lastly, the staking requirements may be excessive, inefficient uses of capital. One should ask the question: Does the bond really need to be 1,000 to 1,000,000 times the reward of an epoch? Given that L1s have not empirically seen slashing of large stakes from malicious attacks, the level of bonding is disproportionate to the need (more below on nothing-at-stake issues)."}),"\n",(0,s.jsx)(t.p,{children:"We start from the assumption that more exploration needs to be done on economic guarantees for modern blockchains, which are mostly all based on PBFT and derivations thereof. Proof of Fee is proposed as an experiment."}),"\n",(0,s.jsx)(t.h2,{id:"validator-economics",children:"Validator Economics"}),"\n",(0,s.jsx)(t.p,{children:"Since validators are the largest cost of a network, we need to clearly understand their costs and their expected utility from participating in a network.\xa0"}),"\n",(0,s.jsxs)(t.p,{children:["Validators have a private valuation (",(0,s.jsx)(t.em,{children:"expected utility"}),") of a seat in consensus. The same validator has a private opportunity cost for the work it provides. If the expected utility is greater than the total costs, including opportunity cost, then a rational validator should participate in consensus."]}),"\n",(0,s.jsx)(t.h3,{id:"validator-costs",children:"Validator Costs"}),"\n",(0,s.jsx)(t.p,{children:"One of the roles of protocol engineers is to lower the hard costs associated with being a validator; make the tools work reliably, make the node software use less hardware resources, and provide greater automation and monitoring."}),"\n",(0,s.jsx)(t.p,{children:"Technical matters, however, cannot address all of the costs of the validator; there are also opportunity costs. The time it takes for the staff to operate the nodes, research, participate in governance, and do business administration could be used for other purposes (on other chains). Additionally, if there is a financial cost such as staking, then that value could always be used elsewhere, staked elsewhere."}),"\n",(0,s.jsx)(t.p,{children:"Opportunity cost is out of the control of protocol engineers and designers, it is a feature of the global markets (labor, tokens, compute, energy, etc.)."}),"\n",(0,s.jsx)(t.h3,{id:"validator-utility",children:"Validator Utility"}),"\n",(0,s.jsx)(t.p,{children:"Given that the opportunity cost is extrinsic, profitability for the validator (and the blockchain) is created by the business environment of the blockchain. Some of the factors that contribute to the private assessment of the utility of the validator seat are tangible and easily measurable (transaction fees), others are intangible and highly subjective (governance roles)."}),"\n",(0,s.jsx)(t.h4,{id:"transaction-fees",children:(0,s.jsx)(t.em,{children:"Transaction Fees"})}),"\n",(0,s.jsx)(t.p,{children:"Most blockchains describe transaction fees as a title (property right) of node operators. (Note in Proof of Fee we take the view that transaction fees are a title of the coin holders, more on that later). The transaction fees flow by default to network operators. Most often those fees are far lower than what those same validators are earning from network subsidies."}),"\n",(0,s.jsx)(t.h4,{id:"subsidies",children:(0,s.jsx)(t.em,{children:"Subsidies"})}),"\n",(0,s.jsx)(t.p,{children:"Most blockchains provide subsidies in addition to transaction fees. This is supposed to supplement the validator's earnings while bootstrapping the network and the transactions are insufficient. Even in 2022 the most established blockchain, Bitcoin, generated only a fraction of earnings from transaction fees: Roughly 1% (i.e., roughly 99% comes from subsidies - see the chart, below)."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://lh4.googleusercontent.com/IDSFhHIiMq_FQMvE7JKvK9tlUD9pKIRvXl-XJ_aDk5U2bur44IjQAQLx41gfWYUn6xOKHTKMkrR1Y2x--7UguUH0L-WlUJhpiW92PRzTEda8Ix8_uo_4HWSU3vsP1zMUl-IsbKcAR4LpyuihYRg6mN5pkX-gkBzwWr3OiJmDqXBcAlm5kYsc5kTu",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["Source: ",(0,s.jsx)(t.a,{href:"https://www.theblock.co/",children:"TheBlock.co"})]}),"\n",(0,s.jsx)(t.p,{children:"As a matter of practice, subsidies are almost exclusively newly issued network equity, and as such are dilutive. Meaning, subsidies are a cost to depositors on a blockchain due to the reduction in their percent equity. Assuming a network with a constant market-cap valuation (which we must do from a unit-economics analysis), new issuance to the miner which produced security, is a reduction in value to anyone who didn't receive a new coin. Additionally, this new equity is financing the current security needs by time shifting future earnings from transaction fees (presumably, unless new revenue models are discovered)."}),"\n",(0,s.jsx)(t.p,{children:"All known blockchains are loss-making in this regard. While Ethereum makes some claims about becoming profitable, it remains to be seen whether this can be sustained over more than a brief period (, and there are at least a few pundits out there who are questioning that claim).\xa0"}),"\n",(0,s.jsx)(t.h4,{id:"no-show-rewards",children:(0,s.jsx)(t.em,{children:"No-Show Rewards"})}),"\n",(0,s.jsx)(t.p,{children:"Another aspect of validator utility to consider is no-shows from other validators, that is, drop-outs from competitors. When a validator is successful in the validator set, and one or more of its peers fails in consensus, there is a surplus of transaction fees (or subsidies) that are available to it. Meaning, the pool of rewards within an epoch is greater than what was nominally attributable to the validator at the start of the epoch. We separate this from the topic above because chance is involved and part of the utility is a wager on the success of the peers."}),"\n",(0,s.jsx)(t.p,{children:'This is relevant because even if validation is nominally not profitable from transaction fees or expected subsidies, the validator may see value in "staying in the game" in case another node falls out.'}),"\n",(0,s.jsx)(t.h4,{id:"mev",children:(0,s.jsx)(t.em,{children:"MEV"})}),"\n",(0,s.jsx)(t.p,{children:"MEV is a category of earnings that a validator can create by engaging in different types of frontrunning as it prepares transactions into blocks. As of 2022, this has become an important source of revenue for many operators.\xa0"}),"\n",(0,s.jsxs)(t.p,{children:["Though MEV seems to be becoming acceptable in some circles, when viewed through another lens, it can be argued that engaging in MEV violates the spirit of the agreement between validators and users. Validators are employing their access to insider information to game the system. From that perspective, MEV is an attack on the integrity of the system. (You can view a compilation of MEV attacks documented at ",(0,s.jsx)(t.a,{href:"https://www.mev.wiki/attack-examples",children:"https://www.mev.wiki/attack-examples"}),".)"]}),"\n",(0,s.jsx)(t.p,{children:"From 2021 to 2022, the tools for engaging in MEV attacks have become commoditized on Ethereum, and the cumulative costs approach $700M taken from users."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://lh6.googleusercontent.com/J6P-cUzicXGsCa6TyeCe8YmYykkYsOKnZpB5EQ1G6IvbG-rWc-b1JE98Blvhfz1yHsdA02I19Y34R8xSib4v1JKFNcqnPI42hgi5tqXFLY-9n2fFe7N6ZafPT4f-6-DUUByYx4D3tGR0UYn_SYhoX61inTYU8zl02joNeunR5oDsBq5N-3oZIKPJ",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["Source: ",(0,s.jsx)(t.a,{href:"https://explore.flashbots.net/",children:"https://explore.flashbots.net/"})]}),"\n",(0,s.jsxs)(t.p,{children:["MEV can be significant. In the early days of the Ethereum Post-Merge, as the cost of consensus went down, the share of MEV became higher. In September 2022, post merge, the MEV would average $100K, per day, while earnings from subsidies was $2M and transaction fees roughly $700k. Though on certain days, there are worrisome outliers, on September 27th 2022, the total subsidies paid to operators was $2.14M, while Tx Fees was $0.67M and the MEV was $1.5 M, that is 50% extra earnings over expected in-protocol earnings. (see, ",(0,s.jsx)(t.a,{href:"https://www.theblock.co/data/on-chain-metrics/ethereum",children:"https://www.theblock.co/data/on-chain-metrics/ethereum"}),").\xa0"]}),"\n",(0,s.jsxs)(t.p,{children:['In the long term there may be technical solutions to MEV attacks, such as the block producer and proposer separation seen in Ethereum (Flashbots MEV-Boost Relay). There may also be solutions on the application layer for "tricking the bots" (see: ',(0,s.jsx)(t.a,{href:"https://www.mev.wiki/attempts-to-trick-the-bots",children:"https://www.mev.wiki/attempts-to-trick-the-bots"}),"), and for fun see some applications' mousetraps: (",(0,s.jsx)(t.a,{href:"https://www.coindesk.com/tech/2021/03/22/bad-sandwich-defi-trader-poisons-front-running-miners-for-250k-profit/",children:"https://www.coindesk.com/tech/2021/03/22/bad-sandwich-defi-trader-poisons-front-running-miners-for-250k-profit/"}),")"]}),"\n",(0,s.jsx)(t.h4,{id:"governance",children:(0,s.jsx)(t.em,{children:"Governance"})}),"\n",(0,s.jsx)(t.p,{children:'Validator utility also includes the exercise of governance rights. Validators have outsized roles in governance (parameter changes, state machine upgrades). In fact, it may be said that validators hold the only "hard power" governance. Validators can always coordinate to apply a write to the database and that control over the protocol gives them de facto power to set policy. Most chains try to apply lower friction ways of other stakeholders changing policy, however ultimately the validator has the last say (or veto) on policies. Even if there are other governance mechanisms on-chain, validators may in collusion reject such transactions which trigger an upgrade (more below on types of malicious behavior). Resolving this balance of power is not the topic of this paper; suffice to say that the validator can reasonably have a private valuation for this governance role.'}),"\n",(0,s.jsx)(t.h2,{id:"cost-of-consensus",children:"Cost of Consensus"}),"\n",(0,s.jsx)(t.p,{children:"Consensus is a shorthand for getting a database transaction approved, though there is some confusion in equating a consensus algorithm, and a sybil resistance mechanism. Usually when we refer to cost of consensus we mean both inputs. Proof of stake was an evolution in reducing the cost of preventing sybil attacks, in both reducing the hardware costs in preventing attacks from malicious actors."}),"\n",(0,s.jsx)(t.h3,{id:"pow-sybil-resistance",children:"PoW Sybil resistance"}),"\n",(0,s.jsx)(t.p,{children:"Nakomoto consensus (invented for Bitcoin) relies on the longest chain principle, but it depends on Proof of Work (PoW) for sybil resistance. The longest chain principle helps in sequencing blocks of transactions, but not just anyone is allowed to do that. PoW as an identity mechanism says the block is proposed by the largest pool of CPU power. The more the CPU power of a pool, the more likely they get to propose the next block and hence, better rewards. As long as most CPU power rests with honest nodes, they outpace Byzantine actors by proposing more blocks.\xa0"}),"\n",(0,s.jsx)(t.p,{children:"Over time, the demands for computing power kept rising from CPUs to GPUs to ASICs. As a result, the capital for infrastructure and the recurring cost of electricity resources kept growing, leading to increased costs for consensus (besides energy we have cost of capital).\xa0"}),"\n",(0,s.jsx)(t.h3,{id:"what-pos-solves-and-the-nothing-at-stake-problem",children:"What PoS solves and the Nothing-at-stake problem"}),"\n",(0,s.jsx)(t.p,{children:"Proof of Stake (PoS) addresses Sybil attacks using native tokens as a stake in the system in place of the capital requirements of the hardware. This approach significantly lowers the cost of sybil attack behavior compared to Nakomoto consensus plus PoW due to a drop in the cost of computation (since no proof of work puzzles need to be solved).\xa0"}),"\n",(0,s.jsxs)(t.p,{children:["However, this reduced cost could lead to nothing at stake problem wherein validators could behave arbitrarily (see, ",(0,s.jsx)(t.a,{href:"https://blog.ethereum.org/2014/07/05/stake",children:"Vitalik's original"}),' description of the nothing at stake problem). In short: It\'s cheap for validators to create forks of the network, for example in a long range attack creating many plausible forks that in the future may be presented at the canonical fork. And for this reason, the earliest DPoS chains implemented high deposits and "slashing" when double-signing was occurring. As we will see later, there has been debate as to whether the threat of the penalty has any effect, or if the value of the bond is actually the cost-of-capital of the parked coins, thus negating that there is really a nothing-at-stake issue.']}),"\n",(0,s.jsx)(t.p,{children:"DPoS can be applied to numerous consensus algorithms (including Nakamoto, though not plausibly). The most well known is Tendermint PBFT implementations (or derivatives of Cosmos Hub), but there are many others in the wild."}),"\n",(0,s.jsx)(t.p,{children:"Our concern is narrower: How economic guarantees interacts specifically with PBFT and its derivatives."}),"\n",(0,s.jsx)(t.h3,{id:"profitability",children:"Profitability"}),"\n",(0,s.jsx)(t.p,{children:"If a network is profitable it will return value to coin holders. For this to happen, the revenue of the blockchain's products must be greater than the costs. That is, there can be no issuance of coins to fill the gap between what end-users paid for services, and the different costs of goods sold (the validators). As of 2022, there has never been a reliably profitable blockchain."}),"\n",(0,s.jsxs)(t.p,{children:["Currently the infrastructure costs of most blockchains are equal to the cost of consensus (i.e, only nodes and miners are paid).\xa0 The true cost of consensus, as noted above, is not really technical or resource bound on post PoW chains; it\u2019s the sum of the opportunity cost of validators. Validators have other means of using their time and compute resources to make money. Assuming a security guarantee of ",(0,s.jsx)(t.em,{children:"S"}),", the validators have a cumulative opportunity cost of ",(0,s.jsx)(t.em,{children:"C"})," (we don't assume these to be equal, or even necessarily correlated)."]}),"\n",(0,s.jsxs)(t.p,{children:["During bootstrapping of a network the relation between opportunity cost and issuance is indeterminate, since the network is discovering its value. In ",(0,s.jsx)(t.strong,{children:"steady state"})," however, the costs to the network should be the lowest possible (approaching the opportunity cost of node operators), such that the costs can be more readily covered with revenue. If the revenue cannot cover the cost of security, historically, chains have covered the shortfall by charging fees to account holders; those fees come in the form of dilution through issuance. Put another way, they pass through the costs to the account holders."]}),"\n",(0,s.jsx)(t.p,{children:"Chains can only provide security if the opportunity cost of a sufficiently non-colluding validator set is being met. Chains can only cover those costs if they are solvent (they have revenue). The chains can finance the deficit with issuance, but this is also a tangle since it can only have value if it is long-term solvent (by eventually having revenues greater or equal to security costs). Another way to think about it: Issuance is financing; it is only shifting the future revenues to the present validators."}),"\n",(0,s.jsx)(t.h3,{id:"pbft-further-lowers-the-cost-of-consensus",children:"PBFT Further Lowers the Cost of Consensus"}),"\n",(0,s.jsx)(t.p,{children:"Proof of Stake is the dominant method of sybil resistance for PBFT chains. Proof of stake designs, however, predate implementation of PBFT consensus. The specifics of PBFT chains allow for different economic guarantees but, for historical reasons, those have not been fully explored. Moreover, there are some misunderstandings about the total security guarantee of PBFT chains in relation to economic costs."}),"\n",(0,s.jsx)(t.h3,{id:"background-on-pbft",children:"Background on PBFT"}),"\n",(0,s.jsx)(t.p,{children:"The Byzantine Generals problem was posed four decades ago in 1982. The problem it addressed was how to reach a consensus among participants who might not necessarily trust each other and could have Byzantine failures. Reaching consensus facilitates state machine replication among distributed systems, where Byzantine failure is any arbitrary behavior, including intentional and unintentional behavior such as crash failures, collusion among participants, and software bugs. A solution to this problem is Byzantine fault-tolerant (BFT) consensus algorithms, a family of consensus protocols for distributed systems that provide both safety (\u201cbad things don\u2019t happen\u201d) and liveness (\u201cgood things do happen\u201d) guarantees.\xa0"}),"\n",(0,s.jsx)(t.p,{children:"The early BFT protocols assumed synchrony (i.e., synchronized clocks); that expectation can be challenging to obtain practically on the internet. PBFT is the first prominent practical solution to the Byzantine Generals problem. PBFT found its application in safety-critical systems, such as aircraft and submarines, where hardware is complex and may become unreliable in unpredictable ways, sometimes in hostile environments. Over the past two decades, we observed numerous advances to PBFT protocols with advances in networking and cryptography. These advances have significantly improved performance, measured throughput (tx/sec), and latencies.\xa0"}),"\n",(0,s.jsx)(t.p,{children:"Blockchains, where trust and security are critical, can leverage the underlying correctness guarantees of PBFT protocols. One downside, however, is that PBFT protocols assume a committee of participants and therefore can face Sybil attacks where a single participant has created multiple identities. To address this challenge, mechanism designs for establishing identity and economic incentives with guarantees from game theory are often necessary. One such mechanism widely used in blockchains is Proof of Stake, wherein anyone with native tokens in the system stakes their assets to become participants in the network. We've pointed out some of the issues with this sybil resistance approach, above."}),"\n",(0,s.jsx)(t.p,{children:"History won't end with PBFT, there may be other consensus innovations in the future. For our purposes we assume that the technical cost of consensus (CPU, networking, disk) is a domain of computer science and that the lowest hanging fruit has already been plucked, absent a major breakthrough in the Byzantine Generals Problem.\xa0"}),"\n",(0,s.jsx)(t.h3,{id:"walking-the-graph-the-disconnect-between-security-and-cost",children:"Walking the graph: The Disconnect Between Security and Cost"}),"\n",(0,s.jsx)(t.p,{children:"Let us consider the common threat scenarios, relative to PBFT:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Malicious transactions : Impossible unless signed by the user. One cannot append malicious transactions even if they have a majority. State machine replication would not let this happen and is guaranteed by cryptography."}),"\n",(0,s.jsx)(t.li,{children:"Reverse/delete blocks after finality: Leads to another fork, means abandoning the current chain. For that fork to continue it requires a\xa0 2/3rd majority on each block of the new fork."}),"\n",(0,s.jsx)(t.li,{children:"Malicious writes: Requires 2/3rd of nodes to approve a forced malicious write. This also requires coordinated action among the malicious validators and cannot happen with state machine replication."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:'Empirically from approximately four years of PBFT permissionless networks in the wild, there is scant evidence of malicious writes to a database. One possible explanation for this may be the fact that chains are built by "walking" from a trusted root. All known blockchains using PBFT require starting up from a "genesis set". And usually this involves participating in a community (usually a company) and developing offline reputation. In few such networks are the validators anonymous.'}),"\n",(0,s.jsx)(t.p,{children:"Moreover, in PBFT there are games outside of consensus that increase the cost to authenticate (create reputation), such that amplification of attacks from performant malicious nodes becomes more costly. Systems can add other costs which then work in concert to create unsustainable costs for the attacker. There are a broad range of experiments in this area related to reputation, validator set accession, and disincentives for malicious behavior."}),"\n",(0,s.jsx)(t.p,{children:"Mitigating attacks is not obviously mapped to economic costs. And economic costs will not exclusively deal with those attacks. Any analysis of cost paid for security versus the estimated dollar value of a safe transaction to send, are hampered by the noise of the effects of the reputation layer, which is very varied in the field."}),"\n",(0,s.jsx)(t.p,{children:'Reputation and validator admission are high hurdles in PBFT chains, which is very different from Nakamoto consensus (which assumes no trusted root). But given that many of the security guarantees are arguable coming from "walking the graph", it seems that there may be optimizations in reducing the overpayment.\xa0\xa0'}),"\n",(0,s.jsx)(t.p,{children:"The validators must receive a payment for their services. The challenge for all token holders is determining what is the correct fee to pay operators given that a) validator opportunity cost is extrinsic to chain b) the validators preferences (utility) is private."}),"\n",(0,s.jsx)(t.p,{children:"If blockchains underpay, trust from the users goes down as fewer nodes participate. As a result, the security guarantees for halts and writes go down, and the subjective political neutrality of the chain is lowered. While perhaps a reasonable but imperfect assumption, that more payment always increases security, the designers of blockchain economics usually err on the side of overpaying for consensus."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"This is the end of Part 1. [In Part 2](http://openlibra.blog/2022/10/20/proof-of-fee-part-2-a-proposal/), we will explore the mechanics and implementations of an alternative approach, Proof of Fee.\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>i});var s=o(7294);const a={},n=s.createContext(a);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);