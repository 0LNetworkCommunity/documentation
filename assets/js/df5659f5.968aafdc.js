"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[6441],{4443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"validators/rescue","title":"Rescue Missions","description":"TL;DR","source":"@site/docs/validators/rescue.md","sourceDirName":"validators","slug":"/validators/rescue","permalink":"/validators/rescue","draft":false,"unlisted":false,"editUrl":"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/rescue.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Start a Testnet","permalink":"/validators/testnet"},"next":{"title":"Archive","permalink":"/category/archive"}}');var o=r(4848),s=r(8453);const i={},a="Rescue Missions",c={},l=[{value:"TL;DR",id:"tldr",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"rescue-missions",children:"Rescue Missions"})}),"\n",(0,o.jsx)(t.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,o.jsxs)(t.p,{children:["The same tools used to manufacture on-chain governance proposals\n(",(0,o.jsx)(t.code,{children:"libra-framework"}),") are used to create governance scripts.\nThese scripts can be executed offline with db-bootstrapper via the ",(0,o.jsx)(t.code,{children:"rescue-cli"}),"\ntool here."]}),"\n",(0,o.jsx)(t.h1,{id:"framework-upgrades",children:"Framework upgrades"}),"\n",(0,o.jsx)(t.p,{children:"For now you need to craft a frankenstein TX by hand. A better tool could be\nbuilt, but a rescue operation is a rare occurrence and should be led by people\nfamiliar with the tools."}),"\n",(0,o.jsxs)(t.p,{children:["Creating the bytes for publishing a new/updated Move module is done by the\nlibra-framework tool;\nsimply ",(0,o.jsx)(t.code,{children:"cargo run upgrade"}),". You can see the instructions there to\ncreate new Move module compile artifacts."]}),"\n",(0,o.jsxs)(t.p,{children:["See an example in the test fixtures here.\nThis is one specific case of of an upgrade while a network is halted. We have\ncopied the bits from upgrade examples in\n",(0,o.jsx)(t.code,{children:"framework/src/upgrade_fixtures/fixtures/upgrade-multi-lib/3-libra-framework/sources/3-libra-framework.move"}),"\nthis file will include a test module: ",(0,o.jsx)(t.code,{children:"all_your_base.move"})]}),"\n",(0,o.jsx)(t.h1,{id:"hack-the-black-magic",children:"HACK THE BLACK MAGIC"}),"\n",(0,o.jsx)(t.p,{children:'When trying to bootstrap a db, and get a valid state transition, we need the transaction to emit a "reconfiguration event":\na reconfiguration event must:'}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"happen with timestamp not equal to previous reconfiguration"}),"\n",(0,o.jsx)(t.li,{children:'have a "touch" to validator set, whatever that means'}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(6540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);