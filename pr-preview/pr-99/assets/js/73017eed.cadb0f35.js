"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[5256],{6332:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=o(5893),i=o(1151);const r={},s=void 0,l={id:"archive/proposals/proposal_2210-7_donor-directed_community_wallets",title:"proposal_2210-7_donor-directed_community_wallets",description:"Proposal Type: Signalling",source:"@site/docs/archive/proposals/proposal_2210-7_donor-directed_community_wallets.md",sourceDirName:"archive/proposals",slug:"/archive/proposals/proposal_2210-7_donor-directed_community_wallets",permalink:"/pr-preview/pr-99/archive/proposals/proposal_2210-7_donor-directed_community_wallets",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/archive/proposals/proposal_2210-7_donor-directed_community_wallets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"proposal_2210-6_faucets_for_workers",permalink:"/pr-preview/pr-99/archive/proposals/proposal_2210-6_faucets_for_workers"},next:{title:"proposal_2210-8_infrastructure_escrow_funding",permalink:"/pr-preview/pr-99/archive/proposals/proposal_2210-8_infrastructure_escrow_funding"}},a={},c=[{value:"Proposal Type: Signalling",id:"proposal-type-signalling",level:6},{value:"Champion: TBD",id:"champion-tbd",level:6},{value:"Date: 12 October 2022",id:"date-12-october-2022",level:6},{value:"State: Draft / Work in Progress",id:"state-draft--work-in-progress",level:6},{value:"<strong>Context</strong>",id:"context",level:3},{value:"<strong>Synopsis</strong>",id:"synopsis",level:3},{value:"<strong>Impact of Voting YES on this Proposal</strong>",id:"impact-of-voting-yes-on-this-proposal",level:3},{value:"<strong>Impact of Voting NO on this Proposal</strong>",id:"impact-of-voting-no-on-this-proposal",level:3},{value:"<strong>Reference Materials:</strong>",id:"reference-materials",level:4}];function d(e){const n={h3:"h3",h4:"h4",h6:"h6",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h6,{id:"proposal-type-signalling",children:"Proposal Type: Signalling"}),"\n",(0,t.jsx)(n.h6,{id:"champion-tbd",children:"Champion: TBD"}),"\n",(0,t.jsx)(n.h6,{id:"date-12-october-2022",children:"Date: 12 October 2022"}),"\n",(0,t.jsx)(n.h6,{id:"state-draft--work-in-progress",children:"State: Draft / Work in Progress"}),"\n",(0,t.jsx)(n.h3,{id:"context",children:(0,t.jsx)(n.strong,{children:"Context"})}),"\n",(0,t.jsx)(n.p,{children:"This proposal is focused on improving alignment of community wallets through governance levers."}),"\n",(0,t.jsx)(n.p,{children:"As a reminder, all community wallets are owned by a real world entity, not by the chain. As such those real world entities have real world liabilities if they misuse the funds donated to them. This off chain governance layer is expensive and slow to catch problems. Smart contract capabilities can help create proper governance."}),"\n",(0,t.jsx)(n.p,{children:"Current Challenges:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Community wallets hold a great amount of coins, but most are inactive."}),"\n",(0,t.jsx)(n.li,{children:"There is a perception that community wallets are for enrichment of participants (not donor directed funds for growth)."}),"\n",(0,t.jsx)(n.li,{children:"Stopping Community wallets from misbehaving is hard."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"There's nothing the protocol can do to take money away from community wallets, or to censure certain wallets. Forking and removing certain coins can be done by the validator set, though this is politically impossible. What can be done is to correct some of the governance issues in the wallets; this proposal seeks to do that."}),"\n",(0,t.jsx)(n.h3,{id:"synopsis",children:(0,t.jsx)(n.strong,{children:"Synopsis"})}),"\n",(0,t.jsx)(n.p,{children:"There are five parts to this proposal to enhance Community Wallets.\xa0"}),"\n",(0,t.jsxs)(n.p,{children:["**1.**",(0,t.jsx)(n.strong,{children:"Implement Donor Direction"})]}),"\n",(0,t.jsx)(n.p,{children:'Typically within our community, the Community Wallets have been idealized and spoken about as being "donor directed". However we had no proper tracking on-chain of the donations to actually realize this vision. As an intermediary step, we said the validators would be the authorities over veto and freezing of these wallets. This was fine when there was a large overlap of donors and active validators, but today this has already diverged significantly.'}),"\n",(0,t.jsx)(n.p,{children:"We already have the donation tracking (the Receipts module) and with the v6 fork we can do two things to improve Community Wallet governance."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Confirm that the values are correct per donor account (and sum to the value of donations), and"}),"\n",(0,t.jsx)(n.li,{children:"Update the voting mechanism to use the Receipts module, thereby enabling the donors to have oversight over the expenditures rather than depending on action by the validator set."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["**2.**",(0,t.jsx)(n.strong,{children:"Inclusion in the Burn Index"})]}),"\n",(0,t.jsx)(n.p,{children:"Additionally, with the v6 fork we can also add Community Wallets to the Burn Index, which will give every account in 0L the option to have their costs (burns) be recycled to an index of community wallets.\xa0"}),"\n",(0,t.jsxs)(n.p,{children:["**3.**",(0,t.jsx)(n.strong,{children:"Optimization of Voting Thresholds"})]}),"\n",(0,t.jsx)(n.p,{children:"Since participation is low in community wallets and the monitoring tools are lacking, the voting thresholds for rejecting and ultimately freezing wallets should be lowered."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A community wallet transaction should be rejected if 1/6th of the donors disapprove with a veto. Three consecutive Vetos would mean freezing of the account, no changes there."}),"\n",(0,t.jsx)(n.li,{children:"There was no way to directly freeze a wallet. A wallet can also be frozen if 1/6th of the donors choose to do so. And can be unfrozen if 2/6th of the donors choose to do so."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4."})," ",(0,t.jsx)(n.strong,{children:"Define A Community Wallet as a Donor Directed Wallet with a Multisig"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The new Policy would be: For a community wallet to be included in the Burn Index, and for unrestricted transactions from Transfer and Autopay functionality, the wallet will have to have a minimum of 3 of 4 multisig. The multisig will be implemented in the Donor Directed contract (as opposed to by off-chain signing wallets)."}),"\n",(0,t.jsx)(n.li,{children:"Multisig signers for Community Wallets must have a threshold number of addresses that are unrelated (from different Ancestry in the permission trees)."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"5"}),". ",(0,t.jsx)(n.strong,{children:"Create tools for monitoring and reacting to community wallets"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Build monitoring and reporting into 0LExplorer.io"}),"\n",(0,t.jsx)(n.li,{children:"Create interactive reports on Carpe"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"impact-of-voting-yes-on-this-proposal",children:(0,t.jsx)(n.strong,{children:"Impact of Voting YES on this Proposal"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Community Wallet policies will be changed to correct their behavior such that they are actually donor directed, and that they use multisigs for transaction approval."}),"\n",(0,t.jsx)(n.li,{children:"Developers would be funded to create the code in line with the 5 changes outlined, above."}),"\n",(0,t.jsx)(n.li,{children:"Carpe and 0L Explorer developers should be funded to create monitoring tools."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"impact-of-voting-no-on-this-proposal",children:(0,t.jsx)(n.strong,{children:"Impact of Voting NO on this Proposal"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Community Wallets will continue to have low oversight by the people and entities that funded them."}),"\n",(0,t.jsx)(n.li,{children:"It will be difficult to catch one bad actor who abuses the Burn Match Index mechanism, since it doesn't require a diverse multisig, and there are no monitoring tools."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"reference-materials",children:(0,t.jsx)(n.strong,{children:"Reference Materials:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"n/a"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes on Process"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This document is a Draft / Work in Progress. It will change until marked as FINAL. ",(0,t.jsx)(n.strong,{children:"The closing date for revisions is 15 October."})]}),"\n",(0,t.jsx)(n.li,{children:"Publication here is an invitation for community collaboration and co-creation."}),"\n",(0,t.jsxs)(n.li,{children:["To engage on this content, visit the ",(0,t.jsx)(n.strong,{children:"#governance-proposals"})," channel on the 0L Discord (link at bottom right)"]}),"\n",(0,t.jsxs)(n.li,{children:["Once this Proposal is finalized, it will be the subject of Voting on the Radical X Change platform. If you do not yet have credentials, visit the ",(0,t.jsx)(n.strong,{children:"#rxc-voice-discussion"})," channel on the 0L Discord and make a request to join."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Voting opens 17 Oct and closes 22 Oct"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>s});var t=o(7294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);