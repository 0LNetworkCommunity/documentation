
## What




A Good List is a collection of addresses on 0L Network which will collect donations for named orgs. It also includes a “router” address which splits donations according to a weight. The weight is updated on a monthly basis. The addresses here are 0L addresses. This program may extend someday to other blockchains or assets.




## Why




Blockchain engineers, operators, and other participants can make life\-changing sums of money from early participation in new networks. Many individuals seek to automatically donate some of their rewards to organizations. Donating is hard to reason about, and ultimately leads to inaction. This list makes it easy for an 0L miner to set “autopay” instructions to donate.




## What donations are for




They go to entities on the list, to do what they see fit to do with them. The router is just a pass\-through to the wallets of entities. Currently the automation of this process is a work in progress, see more below.




## How does the router split the donations?




The router is initialized with an equal weight for all wallets. Every donation that comes in the first month is split evenly. The split for the subsequent months can be updated by the donors of the previous month. The donors to the routing address can optionally submit on a monthly basis a ranked\-choice\-vote on the charities they prefer. The weights will be updated accordingly.




Donors can add orgs to the list. If a new org appears in 2/3rds of the ranked\-choice votes, the name is added to the list. Orgs can be removed from the list. As above, if 2/3rd of voters exclude an org from their votes, the name is removed from future finds received by the router. The wallets will appear elsewhere for historical reference.




## Claiming the values in a wallet




Note to donors: There may be a scenario where a charity is incapable of claiming the wallet. If so, a reasonable policy would be to assume it is unclaimed property, and it can be distributed pro\-rata to the other wallets which have been claimed. Let’s say April 2022 is the window for claiming it.




## Work in Progress




For expediency this project was started without any automation (no smart contract) at and this list and distribution is manually administered. Until the smart contracts are developed formally, donations are currently given to a custodial address and “autopay” transactions are submitted on a monthly basis to the wallets on the list. The custodian is taking no fee on transactions for A Good List.




This address is marked as a “CommunityWallet” on chain. By that we mean:




* that we will only disburse funds after polling the community.
* funds will only be transferred to an 0L SlowWallet, which releases funds over time.
* we allow 2/3 of validators (by voting power) to vote to reject our transactions.
* if an epoch’s validator set decides to sunset this account (burn values and make inaccessible) for any reason, we will oblige.


