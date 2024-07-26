
###### Proposal Type: Signalling




###### Champion: TBD




###### Date: 12 October 2022




###### State: Draft / Work in Progress




### **Context**




This proposal is focused on improving alignment of community wallets through governance levers.




As a reminder, all community wallets are owned by a real world entity, not by the chain. As such those real world entities have real world liabilities if they misuse the funds donated to them. This off chain governance layer is expensive and slow to catch problems. Smart contract capabilities can help create proper governance.




Current Challenges:




* Community wallets hold a great amount of coins, but most are inactive.
* There is a perception that community wallets are for enrichment of participants (not donor directed funds for growth).
* Stopping Community wallets from misbehaving is hard.




There's nothing the protocol can do to take money away from community wallets, or to censure certain wallets. Forking and removing certain coins can be done by the validator set, though this is politically impossible. What can be done is to correct some of the governance issues in the wallets; this proposal seeks to do that.




### **Synopsis**




There are five parts to this proposal to enhance Community Wallets. 




**1\.****Implement Donor Direction**




Typically within our community, the Community Wallets have been idealized and spoken about as being "donor directed". However we had no proper tracking on\-chain of the donations to actually realize this vision. As an intermediary step, we said the validators would be the authorities over veto and freezing of these wallets. This was fine when there was a large overlap of donors and active validators, but today this has already diverged significantly.




We already have the donation tracking (the Receipts module) and with the v6 fork we can do two things to improve Community Wallet governance.




* Confirm that the values are correct per donor account (and sum to the value of donations), and
* Update the voting mechanism to use the Receipts module, thereby enabling the donors to have oversight over the expenditures rather than depending on action by the validator set.




**2\.****Inclusion in the Burn Index**




Additionally, with the v6 fork we can also add Community Wallets to the Burn Index, which will give every account in 0L the option to have their costs (burns) be recycled to an index of community wallets. 




**3\.****Optimization of Voting Thresholds**




Since participation is low in community wallets and the monitoring tools are lacking, the voting thresholds for rejecting and ultimately freezing wallets should be lowered.




* A community wallet transaction should be rejected if 1/6th of the donors disapprove with a veto. Three consecutive Vetos would mean freezing of the account, no changes there.
* There was no way to directly freeze a wallet. A wallet can also be frozen if 1/6th of the donors choose to do so. And can be unfrozen if 2/6th of the donors choose to do so.




**4\.** **Define A Community Wallet as a Donor Directed Wallet with a Multisig**




* The new Policy would be: For a community wallet to be included in the Burn Index, and for unrestricted transactions from Transfer and Autopay functionality, the wallet will have to have a minimum of 3 of 4 multisig. The multisig will be implemented in the Donor Directed contract (as opposed to by off\-chain signing wallets).
* Multisig signers for Community Wallets must have a threshold number of addresses that are unrelated (from different Ancestry in the permission trees).




**5**. **Create tools for monitoring and reacting to community wallets**




* Build monitoring and reporting into 0LExplorer.io
* Create interactive reports on Carpe




### **Impact of Voting YES on this Proposal**




1. Community Wallet policies will be changed to correct their behavior such that they are actually donor directed, and that they use multisigs for transaction approval.
2. Developers would be funded to create the code in line with the 5 changes outlined, above.
3. Carpe and 0L Explorer developers should be funded to create monitoring tools.




### **Impact of Voting NO on this Proposal**




1. Community Wallets will continue to have low oversight by the people and entities that funded them.
2. It will be difficult to catch one bad actor who abuses the Burn Match Index mechanism, since it doesn't require a diverse multisig, and there are no monitoring tools.




#### **Reference Materials:**




* n/a




**Notes on Process**




* This document is a Draft / Work in Progress. It will change until marked as FINAL. **The closing date for revisions is 15 October.**
* Publication here is an invitation for community collaboration and co\-creation.
* To engage on this content, visit the **\#governance\-proposals** channel on the 0L Discord (link at bottom right)
* Once this Proposal is finalized, it will be the subject of Voting on the Radical X Change platform. If you do not yet have credentials, visit the **\#rxc\-voice\-discussion** channel on the 0L Discord and make a request to join.
* **Voting opens 17 Oct and closes 22 Oct**


