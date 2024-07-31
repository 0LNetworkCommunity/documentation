
###### Proposal Type: Signalling




###### Champion: 0o\-de\-lally




###### Date: 13 October 2022




###### State: Draft / Work in Progress




### **Context**




As an alternative to the (near\-universally deployed) Delegated Proof of Stake we propose a sybil resistance technique designed natively for the benefits and tradeoffs of PBFT consensus, we call that system Proof\-of\-Fee (PoF). This proposal seeks to replace the Delay Towers mechanism currently in place with Proof\-of\-Fee. 




Profits to blockchains are slim to non\-existent. Low consensus costs are foundational for any chain that wishes to provide consumer surplus and profit to coin\-holders; where excess winnings of the chain can be distributed to *all* account holders, that is, without preference to an investor class of "stakers". In PoF, the cost of consensus is lowered maximally to the *operator opportunity cost*, and such that the social cost (of dilution through issuance) is minimized.




Validator seats are auctioned at each epoch, such that the validators private valuation of rewards, MEV, breakage, and governance is revealed. PoF coins have superior ergonomics. Every actor has a very simple instruction; no staking, no yield games, no slashing. Holding the coin is the dominant strategy.




### **Synopsis**




Proof of Fee partially replaces the current security model of 0L, by introducing novel economic guarantees layered with the validator admission through Vouches and Jail reputation.




The proposal has two parts:




1. Define a new validator incentives mechanism, and
2. Replace Delay Towers with Proof of Fee.




Here’s how each part works:




**Part 1: Define a New Validator Incentives Structure (i.e., determining how much is paid)**




* 0L will shift from the algorithmic calculation of validator incentives that we presently employ, to a fee that is a percentage of the total supply. The percentage is stable across epochs.
* Each successful validator will receive an equal amount as other validators in incentives each epoch.
* The amount of the fee is a parameter subject to governance action (and hence is adjustable on vote by the community).
* The amount should be minimal (e.g., single digit percentages of the total supply per year) yet designed to provide adequate incentives for validators to secure and maintain a reliable network.
* Incentives will be paid from the Infrastructure Escrow community wallet (see, Proposal 2210\-1\)




**Part 2: Implement Proof of Fee  (i.e., determining who gets to be paid)**




Proof of Fee creates a competitive auction mechanism to pick who gets to participate in the validator set each epoch. Here’s an overview of how it works, a thorough paper is forthcoming:




* At the beginning of each epoch, all validators who wish to participate in the epoch will place a bid (an Entry Fee).
* There is a limit to the number of validators in an epoch, the ones with the highest bids will enter the epoch.
* Validator consensus power is determined by the entry fee.
* Each validator bids their highest entry fee, with the expectation of receiving a flat fee at the end of a successful epoch.
* The initial proposed auction type is a Generalized Second Price Auction (a variation of the Nth Price Auction), which means the validator doesn't pay their maximum bid, but the bid of the next person immediately below them. (note: Future variations on this auction are possible and should be explored)
* Bids in excess of the pre\-defined validator incentive for that epoch (i.e., a negative bid) will be permitted, within limits (e.g. 110% of the reward). The limit is a parameter subject to governance action (and hence is adjustable on vote by the community)
* At completion of the epoch, the pre\-defined incentive amount will be paid to all validators that successfully completed the epoch. (The entry fee was already be paid thus, the net reward to a validator will be: Gross Incentive \- Entry Fee \= Net Amount Received by Each Validator)




All actions will be included in the Version 6 upgrade to the Protocol.




### **Impact of Voting YES on this Proposal**




A vote of YES on this proposal will signal to the Engineering Team and the Validator set the community’s desire to enact the following changes in the Version 6 Protocol Upgrade:




1. Create new epoch reward amount, with parameter for governance,
2. If Final Supply proposal passes, then the validator reward will be extracted from the Infrastructure Escrow community wallet (no new coins will be minted).
3. Disable Delay Towers for Validator Sybil Resistance Purposes.
4. Implement Proof of Fee with all necessary dependencies




### **Impact of Voting NO on this Proposal**




A vote of NO on this proposal will reject all parts of this proposal and retain the Delay Towers mechanism that is currently in place.




* The author(s) believe that revision of our current approach to consensus is essential for the community, so in the event that you choose to vote against this proposal, we welcome you to engage with the community to collaborate on the creation of a policy that is acceptable to the community at large.




### **Special Notes:**




* Note that this is a signalling proposal and therefore does not directly impact the chain; subsequent action is required to implement these changes.
* The outcomes of this proposal can be modified by the community via a subsequent proposal and vote




### **Reference Materials:**




* See also, Proposal 2210\-1, Final Supply, for an explanation of the Infrastructure Escrow Community Wallet




#### **Notes on Process**




* This document is a Draft / Work in Progress. It will change until marked as FINAL. **The closing date for revisions is 15 October.**
* Publication here is an invitation for community collaboration and co\-creation.
* To engage on this content, visit the **\#governance\-proposals** channel on the 0L Discord (link at bottom right)
* Once this Proposal is finalized, it will be the subject of Voting on the Radical X Change platform. If you do not yet have credentials, visit the **\#rxc\-voice\-discussion** channel on the 0L Discord and make a request to join.
* **Voting opens 17 Oct and closes 22 Oct**


