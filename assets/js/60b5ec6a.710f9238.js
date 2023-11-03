"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[9173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var d=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,d)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,d,r=function(e,t){if(null==e)return{};var n,d,r={},a=Object.keys(e);for(d=0;d<a.length;d++)n=a[d],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(d=0;d<a.length;d++)n=a[d],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=d.createContext({}),s=function(e){var t=d.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return d.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return d.createElement(d.Fragment,{},t)}},c=d.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),c=r,u=p["".concat(i,".").concat(c)]||p[c]||f[c]||a;return n?d.createElement(u,l(l({ref:t},m),{},{components:n})):d.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return d.createElement.apply(null,l)}return d.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var d=n(7462),r=(n(7294),n(3905));const a={title:"VFN yaml example",id:"vfn-yaml"},l="VFN Example YAML",o={unversionedId:"validators/yaml-templates/vfn-yaml",id:"validators/yaml-templates/vfn-yaml",title:"VFN yaml example",description:"vfn.yaml",source:"@site/docs/validators/yaml-templates/vfn-yaml.md",sourceDirName:"validators/yaml-templates",slug:"/validators/yaml-templates/vfn-yaml",permalink:"/documentation/validators/yaml-templates/vfn-yaml",draft:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/yaml-templates/vfn-yaml.md",tags:[],version:"current",frontMatter:{title:"VFN yaml example",id:"vfn-yaml"},sidebar:"tutorialSidebar",previous:{title:"Validator yaml example",permalink:"/documentation/validators/yaml-templates/validator-yaml"},next:{title:"Developers",permalink:"/documentation/category/developers"}},i={},s=[{value:"vfn.yaml",id:"vfnyaml",level:3}],m={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,d.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vfn-example-yaml"},"VFN Example YAML"),(0,r.kt)("h3",{id:"vfnyaml"},"vfn.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# replace file path differences for the username\nsed -i 's#/validatorusername/.libra#/vfnusername/.libra#g' ~/.libra/vfn.yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# resulting vfn.yaml contents\nbase:\n  role: 'full_node'\n  data_dir: '/home/vfnusername/.libra/data'\n  waypoint:\n    from_file: '/home/vfnusername/.libra/genesis/waypoint.txt'\n\nexecution:\n  genesis_file_location: '/home/vfnusername/.libra/genesis/genesis.blob'\n\nfull_node_networks:\n- network_id: 'public'\n  discovery_method: 'onchain'\n  listen_address: \"/ip4/0.0.0.0/tcp/6182\"\n  identity:\n    type: \"from_config\"\n    key: \"sdfwsdfdfsdfddddddddddddddddddddddddddddddddddddd\"\n    peer_id: \"fdgfgswddfddddddddddddddddddddddddddddddddddddddd\"\n- network_id:\n    private: 'vfn'\n  listen_address: '/ip4/0.0.0.0/tcp/6181'\n  identity:\n    type: 'from_file'\n    path: /home/vfnusername/.libra/validator-identity.yaml\n  seeds:\n    sdf34tdfgddfgsdfsssssssssssssssssdfddddddddddddddd:\n      addresses:\n      - \"/ip4/<validator_ip>/tcp/6181/noise-ik/0xsdf34tdfgddfgsdfsssssssssssssssssdfddddddddddddddd/handshake/0\"\n      role: \"Validator\"\n\napi:\n  enabled: true\n  address: '0.0.0.0:8080'\n\n")))}f.isMDXComponent=!0}}]);