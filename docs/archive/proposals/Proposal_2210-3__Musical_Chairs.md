
###### Proposal Type: Signalling




###### Champion: TBD




###### Date: 10 October 2022




###### Status: Draft / Work in Progress




### **Context**




0L hasn't attempted to use Proof of Stake to filter malicious actors. Historically, we have had multiple layers of sybil resistance to prevent a malicious actor from amplifying attacks by multiplying the nodes they have access to. Vouches, social dynamics, and Delay Towers all work collectively to provide some resistance to bad actors. The mechanisms implemented to date have been sufficient for bootstrapping but are likely to prove inadequate at steady state.




The current design of 0L makes it such that validators compete less among themselves as the count of nodes expands. For example, at 60 seats, the next epoch will have 10 slots open (the network always makes ⅙ the number of seats available). This means the competition is lower as the network progressively increases, which may be counter to the needs of the network. Meaning: when the validator set is large, the performance in TPS goes down, and better higher\-quality validators are needed (not more seats with validators of unknown quality). Also when the set is large, it may also intersect with be that demand for the network services being are high. In those cases we want more, or at least the same, amount of competition.




The validator set needs to be optimized for both performance and reliablility. The current selection process utilized by 0L optimizes for neither of those attributes, being based instead, on purely numerical conditions. A revised approach could advance both performance and reliability. 




It is expected that implementing the process described in this proposal will result in:




1. Greater competition
2. Higher performance in vulnerable conditions
3. Lower costs to the network
4. Competition at any size




We expect validator selection to be more competitive than the current design. By reducing the ⅙ expansion criteria to a fixed 1 seat, only when perfect performance is achieved by the collective, then we expect that there will be greater competition for the validator set.




Performant validators are not guaranteed a position, except when the network is vulnerable. In the case of subsequent reductions in the validator set because of extrinsic factors, the validator set progressively reduces to the most performant nodes, before becoming competitive again.




What Musical Chairs modifies, is that in a shrinking event, the validators which performed are guaranteed a seat. But as soon as a new seat opens up, then all validators must again compete on price (Delay Towers or Proof of Fee proposal)




### **Synopsis**




With musical chairs, the validator set has no maximum limit. Whatever it's size (M) it is currently at its limit. Validators compete for seats through normal mechanism (Tower height) or a different cost (Proof of Fee), when the validator set is performant.




Whenever the validator set has perfect performance by all nodes, the set can increase by 1 seat (M \+ 1\). No validators are guaranteed a seat when the seat count is stable or growing. They compete on the lowest cost of service provided (cost of consensus). In the event of a validator set where one node did not perform (M \- 1\), then the next epoch will include all the performant validators LESS the one non\-performing (the new size is M \- 1\).




There key attributes of Musical Chairs are:




1. The validator set has no fixed upper bound of validator seats (i.e., no longer fixed at 100\).
2. The validator set only expands if every member of the validator set performed above threshold \- and then it only increases by 1 seat.
3. If any validator(s) did not perform, the validator set is reduced by the size of the non\-performing validator(s) \- and the expansion begins again.
4. In a shrunk validator set, all of the performant validators are allowed to remain, though if the validator set resumes increasing, they must compete on cost.




All actions will be included in the Version 6 upgrade to the Protocol.




A vote of YES on this proposal will signal to the Engineering Team and the Validator set the community’s desire to enact the following changes in the Version 6 Protocol Upgrade:




### **Impact of Voting YES on this Proposal**




1. Create the Musical Chairs functionality and all necessary dependencies
2. Disable the present validator selection set methodology
3. Implement Musical Chairs




### **Impact of Voting NO on this Proposal**




A vote of NO on this proposal will reject all parts of this proposal and retain the validator set sizing mechanism that is currently in place.




* The author(s) believe that revision of our current approach to validator set sizing is essential for the community, so in the event that you choose to vote against this proposal, we welcome you to engage with the community to collaborate on the creation of a policy that is acceptable to the community at large.




### **Special Notes:**




* Note that this is a signalling proposal and therefore does not directly impact the chain; subsequent action is required to implement these changes.
* The outcomes of this proposal can be modified by the community via a subsequent proposal and vote




### **Reference Materials:**




* See also, Proposal 2210\-2, Final Supply, for an explanation of Proof of Fee, which is closely related to this proposal




#### **Notes on Process**




* This document is a Draft / Work in Progress. It will change until marked as FINAL. The closing date for revisions is 15 October.
* Publication here is an invitation for community collaboration and co\-creation.
* To engage on this content, visit the **\#governance\-proposals** channel on the 0L Discord (link at bottom right)
* Once this Proposal is finalized, it will be the subject of Voting on the Radical X Change platform. If you do not yet have credentials, visit the **\#rxc\-voice\-discussion** channel on the 0L Discord and make a request to join.
* **Voting opens 17 Oct and closes 22 Oct**


