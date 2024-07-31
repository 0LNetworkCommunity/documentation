"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[1076],{1240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(5893),o=n(1151);const a={},r=void 0,s={id:"archive/canonical/technical/Delay_Towers_Pt_3_Implementation_on_BFT",title:"Delay_Towers_Pt_3_Implementation_on_BFT",description:"TL;DR",source:"@site/docs/archive/canonical/technical/Delay_Towers_Pt_3_Implementation_on_BFT.md",sourceDirName:"archive/canonical/technical",slug:"/archive/canonical/technical/Delay_Towers_Pt_3_Implementation_on_BFT",permalink:"/pr-preview/pr-93/archive/canonical/technical/Delay_Towers_Pt_3_Implementation_on_BFT",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/archive/canonical/technical/Delay_Towers_Pt_3_Implementation_on_BFT.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Delay_Towers_Pt_2",permalink:"/pr-preview/pr-93/archive/canonical/technical/Delay_Towers_Pt_2"},next:{title:"Proof-of-Fee_Part_2",permalink:"/pr-preview/pr-93/archive/canonical/technical/Proof-of-Fee_Part_2"}},l={},d=[{value:"TL;DR",id:"tldr",level:2},{value:"Context",id:"context",level:2},{value:"Delay Towers Implementation",id:"delay-towers-implementation",level:2},{value:"VDF Implementation",id:"vdf-implementation",level:3},{value:"Anatomy of a Delay Tower",id:"anatomy-of-a-delay-tower",level:3},{value:"Network Genesis",id:"network-genesis",level:2},{value:"Steady State",id:"steady-state",level:2},{value:"Onboarding Nodes",id:"onboarding-nodes",level:3},{value:"Mining",id:"mining",level:3},{value:"Consensus Voting Power",id:"consensus-voting-power",level:3},{value:"Cardinality",id:"cardinality",level:3},{value:"Jailing",id:"jailing",level:3},{value:"Rate Limiting Validator Entry",id:"rate-limiting-validator-entry",level:3},{value:"Benefits",id:"benefits",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Full Series",id:"full-series",level:2}];function h(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,i.jsx)(t.p,{children:"Delay towers provide many benefits to BFT networks, including diverse distribution of participants, Sybil resistance, eco-friendliness, determinism, and others. This post delves into one specific implementation of delay towers and its integration with a high-throughput BFT network for bootstrapping purposes, and offers it as a strategy to achieve the goals of a free and fair chain launch."}),"\n",(0,i.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,i.jsx)(t.p,{children:"If you followed the previous parts, you'll recall that we are using delay towers to bootstrap a new blockchain with the following properties:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"High-throughput"}),"\n",(0,i.jsx)(t.li,{children:"Fast finality time"}),"\n",(0,i.jsx)(t.li,{children:"Fair launch"}),"\n",(0,i.jsx)(t.li,{children:"Permissionless access"}),"\n",(0,i.jsx)(t.li,{children:"Engender decentralization with equitable distribution"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A blockchain protocol can use delay towers to establish persistent identity for the nodes as a Sybil resistance mechanism. Delay towers serve as a proof of elapsed time (PoET) to complement BFT consensus, providing a mix of security and performance benefits that PoS ordinarily provides while preserving regulatory benefits of PoW and lowering barriers to distribution. This post delves into one specific implementation of delay towers to envision how all the pieces of delay tower and BFT fit in."}),"\n",(0,i.jsx)(t.h2,{id:"delay-towers-implementation",children:"Delay Towers Implementation"}),"\n",(0,i.jsx)(t.h3,{id:"vdf-implementation",children:"VDF Implementation"}),"\n",(0,i.jsx)(t.p,{children:"The growing demand for VDFs for applications, such as randomness beacons, has led to various implementations of VDFs. The current protocol uses Chia's VDF implementation. Chia sponsored some of the early work around VDFs and has an actively deployed open-source implementation with benchmarking. Another notable implementation is Stark VDFs that use computational integrity proofs such as Starks, pioneered by Starkware with VeeDoo service on Ethereum. Other VDFs include RSA moduli and trusted setups which are yet to be deployed in the wild."}),"\n",(0,i.jsx)(t.h3,{id:"anatomy-of-a-delay-tower",children:"Anatomy of a Delay Tower"}),"\n",(0,i.jsxs)(t.p,{children:['Nodes run the delay function locally, offline, using the "tower-builder" application to produce a\xa0',(0,i.jsx)(t.em,{children:"proof_0"}),"\xa0file. The proof file consists of:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A Preimage with account authorization key (public key), the chain ID with an arbitrary state of the ledger"}),"\n",(0,i.jsx)(t.li,{children:"The hex encoded bytes of the proof of the delay."}),"\n",(0,i.jsx)(t.li,{children:"The metadata, such as the delay time."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The preimage serves as the base identity for which the remainder of the delay tower will be referencing. Ultimately the preimage is committed to a chain, and the state machine will verify that the preimage belongs to an account on the chain."}),"\n",(0,i.jsx)(t.p,{children:'All the subsequent proofs will use the preceding proof\'s SHA256 hash as an input for evaluating their delay functions; the "tower-builder" application builds new proofs on top of existing proof to grow the delay tower. Each new block is then submitted to the chain ("committed"), and thus verified as (A) being a valid proof of elapsed time and (B) being contiguous with the previous proof committed to the chain - thus giving a linear path back to the original preimage. The proofs do not need to be stored on chain after they have passed those two approvals. Only the current proof\'s hash needs to be persisted on the chain, in anticipation of the next proof which will be verified.'}),"\n",(0,i.jsx)(t.p,{children:"As for the state of the tower, the delay tower is stored locally on the node as a repository of JSON proof files. Each proof takes approximately 4kB. The tower state lives off-chain, which the user stores on their node and is responsible for backing up. This would allow for the user to replay the entire tower history if there was a need to do so (e.g. using as identity proof on another chain, or in the event of the principal chain's catastrophic failure)."}),"\n",(0,i.jsx)(t.p,{children:"That said, additional governance is necessary to prevent outliers from exploiting validator set admission and consensus voting power (as discussed further below). As we've seen, above, the state machine encodes certain rules for the submission of the tower. Upper and lower-bound threshold of proof counts can be employed."}),"\n",(0,i.jsx)(t.p,{children:"For upper bounds, for all accounts on chain (whether a validator or not) the state-machine will outright reject proofs after an excess amount of proofs have been submitted in a given epoch (one day in our case). This is an important check to remove outliers which can happen due to either: Exploits in the cryptography (which as yet undiscovered) or advances in hardware that would allow for order-of magnitude improvement. The upper-bound disincentivizes such investments."}),"\n",(0,i.jsx)(t.p,{children:'Similarly, additional rules exist for a lower-bound. The chain may disconsider "sufficient" proofs as having been submitted for certain cases. For example a minimum number of proofs per epoch would be necessary to join a validator set for the first time, be removed from "jail" for non-compliance, or simply in order to remain in the validator set, etc. This is discussed further, below. While in the experimental network these thresholds are hard-coded and can be changed by protocol upgrades, future implementations can make such VDF thresholds dynamic, varying according to current system state.'}),"\n",(0,i.jsx)(t.p,{children:"The description above sketches out the lifecycle of an individual delay tower. Let us examine how it integrates with a BFT blockchain chain."}),"\n",(0,i.jsx)(t.h2,{id:"network-genesis",children:"Network Genesis"}),"\n",(0,i.jsx)(t.p,{children:'At the genesis of a network, the BFT chain needs a defined set of validators in the system state. Different genesis "ceremonies" are possible in creating BFT networks. In Proof of Authority, a centralized entity simply provides a genesis "layout" with the nodes that are to participate.'}),"\n",(0,i.jsx)(t.p,{children:"Coordinating a network genesis such that it is permissionless requires some infrastructure in order for nodes to make themselves candidates for genesis (registration). Usually a Github repo is used for this purpose. Once all the registrations are present, individual node operators will use a layout file with the registrations that they would like to see included in the first block of the network. In the case of using a delay tower, their proof_0 can be included in the registration information."}),"\n",(0,i.jsx)(t.p,{children:'During the registration period, the validators candidates will generate offline and submit proof_0 along with their node configurations (such as network and public keys) to the ceremony repository. After the registration period closes, each node participating in genesis will use a genesis building tool to produce the first block of the network. Note that the genesis block does not need to be produced by one entity, each node in the new network can create the genesis.blob independently for a fully decentralized ceremony. One of the steps of the tool in our case, is to run a VDF "verifier" that confirms that proofs of each registrant indeed correspond to an expected delay and that the preimage of proof_0 belongs in fact to the registrant. At the end of the process the genesis block for the network is produced. In this proposed implementation, a successful bootstrapping requires neither pre-mining, a coin drop, nor any other means of distributing the necessary starting stake(s).'}),"\n",(0,i.jsx)(t.h2,{id:"steady-state",children:"Steady State"}),"\n",(0,i.jsx)(t.h3,{id:"onboarding-nodes",children:"Onboarding Nodes"}),"\n",(0,i.jsxs)(t.p,{children:["As in the genesis ceremony, each new prospective validator node (a node that wishes to enter a validator set) needs to submit configuration information to the network. After genesis, the only way of doing this (in any account-based blockchain) is to have an existing account create the new prospective account and optionally, send the configuration information on behalf of the prospective validator. For this to take place, the prospective validator must generate\xa0",(0,i.jsx)(t.em,{children:"proof_0"}),"\xa0locally and transmit it (out of band) to an existing account to initialize its configurations. As discussed below, further governance can be added to the account creation, such as requiring these accounts to be created by existing compliant validators, and rate-limiting the account creation by the onboarder account."]}),"\n",(0,i.jsxs)(t.p,{children:["In a single step, one transaction, the onboarder can submit the validator's configuration information and the\xa0",(0,i.jsx)(t.em,{children:"proof_0"}),"\xa0(whose delay can be verified on chain via the transaction). Assuming all configuration information is valid (such as network settings) and the\xa0",(0,i.jsx)(t.em,{children:"proof_0"}),"\xa0is verified the prospective validator can become a candidate to enter the validator set."]}),"\n",(0,i.jsx)(t.h3,{id:"mining",children:"Mining"}),"\n",(0,i.jsx)(t.p,{children:"The governance can decide at what point the validator can join the validator set. In this proposal, the validator candidate needs to continue to produce proofs for a full day (one epoch) before they are admitted to the validator set."}),"\n",(0,i.jsx)(t.p,{children:'To grow their delay tower, nodes run a "tower-builder" app. Running the "tower-builder" application is called mining. The tower-builder operates in parallel to other node operations, e.g. the consensus node executable runs in a completely separate process. The tower-builder could in fact be run in a separate environment as the consensus process.'}),"\n",(0,i.jsx)(t.p,{children:"From this point on, the miner is building the delay tower. The miner submits the VDF proofs and the chain state machine verifies the correctness of submitted VDF proofs. However, for the node operator the quantity of proofs must be created within certain thresholds. These thresholds may adapt over time. But on bootstrapping the network, a generous threshold will make allowance for operator's adapting to this system. In this implementation, a minimum of 7 proofs need to be produced per epoch (approx 4 hours of proofs per day as measured on typical cloud hardware), but an upper bound of 72 proofs per epoch (e.g. 20mins per proof continuously running). This range will narrow as more system information is collected from real-world usage. Furthermore these thresholds can be dynamically adjusted, but further research is needed."}),"\n",(0,i.jsx)(t.p,{children:"As noted in the previous post, mining delay towers is not the same as PoW puzzles; it is sequential, cannot be parallelized, and has no advantage with heavy computational power. As a result, mining delay towers are indeed very eco-friendly."}),"\n",(0,i.jsx)(t.h3,{id:"consensus-voting-power",children:"Consensus Voting Power"}),"\n",(0,i.jsx)(t.p,{children:'The BFT protocol needs a supermajority to reach consensus on block production, and every validator has some "votes" in the consensus, called voting power. In this implementation, the tower height equals the voting power in the consensus. This is a deterministic and straightforward rule that is easy to verify.'}),"\n",(0,i.jsx)(t.p,{children:"Over time, the relative linear advantage of an early node decreases, and the marginal difference between a tower starting later, will decrease and voting power becomes more evenly distributed. This could be a benefit over PoS networks where reputation and rewards are directly dependent on the stake."}),"\n",(0,i.jsx)(t.p,{children:"While a longer discussion is necessary on economics, it should be noted that tower height need not confer any economic advantages besides admission to the validator set. In this design, all the validators in BFT contribute relatively equally, and any major differences are often due to operator error. Hence, there's no need for consensus power to affect rewards for participating in the validator set (as is often the case for PoS).The rewards are shared equally among all the compliant validators."}),"\n",(0,i.jsx)(t.h3,{id:"cardinality",children:"Cardinality"}),"\n",(0,i.jsx)(t.p,{children:"BFT network performance worsens if the cardinality of the validator set is too high; accordingly an upper limit on the validator set is needed. There are upper bounds to BFT network performance; there is a steep dropoff in network latency observed after 128 network nodes in most BFT consensus implementations. Thus the participation in the quorum set needs to be restricted."}),"\n",(0,i.jsx)(t.p,{children:"Different BFT networks use different strategies to select the validator set, these are typically Proof of Stake (as pioneered by Cosmos). Variations incorporating some measure of randomness exist. The simple algorithm is picking the top N validators by Proof of Stake from the list of validator candidates."}),"\n",(0,i.jsx)(t.p,{children:"Delay towers could provide an alternative. The consensus power, as defined by the delay tower height, can determine the validator set in a direct, observable, and deterministic manner Similar to the rule described above. The Top N validators by tower height gain admission to the validator set."}),"\n",(0,i.jsx)(t.p,{children:"Again while this is a separate discussion on economics, the design above is not entirely sufficient for game theoretical equilibrium since it would penalize new entrants who may be doing more delay proofs, instead of incumbents who may abandon running the tower-builder."}),"\n",(0,i.jsx)(t.p,{children:"As mentioned above thresholds can be enforced by the chain. A miner that intends to be part of the validator set needs to mine at least K proofs to state to gain admission in the following epoch. This is true for new prospective validators, as well as the existing validators."}),"\n",(0,i.jsx)(t.h3,{id:"jailing",children:"Jailing"}),"\n",(0,i.jsx)(t.p,{children:"Based on whether the validators are validating blocks (proposing and signing blocks) and/or mining, the validators could fall in one of these categories."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Case"}),(0,i.jsx)(t.th,{children:"Validating blocks"}),(0,i.jsx)(t.th,{children:"Mining delay tower"}),(0,i.jsx)(t.th,{children:"Gets reward"}),(0,i.jsx)(t.th,{children:"Jailed"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"Yes"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"The validators who are not validating blocks are not contributing to the consensus. This will increase latency. For instance, if a failed validator is chosen to propose the next block, the network has a timeout in that round instead of a new block. Even worse, if more than one-third of voting power is not reached, finality is affected. Therefore, this behavior must be disincentivized, and the validators who do not meet a threshold within an epoch are jailed. Note that the nodes that are not mining are not punished because they are not affecting the network."}),"\n",(0,i.jsx)(t.h3,{id:"rate-limiting-validator-entry",children:"Rate Limiting Validator Entry"}),"\n",(0,i.jsx)(t.p,{children:"The validator\u2019s entry into the network is an attack surface, including possible Sybil attacks. One potential approach, without PoS and an active centralized membership service provider, is to ask all existing validators to vote on the new validator. However, this approach could lead to encouraging validator-wide agreement (politics) for expanding the validator set. As an alternative, every validator could be rate-limited, and only those who are actively contributing (i.e., mining, and voting for 14 epochs) obtain an invite. This invite can be used to onboard a potential validator by initializing their validator configurations and these invites cannot be transferred or accumulated. At any point, there can be no more than one referral for a validator."}),"\n",(0,i.jsx)(t.p,{children:'Assuming no more than one-third of validators are malicious, as the network grows from a seed root of trust (as all blockchains do), the damage a Sybil can conduct to consensus is limited; the sybil cannot amplify their consensus votes faster than the good actors amplify theirs. Rate limiting also prevents one actor (e.g., a "foundation") from assigning seats in the consensus since they are rate-limited as other actors.'}),"\n",(0,i.jsx)(t.h2,{id:"benefits",children:"Benefits"}),"\n",(0,i.jsx)(t.p,{children:"The implementations above are an experiment; a proposal on how to integrate Delay Towers into networks which typically are PoS or PoA Sybil resistant."}),"\n",(0,i.jsx)(t.p,{children:"To recap: bootstrapping a BFT network with delay towers has multi-fold benefits:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Delay towers provide an equal playing field by making it hard to repurpose existing hardware, e.g., PoW ASICs."}),"\n",(0,i.jsx)(t.li,{children:"Bootstrapping a network without external capital or ICOs."}),"\n",(0,i.jsx)(t.li,{children:"Delay towers offer better distribution by lowering the barriers to entry. Can run on any commodity hardware."}),"\n",(0,i.jsx)(t.li,{children:"Similar security as PoS network during bootstrapping. With withdrawal limits in place, delay tower height correlates to the stake in native tokens in PoS systems."}),"\n",(0,i.jsx)(t.li,{children:"Delay towers provide a persistent identity that is hard to forge."}),"\n",(0,i.jsxs)(t.li,{children:["Eco-friendly consensus with minimal energy usage.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Determinism and hence, no wasted cycles"}),"\n",(0,i.jsx)(t.li,{children:"Delay towers are sequential and are not parallelizable by nature."}),"\n",(0,i.jsx)(t.li,{children:"Upper limits on number of accepted proofs per epoch caps the arms race."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Economics that are familiar to users of PoS networks. The rewards are distributed similarly to PoS networks, wherein everyone contributing to BFT consensus is rewarded."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"Delay towers envision a permissionless, durable, and non-forgeable identity which is fast to verify. This post delves into specifics of productionizing delay towers by integrating them into a BFT network. Delay towers serve as a persistent identity that can be used for consensus power while bootstrapping the network."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"full-series",children:"Full Series"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"http://openlibra.blog/2021/11/01/delay-towers-part-0/",children:"A high-throughput chain with a fair launch"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"http://openlibra.blog/2021/11/05/delay-towers-part-1/",children:"Puzzle Towers for BFT"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"http://openlibra.blog/2021/11/08/delay-towers-part-2/",children:"From Puzzle Towers and VDFs to Delay Towers"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"http://openlibra.blog/2021/11/12/part-3-a-delay-towers-implementation-on-bft/",children:"Implementation on BFT"})}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var i=n(7294);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);