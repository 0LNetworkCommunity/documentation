## From Puzzle Towers and VDFs to Delay Towers


## TL;DR


By extending puzzle towers with VDF, a delay tower becomes a permissionless and non\-forgeable identity which is fast to verify. This is a form of sybil resistance, we don't observe in any other system. A delay tower becomes a permissionless and non\-forgeable identity which is fast to verify. These properties make a delay tower unique, scarce, and perhaps valuable in its own right.


## Context


The [first part](https://siasky.net/EABaWAXFy3Ztx1vVIpOfScjkRaTb1GrFeGRwqFKd6V-hAg) introduced puzzle towers for establishing a persistent identity in BFT blockchains. It concluded that using hash puzzles, practiced in PoW, would lead to an arms race in computing power leading to ASICs and mining pools. The goals are to avoid the arms race, to increase distribution, and additionally, the ideal puzzle should have the following properties:


1. Prevent creating significant advantage for high computing power
2. Instantaneous verification of the correctness of solved puzzle proofs
3. Work on a commodity machine without additional hardware


To address these issues, in Part 2 we investigate verifiable delay functions as a means of enhancing puzzle towers.


## VDF 101


[Verifiable Delay Function](https://eprint.iacr.org/2018/601.pdf)(VDF) is one of the latest discoveries in cryptography, popularized by Dan Boneh, Joseph Bonneau, Benedikt Bunz, and Ben Fisch. It is a cryptographic primitive for providing a guarantee that a lower bound of time has elapsed.


VDFs are used to prove a delay in a verifiable manner. In other words, VDF slows things down by taking a specified number of steps to compute. VDFs satisfy two properties:


* **Sequentiality:** One cannot parallelize their computation.
* **Uniqueness:** Given an input, the output is unique and deterministic even though the proofs might vary.


VDFs are composed of three functions:


1. *setup()* \- takes in system configurations and credentials to initialize.
2. *evaluate()* \- the delay function which takes *t* sequential steps to compute.
3. *verify()* \- a Boolean function to verify the correctness of the output and proof.


The *evaluate()* function is the delay function which takes *t* sequential steps to compute and generates an output and a proof. In 2019, a [paper](https://eprint.iacr.org/2018/601.pdf) proposed a generalization of time\-lock puzzles as a candidate for the *evaluate()* function. The function is given as follows: *f(x) \= \[x^(2^t)]*


The final step in the VDF construction is the *verify()* function, responsible for verifying the correctness of output and proofs. The candidates for *verify()* were independently presented by [Wesolowski](https://eprint.iacr.org/2018/623.pdf) and [Pietrzak](https://eprint.iacr.org/2018/627.pdf) in 2020\. The [implementation study](https://eprint.iacr.org/2020/332) states that the Pietrzak scheme is more efficient than Wesolowski as it takes less time to verify the correctness of the output and proofs.


This section isn't an in\-depth guide to VDF; instead, it evaluates VDF for its use with puzzle towers by creating a cumulative proof of elapsed time. To conclude, VDFs can take an arbitrary amount of time to be computed, serving as proof of elapsed time, and one can verify the proofs almost instantaneously.


## Extending the Puzzle Towers with VDFs


Puzzle towers prove the sequential work done. However, using PoW style puzzles gives undue advantage to better computational power. The design goal is to solve puzzles that prove work done or time elapsed. Several protocols have a variation on this, including [Solana’s Proof of History](https://solana.com/solana-whitepaper.pdf) (PoH). Solana’s white paper states that this approach needs all the steps in the sequence to be replayed for verifying correctness, which could be an expensive operation. VDFs help us establish an alternative to hash\-based PoW that is both sequential and easy to verify. Currently, Chia uses VDFs in its core protocol, Proof of Time (PoT), to ensure consistency in block times.


Simply put, delay towers are created by replacing the puzzle in the puzzle tower with VDFs. The delay towers are a sequential series of sequential work. Every miner in the network initializes their delay tower by running a *setup()* function with their mnemonics and configurations. After setting up, the miner runs the *evaluate()* function locally, and this is the delay component to produce output and a proof. Every miner sends proof as a transaction to the network. The validators verify the correctness of proofs submitted by miners using *verify()* function. If valid, the validators update the miner state, i.e., increase the height of the delay tower for that miner and the hash of last verified proof on the blockchain. The miners need to use the hash of the previously verified proof as an input for evaluating the following proof, building a delay tower for that miner. As more and more proofs are submitted, the height of the delay tower for the miner rises. The height of the delay tower signals how long a miner has been mining proofs in the network, thus used for ranking the candidates for the validator set.


From the original design of puzzle towers, delay towers improves on:


* **Wasted cycles:** Eliminating randomness leads to determinism in increasing the tower height. VDFs cannot be parallelized, and they do not benefit significantly from alternative hardware such as GPUs. With reduced computational requirements, there are minimal compute cycles and hence, lesser carbon emissions.
* **Distribution:** Determinism leads to predictability for users not using specialized hardware, making it more inclusive.
* **Faster verification time:** Given a proof, VDFs are quick to verify. The validators verify the correctness on\-chain as part of the protocol with minimal resources.


This allows for a new Sybil resistance mechanism while overcoming the limitations of PoS based networks while bootstrapping a new permissionless blockchain ecosystem, with a fair shot at an equitable outcome for the participants over the course of history.


## Integration


The delay tower in itself does not provide all the guarantees in isolation. The tower needs to be confirmed against a main blockchain regularly. With that in mind, many additional constraints can be added in smart contract logic, and even updated dynamically.


One could set many parameters, perhaps even dynamically, such as the lower bound of time to compute a proof. The VDF *evaluate()* is configured to take 30 minutes to compute, and then *verify()* takes around 260 milliseconds to validate correctness.


* **Time:** Lower bound of of time to evaluate the VDF
	+ Increasing the threshold of time to an hour means that massive CPU harvesting attacks through zombie networks become infeasible since host systems are needed to be used for extended periods without the ability to parallelize the work.
* **Threshold of quantity:** Too many or too few proofs.
	+ To prevent very few proofs being created a minimum threshold per period can be included.
	+ Likewise an arms race scenario can be disincentivized by having an upper bound on proofs submitted in a period for a given benefit (e.g. this could gate subsidies, or even prevent entry into the validator set if it goes beyond the ceiling).
* **External information into the preimage:**
	+ Similar to Chia Timelords, a block header can be included in each VDF such that the user needs to wait for a block header before submitting a proof. The sequential nature of puzzle towers means that any excess proof done while waiting for the block header will not be valid.


## Conclusion


There are some differences between a VDF (delay tower) and a proof\-of\-work puzzle (puzzle tower):


* Determinism \- no randomness
* Lower bound on time
* No wasted cycles
* Sequential \- cannot be parallelized


Delay towers based on VDF make it impossible to forge a tower in meaningfully less time than it took the original user, even for anyone with infinite capital and computational resources. **This is a form of sybil resistance, we don't observe in any other system. A delay tower becomes a permissionless and non\-forgeable identity which is fast to verify. These properties make a tower unique, scarce, and perhaps valuable in its own right.**


The following and final part of the article will discuss one implementation of delay towers.




---


## Full Series


1. [A high\-throughput chain with a fair launch](http://openlibra.blog/2021/11/01/delay-towers-part-0/)
2. [Puzzle Towers for BFT](http://openlibra.blog/2021/11/05/delay-towers-part-1/)
3. [From Puzzle Towers and VDFs to Delay Towers](http://openlibra.blog/2021/11/08/delay-towers-part-2/)
4. [Implementation on BFT](http://openlibra.blog/2021/11/12/part-3-a-delay-towers-implementation-on-bft/)


