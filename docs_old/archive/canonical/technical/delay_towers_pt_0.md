## A high\-throughput chain with a fair launch


## TL;DR


A fair launch of a high\-throughput layer\-1 blockchain is happening.


You won't need to buy anything or otherwise pay a centralized organization for access. The goal is to create a new standard in blockchain bootstrapping through Delay Towers.


There's a new layer\-1 chain that wants to exist. It wants to have these characteristics:


* High\-throughput
* Faster finality time
* Fair launch
* Establishing a persistent identity
* Permissionless access
* Engender decentralization
* Regulatory certainty


Centralized launches of Proof of Stake networks are an unsatisfactory strategy for bootstrapping a community\-led public good. No disrespect meant to projects that have launched in such a way, there was just no credible technical alternative, possibly until now.


## The Tradeoff


If you are looking for a blockchain with fast finality, you are likely evaluating a derivative of the Byzantine Fault Tolerance (BFT) consensus system. Research on BFT consensus has progressed from designs requiring multiple rounds of communication to finalize a block, up to the latest breakthroughs of "consensus linearity" and "pipelining", which produce systems where the throughput is limited only by the network connection latency.


To achieve the benefits of BFT, the networks require establishing identities for validators to participate in the consensus protocol. Currently, most blockchains rely on either of these: Proof of Authority (PoA) for private consortia and Proof of Stake (PoS) for permissionless environments. PoA lacks credible neutrality due to centralized validator membership control, and PoS suffers from a lack of diversity of participants and high inequality while raising numerous significant regulatory concerns. The novel Delay Towers are an alternative mechanism to establish persistent identity in permissionless environments.


## Delay Towers


Delay Towers are a Proof of Elapsed Time to build persistent identities. Drawing inspiration from the paper ["Sybil\-resistant network identities from dedicated hardware"](https://docs.google.com/document/d/1eRTAe3szuIoZEloHvRMtZlrU7t2un4UVQ8LarpU3LNk/edit?usp=sharing)by Dominic Williams, the proposed design extends the idea of "puzzle towers" with [Verifiable Delay Functions (VDFs)](https://eprint.iacr.org/2018/601.pdf)VDFs are cryptographic primitives for providing a guarantee that a lower bound of time has elapsed.


In this protocol every node in a network has a Delay Tower, which is composed of linearly chained proofs. A chain of Delay Tower blocks produces a guarantee of cumulative work done by a node in the network. Each proof extends from the previous one (using one proof as the preimage to the next block), building the tower "higher"; creating a series of sequential proofs of work. Unlike traditional Proof of Work puzzle algorithms that are parallelizable and probabilistic, "mining" a Delay Tower is sequential and deterministic. Since VDFs cannot be parallelized, they do not benefit significantly from alternative hardware such as GPUs. The delay towers enable persistent identities by providing a permissionless and non\-forgeable identity for miners.


Delay Towers establish an identity for miners, and can be used as a metric to quantify a node's commitment to a network, and subsequently rank it for the purpose of choosing inclusion in the validator quorum at every epoch. This is achievable, in part due to a significant cost to participate in the network. One has to dedicate resources to build their towers and a high exit penalty to recreate their identity due to lost work. And the cost goes up over time as all nodes continue to extend their towers.


It is not feasible to apply infinite money or resources to forge a tower, the time taken cannot meaningfully be reduced. A forgery will take approximately the same amount of time as the original. As such, a Delay Tower becomes a permissionless and non\-forgeable identity that is fast to verify; valuable in its own right.


## The Experiment


An experimental network ran successfully for nearly 1 year without interruption. It used a Delay Tower protocol for assigning consensus power for a modern BFT blockchain architecture. This is the first publication in a series of articles which will summarize the protocol, and discuss the attractive features that were observed in the experiment, such as:


* Providing persistent identity which aids in Sybil resistance in BFT consensus.
* Offer a more diverse distribution than usual, to anyone with minimal computational resources.
* Levelling the playing field, with a linear function the advantage of the miners at genesis goes down over time.
* With minimal computations and no wasted cycles, delay towers offer an eco\-friendly alternative to PoW approaches.
* Offering a mechanism to bootstrap a BFT network without selling tokens (ICOs), venture\-backed foundations, or airdrops.


## To be continued


Instructions for mining the new chain will materialize in the coming weeks. 




---


## Full Series


1. [A high\-throughput chain with a fair launch](http://openlibra.blog/2021/11/01/delay-towers-part-0/)
2. [Puzzle Towers for BFT](http://openlibra.blog/2021/11/05/delay-towers-part-1/)
3. [From Puzzle Towers and VDFs to Delay Towers](http://openlibra.blog/2021/11/08/delay-towers-part-2/)
4. [Implementation on BFT](http://openlibra.blog/2021/11/12/part-3-a-delay-towers-implementation-on-bft/)


