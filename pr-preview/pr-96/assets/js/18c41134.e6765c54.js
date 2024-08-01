"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[2859],{1888:(e,n,t)=>{t.r(n),t.d(n,{Highlight:()=>l,assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(5893),r=t(1151);const o={sidebar_position:3},i="Markdown Features",a={id:"tutorial-basics/markdown-features",title:"Markdown Features",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/tutorial-basics/markdown-features.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/markdown-features",permalink:"/pr-preview/pr-96/tutorial-basics/markdown-features",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/tutorial-basics/markdown-features.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a Document",permalink:"/pr-preview/pr-96/tutorial-basics/create-a-document"},next:{title:"Translate your site",permalink:"/pr-preview/pr-96/tutorial-basics/translate-your-site"}},c={},l=({children:e,color:n})=>{const t={span:"span",...(0,r.a)()};return(0,s.jsx)(t.span,{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${n} with label ${e}`)},children:e})},d=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"markdown-features",children:"Markdown Features"}),"\n",(0,s.jsxs)(n.p,{children:["Docusaurus supports ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://daringfireball.net/projects/markdown/syntax",children:"Markdown"})})," and a few ",(0,s.jsx)(n.strong,{children:"additional features"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"front-matter",children:"Front Matter"}),"\n",(0,s.jsxs)(n.p,{children:["Markdown documents have metadata at the top called ",(0,s.jsx)(n.a,{href:"https://jekyllrb.com/docs/front-matter/",children:"Front Matter"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="my-doc.md"',children:"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,s.jsx)(n.p,{children:"Regular Markdown links are supported, using url paths or relative file paths."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"Let's see how to [Create a document](/create-a-document).\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"Let's see how to [Create a document](./create-a-document.md).\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Result:"})," Let's see how to ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-96/tutorial-basics/create-a-document",children:"Create a document"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"images",children:"Images"}),"\n",(0,s.jsx)(n.p,{children:"Regular Markdown images are supported."}),"\n",(0,s.jsxs)(n.p,{children:["You can use absolute paths to reference images in the static directory (",(0,s.jsx)(n.code,{children:"static/img/0LNetwork.png"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"![0L Network logo](/img/0LNetwork.png)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"0L Network logo",src:t(1016).Z+"",width:"192",height:"192"})}),"\n",(0,s.jsx)(n.p,{children:"You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"![0L Network logo](./img/0LNetwork.png)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"code-blocks",children:"Code Blocks"}),"\n",(0,s.jsx)(n.p,{children:"Markdown code blocks are supported with Syntax highlighting."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',children:"function HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',children:"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"admonitions",children:"Admonitions"}),"\n",(0,s.jsx)(n.p,{children:"Docusaurus has a special syntax to create admonitions and callouts:"}),"\n",(0,s.jsxs)(n.admonition,{title:"My tip",type:"tip",children:[(0,s.jsx)(n.p,{children:"Use this awesome feature option"}),(0,s.jsx)(n.p,{children:":::"}),(0,s.jsx)(n.admonition,{title:"Take care",type:"danger",children:(0,s.jsx)(n.p,{children:"This action is dangerous"})}),(0,s.jsx)(n.admonition,{title:"My tip",type:"tip",children:(0,s.jsx)(n.p,{children:"Use this awesome feature option"})})]}),"\n",(0,s.jsx)(n.admonition,{title:"Take care",type:"danger",children:(0,s.jsx)(n.p,{children:"This action is dangerous"})}),"\n",(0,s.jsx)(n.h2,{id:"mdx-and-react-components",children:"MDX and React Components"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX"})," can make your documentation more ",(0,s.jsx)(n.strong,{children:"interactive"})," and allows using any ",(0,s.jsx)(n.strong,{children:"React components inside Markdown"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n"})}),"\n","\n",(0,s.jsxs)(n.p,{children:["This is ",(0,s.jsx)(l,{color:"#25c2a0",children:"Docusaurus green"})," !"]}),"\n",(0,s.jsxs)(n.p,{children:["This is ",(0,s.jsx)(l,{color:"#1877F2",children:"Facebook blue"})," !"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1016:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/0LNetwork-ec054670f391547f48001144cb91edcf.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(7294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);