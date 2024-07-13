"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[9173],{3158:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=t(5893),l=t(1151);const i={title:"VFN yaml example",id:"vfn-yaml"},o="VFN Example YAML",r={id:"validators/yaml-templates/vfn-yaml",title:"VFN yaml example",description:"~/.libra/vfn.yaml",source:"@site/docs/validators/yaml-templates/vfn-yaml.md",sourceDirName:"validators/yaml-templates",slug:"/validators/yaml-templates/vfn-yaml",permalink:"/validators/yaml-templates/vfn-yaml",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/yaml-templates/vfn-yaml.md",tags:[],version:"current",frontMatter:{title:"VFN yaml example",id:"vfn-yaml"},sidebar:"tutorialSidebar",previous:{title:"Validator yaml example",permalink:"/validators/yaml-templates/validator-yaml"},next:{title:"Rescue Missions",permalink:"/validators/rescue"}},s={},d=[{value:"~/.libra/vfn.yaml",id:"libravfnyaml",level:3}];function m(e){const n={code:"code",h1:"h1",h3:"h3",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"vfn-example-yaml",children:"VFN Example YAML"}),"\n",(0,a.jsx)(n.h3,{id:"libravfnyaml",children:"~/.libra/vfn.yaml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"base:\n  role: 'full_node'\n  data_dir: '/home/vfnuser/.libra/data'\n  waypoint:\n    from_file: '/home/vfnuser/.libra/genesis/waypoint.txt'\n\nexecution:\n  genesis_file_location: '/home/vfnuser/.libra/genesis/genesis.blob'\n\nfull_node_networks:\n- network_id:\n    private: 'vfn'\n  listen_address: '/ip4/0.0.0.0/tcp/6181'\n  discovery_method: 'onchain'\n  seeds:\n    1234yourvalidatorpublickey:\n      addresses:\n      - '/ip4/<validator_ip>/tcp/6181/noise-ik/0x1234yourvalidatorpublickey/handshake/0'\n      role: 'Validator'\n- network_id: 'public'\n  listen_address: '/ip4/0.0.0.0/tcp/6182'\n  discovery_method: 'onchain'\n  identity:\n    type: 'from_file'\n    path: '/home/vfnuser/.libra/validator-full-node-identity.yaml'\n\napi:\n  enabled: true\n  address: '0.0.0.0:8080'\n\nmempool:\n  default_failovers: 3\n"})})]})}function c(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var a=t(7294);const l={},i=a.createContext(l);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);