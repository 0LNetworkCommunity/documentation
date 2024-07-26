
Growth requires challenge. 




There was plenty of such fuel over the last several weeks, challenging our community to run a functional and fair network that is more poised for growth. This announcement will detail what has happened, how we addressed it and how, along the way, we solved a number of different problems and improved prospects going forward.




On 9 April 2022, the 0L Network halted. Multiple factors combined to create the incident; factors that started small and cascaded until the entire network ceased to produce blocks. While the detailed causes and the technical forensics have been discussed at length in our community meetings, the important point to raise here is that the halt was avoidable – or rather would have been avoidable – had a sufficient number within our validator community been more attentive to their machines and taken steps in a timely fashion. Better coordination is a key learning derived from this event.




With the network stopped, the community decided to take the time to make some major changes and bring back a network that was better and stronger and more aligned to the broader community’s interests. **As you read this, the network is back, with a new set of features and a richer set of options for developers, Carpe miners, and the community as a whole.**




Among the enhancements we’ve launched with this new version of the 0L Network:




### **Carpe Enhancements**




Together with this network upgrade, we will shortly be releasing a new version of the Carpe wallet and desktop miner. With this release, Carpe will attain full wallet functionality, with the ability for users to send and receive coins using a standard wallet interface. The new release is in testing now and will be announced soon. The Internet of Value needs money in motion.




### **Make Whole**




With this upgrade, we have set up a methodology for Carpe miners to claim coins that were under\-paid to them in several past epochs due to a network bug. The Make Whole proposal has already been approved by the community, and we have set up a process that can be executed easily from inside Carpe to do so (you can learn more about this, and the new version of Carpe, once the release date is formalized).




### **Slow Wallets**




Slow wallet holders, particularly the members of our Hustle Karma workforce, will be pleased to learn that we have also used this upgrade to ease limitations on slow wallets. As of today, you can use your Carpe slow wallets to move coins! Daily transaction limits remain in place for slow wallets, at the level of 1,000 Libra per day. (Note that the daily transaction limit parameter is subject to adjustment by the community at a future date.) The goal is to balance active labor participation and value accrual with fair vesting and spending.




### **Recovery Tools**




A new set of recovery tools and workflows to make the network better able to recover from shocks in the future. There were a number of refactors to the writeset\-tool, which enables a halted network to apply transactions at rest to upgrade the state machine code, update validator set, trigger new epochs, and enter recovery mode. Future halts could have very minimal downtime if the root cause is found quickly.




## **Addressing the Larger Problem**




The tools and actions listed above are important and worth celebrating. However, we have a larger social issue that needs resolution – that is, the negative impact of passive validators. 




The recent outage shows the need to take action to better align validator incentives with the best interests of the broader 0L Network community. There is a very good argument that the recent network stoppage was less a technical problem than a problem of misalignment of incentives and expectations. We need to take steps to assure an engaged, professional validator set and we also need to change the competitive dynamics for validators in order to disincentivize passive validators. 




To tackle the first issue, we are implementing a new approach to validator set selection. At the launch of the network, validators were entitled to invite whomever they chose to join the validator set. The system had no checks in place, other than a rate limit on how frequently invitations could be issued. We initially counted on social pressure and common sense to guide our validators to select individuals or organizations who were able to manage their nodes to a professional level, and who would respect system requirements.  
  
Unfortunately, we now have experience showing that a more rigorous approach is needed. Indeed, the initial failures that began the cascade that led to the most recent network halt occurred first with the nodes that were under\-provisioned and not in line with our published system requirements. Those failures were then complicated by many of those validators failing to be responsive to their machines and take remedial steps to recover from the failure.




Going forward, we are layering in a “vouching” system for validator set selection. At every epoch the system will check that each validator entering the set has endorsement by at least 4 existing validators of different "ancestry" . We mitigate the sybil issues by checking that the vouches come from  different “family trees” (i.e., who onboarded them). Every epoch, you can only join the validator set if you have at least 4 peers known to be good actors vouching for you. To facilitate this requirement, we have created an onchain permission tree that makes it easy to trace the lineage of individual validators. 




### **Funding the Community via Proof of Burn**




The second issue – the competitive dynamics of the validator class – is somewhat more complex. The goal is to make the cost to exist as a validator higher, and thereby disincentivize passive validators (free riders). To accomplish this aim, we are making two changes.




First, we are putting in place a more expensive Proof of Burn mechanism. At launch, Proof of Burn was a fixed and insubstantial amount: Each validator was charged 1 coin per epoch to join the validator set. We also implemented a voluntary autopay function that encouraged validators to redirect a portion of their rewards to community wallets. The mechanism was 0L’s answer to how to capitalize the system’s growth and expansion in the absence of outside capital. 




By increasing the Proof of Burn we can also automate community wallet funding by making it simpler and more seamless for those who opt\-in. We’re increasing the burn from 1 coin to 50% of validator rewards. Those funds will be distributed each epoch among the community wallets based on donations to those wallets. Validators also have the option to give more than 50% if they wish, and if they do not want to divert the funds to the community wallets, they can elect to have the coins burned. Note that this change simply streamlines the autopay functionality that has been tested since the Genesis of the network.




Second, we are closing a loophole in the system’s capitalization game by making the Proof of Burn apply to both active and inactive validators. This approach not only helps provide critical network funding, it also incentivizes validators to participate in consensus in order to earn rewards and avoid the clawback of their previously earned coins. We expect this change to be controversial with some people and we have suspended the implementation of the Proof of Burn on inactive validators for 10 epochs. During that time, people can learn more about it and discuss. If there are substantial objections, the issue will be debated and revisited. 




The changes to the validator onboarding and economics may not be guaranteed to reach the desired state, but directionally, they move us closer to the goal: Engaged validators who are stewards of the chain. Implementation of new types of economic incentives and games (for example, delegation) could build on these changes, make the economics more interesting for Carpe miners, and also help disincentivize inattentive validators. 




## **Next Steps**




At present, the network is in Recovery Mode and Carpe miners are able to start the app and check balances and have minimal interactions, but not mine their Tower. Recovery Mode suspends all economic activity to allow for testing and network stabilization. (This also disincentivized actors from front\-running or otherwise taking advantage of skewed economics from network halts.) To be clear, while the network is in Recovery Mode no rewards are being paid to anyone – not even validators. One Saturday, 30 April, the network will open again for Carpe miners and we invite everyone to come back in.




Also, as noted above, the Proof of Burn on inactive validators is being held in abeyance until Epoch 185\. During that time, if there are objections to this approach, they need to be discussed in the community to determine whether action should be taken. 




## **In Conclusion**




Blockchain are infinite games. The game itself evolves and adapts. Passivity and paralysis are not an option.




**The 0L network is live and running, as is our global community working towards the mission of a transparent, participatory, liberating, open blockchain network for all. We have dealt with the challenges of the moment to create a stronger foundation for the future, and we will continue to evolve the technology, social contracts, and norms of the project to best accomplish such a mission. Your voice is heard. There are more rewards for Carpe miners, as well as a hard commitment for 50% of the funds to flow to community\-building wallets that reward participants that build along with us.**  





**Carpe diem. ✊☀️**


