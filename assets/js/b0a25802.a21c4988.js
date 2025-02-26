"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[7197],{958:e=>{e.exports=JSON.parse('{"permalink":"/blog/delay-towers-pt-2","editUrl":"https://github.com/0LNetworkCommunity/documentation/edit/main/blog/blog/delay-towers-pt-2.md","source":"@site/blog/delay-towers-pt-2.md","title":"Part 2 - From Puzzle Towers and VDFs to Delay Towers","description":"From Puzzle Towers and VDFs to Delay Towers","date":"2021-11-08T00:00:00.000Z","tags":[{"inline":true,"label":"Delay Towers","permalink":"/blog/tags/delay-towers"},{"inline":true,"label":"canonical","permalink":"/blog/tags/canonical"}],"readingTime":6.47,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Part 2 - From Puzzle Towers and VDFs to Delay Towers","date":"2021-11-08T00:00:00.000Z","tags":["Delay Towers","canonical"]},"unlisted":false,"prevItem":{"title":"Part 3 - A Delay Towers Implementation on BFT","permalink":"/blog/delay-towers-pt-3-implementation-on-bft"},"nextItem":{"title":"Part 1 - Puzzle Towers for BFT","permalink":"/blog/delay-towers-pt-1"}}')},1212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var i=t(958),o=t(4848),s=t(8453);const r={title:"Part 2 - From Puzzle Towers and VDFs to Delay Towers",date:new Date("2021-11-08T00:00:00.000Z"),tags:["Delay Towers","canonical"]},a=void 0,l={authorsImageUrls:[]},h=[{value:"From Puzzle Towers and VDFs to Delay Towers",id:"from-puzzle-towers-and-vdfs-to-delay-towers",level:2},{value:"TL;DR",id:"tldr",level:2},{value:"Context",id:"context",level:2},{value:"VDF 101",id:"vdf-101",level:2},{value:"Extending the Puzzle Towers with VDFs",id:"extending-the-puzzle-towers-with-vdfs",level:2},{value:"Integration",id:"integration",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Full Series",id:"full-series",level:2}];function d(e){const n={a:"a",em:"em",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"from-puzzle-towers-and-vdfs-to-delay-towers",children:"From Puzzle Towers and VDFs to Delay Towers"}),"\n",(0,o.jsx)(n.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,o.jsx)(n.p,{children:"By extending puzzle towers with VDF, a delay tower becomes a permissionless and non-forgeable identity which is fast to verify. This is a form of sybil resistance, we don't observe in any other system. A delay tower becomes a permissionless and non-forgeable identity which is fast to verify. These properties make a delay tower unique, scarce, and perhaps valuable in its own right."}),"\n",(0,o.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,o.jsxs)(n.p,{children:["The\xa0",(0,o.jsx)(n.a,{href:"https://siasky.net/EABaWAXFy3Ztx1vVIpOfScjkRaTb1GrFeGRwqFKd6V-hAg",children:"first part"}),"\xa0introduced puzzle towers for establishing a persistent identity in BFT blockchains. It concluded that using hash puzzles, practiced in PoW, would lead to an arms race in computing power leading to ASICs and mining pools. The goals are to avoid the arms race, to increase distribution, and additionally, the ideal puzzle should have the following properties:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Prevent creating significant advantage for high computing power"}),"\n",(0,o.jsx)(n.li,{children:"Instantaneous verification of the correctness of solved puzzle proofs"}),"\n",(0,o.jsx)(n.li,{children:"Work on a commodity machine without additional hardware"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"To address these issues, in Part 2 we investigate verifiable delay functions as a means of enhancing puzzle towers."}),"\n",(0,o.jsx)(n.h2,{id:"vdf-101",children:"VDF 101"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://eprint.iacr.org/2018/601.pdf",children:"Verifiable Delay Function"}),"(VDF) is one of the latest discoveries in cryptography, popularized by Dan Boneh, Joseph Bonneau, Benedikt Bunz, and Ben Fisch. It is a cryptographic primitive for providing a guarantee that a lower bound of time has elapsed."]}),"\n",(0,o.jsx)(n.p,{children:"VDFs are used to prove a delay in a verifiable manner. In other words, VDF slows things down by taking a specified number of steps to compute. VDFs satisfy two properties:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Sequentiality:"}),"\xa0One cannot parallelize their computation."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Uniqueness:"}),"\xa0Given an input, the output is unique and deterministic even though the proofs might vary."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"VDFs are composed of three functions:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"setup()"}),"\xa0- takes in system configurations and credentials to initialize."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"evaluate()"}),"\xa0- the delay function which takes\xa0",(0,o.jsx)(n.em,{children:"t"}),"\xa0sequential steps to compute."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"verify()"}),"\xa0- a Boolean function to verify the correctness of the output and proof."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The\xa0",(0,o.jsx)(n.em,{children:"evaluate()"}),"\xa0function is the delay function which takes\xa0",(0,o.jsx)(n.em,{children:"t"}),"\xa0sequential steps to compute and generates an output and a proof. In 2019, a\xa0",(0,o.jsx)(n.a,{href:"https://eprint.iacr.org/2018/601.pdf",children:"paper"}),"\xa0proposed a generalization of time-lock puzzles as a candidate for the\xa0",(0,o.jsx)(n.em,{children:"evaluate()"}),"\xa0function. The function is given as follows:\xa0",(0,o.jsx)(n.em,{children:"f(x) = [x^(2^t)]"})]}),"\n",(0,o.jsxs)(n.p,{children:["The final step in the VDF construction is the\xa0",(0,o.jsx)(n.em,{children:"verify()"}),"\xa0function, responsible for verifying the correctness of output and proofs. The candidates for\xa0",(0,o.jsx)(n.em,{children:"verify()"}),"\xa0were independently presented by\xa0",(0,o.jsx)(n.a,{href:"https://eprint.iacr.org/2018/623.pdf",children:"Wesolowski"}),"\xa0and\xa0",(0,o.jsx)(n.a,{href:"https://eprint.iacr.org/2018/627.pdf",children:"Pietrzak"}),"\xa0in 2020. The\xa0",(0,o.jsx)(n.a,{href:"https://eprint.iacr.org/2020/332",children:"implementation study"}),"\xa0states that the Pietrzak scheme is more efficient than Wesolowski as it takes less time to verify the correctness of the output and proofs."]}),"\n",(0,o.jsx)(n.p,{children:"This section isn't an in-depth guide to VDF; instead, it evaluates VDF for its use with puzzle towers by creating a cumulative proof of elapsed time. To conclude, VDFs can take an arbitrary amount of time to be computed, serving as proof of elapsed time, and one can verify the proofs almost instantaneously."}),"\n",(0,o.jsx)(n.h2,{id:"extending-the-puzzle-towers-with-vdfs",children:"Extending the Puzzle Towers with VDFs"}),"\n",(0,o.jsxs)(n.p,{children:["Puzzle towers prove the sequential work done. However, using PoW style puzzles gives undue advantage to better computational power. The design goal is to solve puzzles that prove work done or time elapsed. Several protocols have a variation on this, including\xa0",(0,o.jsx)(n.a,{href:"https://solana.com/solana-whitepaper.pdf",children:"Solana\u2019s Proof of History"}),"\xa0(PoH).\xa0Solana\u2019s white paper states that this approach needs all the steps in the sequence to be replayed for verifying correctness, which could be an expensive operation. VDFs help us establish an alternative to hash-based PoW that is both sequential and easy to verify. Currently, Chia uses VDFs in its core protocol, Proof of Time (PoT), to ensure consistency in block times."]}),"\n",(0,o.jsxs)(n.p,{children:["Simply put, delay towers are created by replacing the puzzle in the puzzle tower with VDFs. The delay towers are a sequential series of sequential work. Every miner in the network initializes their delay tower by running a\xa0",(0,o.jsx)(n.em,{children:"setup()"}),"\xa0function with their mnemonics and configurations. After setting up, the miner runs the\xa0",(0,o.jsx)(n.em,{children:"evaluate()"}),"\xa0function locally, and this is the delay component to produce output and a proof. Every miner sends proof as a transaction to the network. The validators verify the correctness of proofs submitted by miners using\xa0",(0,o.jsx)(n.em,{children:"verify()"}),"\xa0function. If valid, the validators update the miner state, i.e., increase the height of the delay tower for that miner and the hash of last verified proof on the blockchain. The miners need to use the hash of the previously verified proof as an input for evaluating the following proof, building a delay tower for that miner. As more and more proofs are submitted, the height of the delay tower for the miner rises. The height of the delay tower signals how long a miner has been mining proofs in the network, thus used for ranking the candidates for the validator set."]}),"\n",(0,o.jsx)(n.p,{children:"From the original design of puzzle towers, delay towers improves on:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Wasted cycles:"}),"\xa0Eliminating randomness leads to determinism in increasing the tower height. VDFs cannot be parallelized, and they do not benefit significantly from alternative hardware such as GPUs. With reduced computational requirements, there are minimal compute cycles and hence, lesser carbon emissions."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Distribution:"}),"\xa0Determinism leads to predictability for users not using specialized hardware, making it more inclusive."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Faster verification time:"}),"\xa0Given a proof, VDFs are quick to verify. The validators verify the correctness on-chain as part of the protocol with minimal resources."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This allows for a new Sybil resistance mechanism while overcoming the limitations of PoS based networks while bootstrapping a new permissionless blockchain ecosystem, with a fair shot at an equitable outcome for the participants over the course of history."}),"\n",(0,o.jsx)(n.h2,{id:"integration",children:"Integration"}),"\n",(0,o.jsx)(n.p,{children:"The delay tower in itself does not provide all the guarantees in isolation. The tower needs to be confirmed against a main blockchain regularly. With that in mind, many additional constraints can be added in smart contract logic, and even updated dynamically."}),"\n",(0,o.jsxs)(n.p,{children:["One could set many parameters, perhaps even dynamically, such as the lower bound of time to compute a proof. The VDF\xa0",(0,o.jsx)(n.em,{children:"evaluate()"}),"\xa0is configured to take 30 minutes to compute, and then\xa0",(0,o.jsx)(n.em,{children:"verify()"}),"\xa0takes around 260 milliseconds to validate correctness."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Time:"}),"\xa0Lower bound of of time to evaluate the VDF","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Increasing the threshold of time to an hour means that massive CPU harvesting attacks through zombie networks become infeasible since host systems are needed to be used for extended periods without the ability to parallelize the work."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Threshold of quantity:"}),"\xa0Too many or too few proofs.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"To prevent very few proofs being created a minimum threshold per period can be included."}),"\n",(0,o.jsx)(n.li,{children:"Likewise an arms race scenario can be disincentivized by having an upper bound on proofs submitted in a period for a given benefit (e.g. this could gate subsidies, or even prevent entry into the validator set if it goes beyond the ceiling)."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"External information into the preimage:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Similar to Chia Timelords, a block header can be included in each VDF such that the user needs to wait for a block header before submitting a proof. The sequential nature of puzzle towers means that any excess proof done while waiting for the block header will not be valid."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"There are some differences between a VDF (delay tower) and a proof-of-work puzzle (puzzle tower):"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Determinism - no randomness"}),"\n",(0,o.jsx)(n.li,{children:"Lower bound on time"}),"\n",(0,o.jsx)(n.li,{children:"No wasted cycles"}),"\n",(0,o.jsx)(n.li,{children:"Sequential - cannot be parallelized"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Delay towers based on VDF make it impossible to forge a tower in meaningfully less time than it took the original user, even for anyone with infinite capital and computational resources.\xa0",(0,o.jsx)(n.strong,{children:"This is a form of sybil resistance, we don't observe in any other system. A delay tower becomes a permissionless and non-forgeable identity which is fast to verify. These properties make a tower unique, scarce, and perhaps valuable in its own right."})]}),"\n",(0,o.jsx)(n.p,{children:"The following and final part of the article will discuss one implementation of delay towers."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"full-series",children:"Full Series"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://openlibra.blog/2021/11/01/delay-towers-part-0/",children:"A high-throughput chain with a fair launch"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://openlibra.blog/2021/11/05/delay-towers-part-1/",children:"Puzzle Towers for BFT"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://openlibra.blog/2021/11/08/delay-towers-part-2/",children:"From Puzzle Towers and VDFs to Delay Towers"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://openlibra.blog/2021/11/12/part-3-a-delay-towers-implementation-on-bft/",children:"Implementation on BFT"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);