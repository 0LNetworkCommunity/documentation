"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[9620],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),d=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),c=r,y=p["".concat(m,".").concat(c)]||p[c]||s[c]||l;return a?n.createElement(y,o(o({ref:t},u),{},{components:a})):n.createElement(y,o({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7028:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={title:"Validator yaml example",id:"validator-yaml"},o="Validator YAML File Example",i={unversionedId:"validators/yaml-templates/validator-yaml",id:"validators/yaml-templates/validator-yaml",title:"Validator yaml example",description:"validator.yaml",source:"@site/docs/validators/yaml-templates/validator-yaml.md",sourceDirName:"validators/yaml-templates",slug:"/validators/yaml-templates/validator-yaml",permalink:"/documentation/validators/yaml-templates/validator-yaml",draft:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/yaml-templates/validator-yaml.md",tags:[],version:"current",frontMatter:{title:"Validator yaml example",id:"validator-yaml"},sidebar:"tutorialSidebar",previous:{title:"Fullnode yaml example",permalink:"/documentation/validators/yaml-templates/fullnode-yaml"},next:{title:"VFN yaml example",permalink:"/documentation/validators/yaml-templates/vfn-yaml"}},m={},d=[{value:"validator.yaml",id:"validatoryaml",level:3}],u={toc:d},p="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validator-yaml-file-example"},"Validator YAML File Example"),(0,r.kt)("h3",{id:"validatoryaml"},"validator.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"base:\n  role: 'validator'\n  data_dir: '/home/ubuntu/.libra/data'\n  waypoint:\n    from_file: '/home/ubuntu/.libra/genesis/waypoint.txt'\n\nconsensus:\n  safety_rules:\n    service:\n      type: 'local'\n    backend:\n      type: 'on_disk_storage'\n      path: secure-data.json\n      namespace: ~\n    initial_safety_rules_config:\n      from_file:\n        waypoint:\n          from_file: /home/ubuntu/.libra/genesis/waypoint.txt\n        identity_blob_path: /home/ubuntu/.libra/validator-identity.yaml\n\nexecution:\n  genesis_file_location: '/home/ubuntu/.libra/genesis/genesis.blob'\n\nvalidator_network:\n  discovery_method: 'onchain'\n  mutual_authentication: true\n  identity:\n    type: 'from_file'\n    path: /home/ubuntu/.libra/validator-identity.yaml\n\nfull_node_networks:\n- network_id:\n    private: 'vfn'\n  listen_address: '/ip4/0.0.0.0/tcp/6181'\n  identity:\n    type: 'from_file'\n    path: /home/ubuntu/.libra/validator-identity.yaml\n\napi:\n  enabled: true\n  address: '0.0.0.0:8080'\n")))}s.isMDXComponent=!0}}]);