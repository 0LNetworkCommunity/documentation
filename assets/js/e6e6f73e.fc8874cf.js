"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[8498],{3352:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"core-devs/governance-fixtures","title":"Governance fixtures","description":"To test governance scripts and framework upgrade we place","source":"@site/docs/core-devs/governance-fixtures.md","sourceDirName":"core-devs","slug":"/core-devs/governance-fixtures","permalink":"/core-devs/governance-fixtures","draft":false,"unlisted":false,"editUrl":"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/core-devs/governance-fixtures.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Move Formal Verification","permalink":"/core-devs/formal-verification"},"next":{"title":"0L Move Coding Conventions","permalink":"/core-devs/move-coding-conventions"}}');var o=r(4848),s=r(8453);const c={},i="Governance fixtures",a={},l=[{value:"generate a noop governance script",id:"generate-a-noop-governance-script",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"governance-fixtures",children:"Governance fixtures"})}),"\n",(0,o.jsxs)(n.p,{children:["To test governance scripts and framework upgrade we place\ntests in ",(0,o.jsx)(n.code,{children:"tools/txs/tests"})," and fixture scripts in ",(0,o.jsx)(n.code,{children:"tools/txs/tests/fixtures"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To generate these fixtures we use the ",(0,o.jsx)(n.code,{children:"libra-framework cli"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"generate-a-noop-governance-script",children:"generate a noop governance script"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"A template Move script package must exist. The CLI can create a template."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"cd libra-framework\ncargo r governance --script-dir ../tools/txs/tests/fixtures --framework-local-dir ./libra-framework --only-make-template\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Don't make changes to this file. It should compile as-is. Run the cli tool again."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"cd libra-framework\ncargo r governance --script-dir ../tools/txs/tests/fixtures/governance_script_template --framework-local-dir ./libra-framework\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"check the files are as expected\nYou should have"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"../tools/txs/tests/fixtures/governance_script_template/\n|\n+ - /sources/\n|   |\n|   +-- governance_script_template.move\n+ - Move.toml\n+ - script_sha3 // hash of the script needed for authorization\n+ - script.mv // compiled script which is submitted\n"})}),"\n",(0,o.jsx)(n.p,{children:"You're done."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(6540);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);