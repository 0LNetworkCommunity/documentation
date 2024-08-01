<h1>A Good List</h1> source: [https://github.com/0LNetworkCommunity/a-good-list/edit/main/README.md](https://github.com/0LNetworkCommunity/a-good-list/edit/main/README.md)

<h2>What</h2>

A Good List is a collection of addresses on 0L Network which will collect donations for named orgs. It also includes a "router" address which splits donations according to weight. The weight is updated on a monthly basis.

The addresses here are 0L addresses. This program may extend someday to other blockchains or assets.

<h2>Why</h2>

Blockchain engineers, operators, and other participants can make life-changing sums of money from early participation in new networks. Many individuals seek to automatically donate some of their rewards to organizations. Donating is hard to reason about, and ultimately leads to inaction.

This list makes it easy for an 0L miner to set "autopay" instructions to donate.

<h2>What donations are for</h2>

They go to entities on the list, to do what they see fit to do with them. The router is just a pass-through to the wallets of entities. Currently (April 2021) the automation of this process is a work in progress, see more below.

<h2>How does the router split the donations?</h2>

The router is initialized with an equal weight for all wallets. Every donation that comes in the first month is split evenly. The split for the subsequent months can be updated by the donors of the previous month.

The donors to the routing address can optionally submit on a monthly basis a ranked-choice-vote on the charities they prefer. The weights will be updated accordingly.

Donors can add orgs to the list. If a new org appears in 2/3rds of the ranked-choice votes, the name is added to the list.

Orgs can be removed from the list. As above, if 2/3rd of voters excludes an org from their votes, the name is removed from future finds received by the router. The wallets will appear elsewhere for historical reference.

<h2>Claiming the values in a wallet</h2>

Recipients: If you are an org named below, just reach out. We'll establish that you are, who you say you are, and you can take custody of the accounts.

Note to donors: There may be a scenario where a charity is incapable of claiming the wallet. If so, a reasonable policy would be to assume it is unclaimed property, and it can be distributed pro-rata to the other wallets which have been claimed. Let's say April 2022 is the window for claiming it.

<h2>Work in Progress (as of July 2021)</h2>

For expediency this project was started without any automation (no smart contract) at and this list and distribution is manually administered by Water & Stone LLC (a company involved in blockchain software development, including for 0L network). We do not intend to operate this program indefinitely. Until the smart contracts are developed formally donations are currently given to Water & Stone, and we submit 0L "autopay" transactions on a monthly basis to the wallets on the list. Water & Stone is taking no fee on these.

Currently Water & Stone has sole access to the custody platform for these wallets. We are seeking to transfer that to a third party (not Water & Stone) for long-term administration. Please reach out directly if you have a sustainable solution for custody and automation.

Water & Stone will mark this address as a “CommunityWallet” on chain. By that we mean:

- that we will only disburse funds after polling the community.
- funds will only be transferred to an 0L SlowWallet, which releases funds over time.
- we allow 2/3 of validators (by voting power) to vote to reject our transactions.
- if an epoch's validator set decides to sunset this account (burn values and make inaccessible) for any reason, we will oblige.

<h2>Disclaimer: </h2>

The charities below may not even be aware of the list, or of the wallet assigned to them. To be clear, do not assume any org on the list is endorsing: a) the list itself b) the 0L chain c) donors d) et cetera, et cetera.

---

<h1>The Router </h1>

Address: BCA50D10041FA111D1B44181A264A599

<h1>The List (alphabetical):</h1>

<table>
  <tr>
    <td>Name</td>
    <td>Address</td>
    <td>Weight</td>
  </tr>

{' '}
<tr>
  <td>Action against hunger</td>
  <td>06697386CDDABB634CEB0572D4423E34</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Acumen</td>
  <td>4858B43E3A68893B51AF12C6D6BB5FB0</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Amnesty International</td>
  <td>66BE7F0A8B34ADC4E00CCC11F531B2C0</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>BRAC</td>
  <td>C50E5252CDDD65785F038FF15FEC5D0A</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Care International</td>
  <td>D17AAA79DDD10CC3D96A16A135851638</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Danish Church Aid</td>
  <td>4D09392F4FBE6094FE8D281C58887B16</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Danish Refugee Council</td>
  <td>3D5EF9D9848D82C1FFD1F0C7183B1DA9</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Girls Who Code</td>
  <td>7407E489953A0F64E5D70A80CB1B5CAE</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Give Directly</td>
  <td>20DDE7374220DCBB89145704833A6FF3</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Give Well</td>
  <td>4CB31C687FD20DA3C2591B6DFC1F19F5</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Habitat for Humanity</td>
  <td>98DA3CB6553C8DE6DFC840F4FD3EE5AF</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Innovation Norway Humanitarian</td>
  <td>F9AE13D90338B5CA9B391B1626F0503D</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>International Committee of the Red Cross (ICRC)</td>
  <td>424428DB94430AA85EA9723E6C503B95</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>International Rescue Committee</td>
  <td>CD68A370A556F784256F9D35597328E8</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>The Life You Can Save - 90/10 Fund</td>
  <td>22DFEA36CE3456D80483BFF28E86910C</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Médecins Sans Frontières</td>
  <td>D3926848A6AFC26ACB3E08C5818BCEAF</td>
  <td>
    <p>1</p>
  </td>
</tr>

  <tr>
    <td>Mercy Corps</td>
    <td>68C88FA01E8F61353FF350991B3CEAB6</td>

    <td>
      <p>1</p>
    </td>

  </tr>

{' '}
<tr>
  <td>Open Society Foundations</td>
  <td>783590B8559522C7B105664FE5563AD0</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Oxfam</td>
  <td>63499CAA93631567891DB9AF279F2C5F</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Plan International</td>
  <td>572C43CD421F0E6DDFCFB0934EC4D5D1</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Save the Children</td>
  <td>A711D4E5E0B4FC661111FDC13488E740</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Team Humanity</td>
  <td>B989372FF8986BC7373C51688ED7C735</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Trust Alliance</td>
  <td>19CB71BD9864FB0CBC782CA293637D92</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Unicef</td>
  <td>672178939A5C97E7AFC23BFE3D8407BC</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Water.Org</td>
  <td>58AFC42F3CEF6CB79D669A0F0E75DC34</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>Women's World Banking</td>
  <td>8AFA0A41F7FCF9147C57991729B8FF20</td>
  <td>
    <p>1</p>
  </td>
</tr>

{' '}
<tr>
  <td>World Food Program</td>
  <td>4B1F1544A42FDD2F15F82A19704F3FC2</td>
  <td>
    <p>1</p>
  </td>
</tr>

  <tr>
    <td>World Wildlife Fund</td>
    <td>A72834D73B4A456CFFE4F5CE059F03E2</td>
    <td><p>1</p></td>
  </tr>
</table>
