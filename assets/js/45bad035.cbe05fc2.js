"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[8752],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2,sidebar_label:"Running a Validator",description:"Specifications and setting up a validator on the 0L Network"},o="Running a Validator",l={unversionedId:"validators/running-a-validator",id:"validators/running-a-validator",title:"Running a Validator",description:"Specifications and setting up a validator on the 0L Network",source:"@site/docs/validators/running-a-validator.md",sourceDirName:"validators",slug:"/validators/running-a-validator",permalink:"/documentation/validators/running-a-validator",draft:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/running-a-validator.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Running a Validator",description:"Specifications and setting up a validator on the 0L Network"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/documentation/validators/getting-started"},next:{title:"Restore",permalink:"/documentation/validators/restore"}},s={},d=[{value:"Specifications",id:"specifications",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Firewall",id:"firewall",level:3},{value:"Validator",id:"validator",level:4},{value:"VFN",id:"vfn",level:4},{value:"TMUX basics",id:"tmux-basics",level:3},{value:"Setting up a Validator",id:"setting-up-a-validator",level:2},{value:"Create Binaries",id:"create-binaries",level:3},{value:"You will now need sync your validator to the latest block and register your validator.",id:"you-will-now-need-sync-your-validator-to-the-latest-block-and-register-your-validator",level:3},{value:"Start Node",id:"start-node",level:4},{value:"Setup as a service(optional)",id:"setup-as-a-serviceoptional",level:3},{value:"Systemd template",id:"systemd-template",level:4}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-a-validator"},"Running a Validator"),(0,i.kt)("h2",{id:"specifications"},"Specifications"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"A VFN is not currently used but will be used in production")),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'TWO unix hosts, one for Validator Node, and one for the Private Fullnode ("VFN").\nlibra code targets Ubuntu 22.4'),(0,i.kt)("li",{parentName:"ul"},"Recommended specs:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Validator: 300GB SSD harddrive, 8 core CPU, 16G RAM"),(0,i.kt)("li",{parentName:"ul"},"VFN: 100G storage, 8 core CPU, 16G RAM"))),(0,i.kt)("li",{parentName:"ul"},"Separate static IP addresses for the machines, or appropriate DNS mapping.")),(0,i.kt)("h3",{id:"firewall"},"Firewall"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Optionally open port ",(0,i.kt)("inlineCode",{parentName:"p"},"8080")," to allow outside access to the API that runs as part of the libra service")),(0,i.kt)("h4",{id:"validator"},"Validator"),(0,i.kt)("p",null,"The following ports must be open: 6179, 6180"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"6180")," should be open on all interfacess ",(0,i.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0"),", it's for consensus and uses noise encryption."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"6179"),' is for the private validator fullnode network ("VFN"), the firewall should only allow the IP of the fullnode to access this port.')),(0,i.kt)("h4",{id:"vfn"},"VFN"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"this node does not serve transactions, and does not participate in consensus, it relays data out of the validator node, and transactions into the validator.")),(0,i.kt)("p",null,"The following ports must be open: ",(0,i.kt)("inlineCode",{parentName:"p"},"6178"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"6179")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"6178")," is for the the PUBLIC fullnode network. This is how the public nodes that will be serving JSON-RPC on the network will receive data and submit transactions to the network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"6179"),' is for the private validator fullnode network ("VFN"), it should only allow traffic from the Validator node IP address above.')),(0,i.kt)("h3",{id:"tmux-basics"},"TMUX basics"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"New session: ",(0,i.kt)("inlineCode",{parentName:"li"},"tmux new -s <SESSION_NAME>")),(0,i.kt)("li",{parentName:"ol"},"Detach from Session: press Ctrl-b and then d"),(0,i.kt)("li",{parentName:"ol"},"rejoin unnamed session, if only one session exists: ",(0,i.kt)("inlineCode",{parentName:"li"},"tmux a")),(0,i.kt)("li",{parentName:"ol"},"rejoin unnamed session by id: ",(0,i.kt)("inlineCode",{parentName:"li"},"tmux ls")," to get the ID and then ",(0,i.kt)("inlineCode",{parentName:"li"},"tmux a -t <SESSION_ID>")),(0,i.kt)("li",{parentName:"ol"},"rejoin named session: ",(0,i.kt)("inlineCode",{parentName:"li"},"tmux attach -t <SESSION_NAME>")),(0,i.kt)("li",{parentName:"ol"},"kill session: attach to the session --\x3e press Ctrl-b, then type ",(0,i.kt)("inlineCode",{parentName:"li"},":kill-session")," and press ENTER")),(0,i.kt)("h2",{id:"setting-up-a-validator"},"Setting up a Validator"),(0,i.kt)("p",null,"These instructions target Ubuntu."),(0,i.kt)("p",null,"1.1. Set up an Ubuntu host with ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh")," access, e.g. in a cloud service provider."),(0,i.kt)("p",null,"1.2. Associate a static IP with your host, this will be tied to you account. This address will be shared on the chain, so that other nodes will be able to find you through the peer discovery mechanism."),(0,i.kt)("p",null,"1.3. Libra binaries should be run in a linux user that has very narrow permissions. Before you can create binaries you'll need some tools installed probably by ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo")," and likely in root."),(0,i.kt)("p",null,"1.4. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"tmux")," to persist the terminal session for build, as well as for running the nodes and tower app. Also this setup requires ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"make"),", which might be installed already on your host. If not, perform the following steps now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install -y git tmux jq build-essential cmake clang llvm libgmp-dev pkg-config libssl-dev lld libpq-dev\n")),(0,i.kt)("p",null,"1.5. Install Rust "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n# you are now in the node user\ncurl https://sh.rustup.rs -sSf | sh -s -- --default-toolchain stable -y\n\n# restart your bash instance to pickup the cargo paths\n. ~/.bashrc\n\n# install some command-line tools\ncargo install toml-cli\n")),(0,i.kt)("h3",{id:"create-binaries"},"Create Binaries"),(0,i.kt)("p",null,"It is recommended to perform the steps from 1.7 onwards inside tmux. Short tmux intruction:"),(0,i.kt)("p",null,"1.6 Start a new ",(0,i.kt)("a",{parentName:"p",href:"#tmux-basics"},"tmux")," session"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# start a new tmux session\ntmux new -s installation\n")),(0,i.kt)("p",null,"1.7 Clone this repo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/0LNetworkCommunity/libra-framework.git\ncd ~/libra-framework\ngit fetch --all && git checkout release-6.9.0-rc.7\n")),(0,i.kt)("p",null,"1.8 Build the source and install binaries:\nThis takes a while, ensure your are still inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"tmux")," session to avoid your session gets disconnected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release -p libra \n")),(0,i.kt)("p",null,"1.9 Making the ",(0,i.kt)("inlineCode",{parentName:"p"},"libra")," binary globally executable and persistent"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This assumes the ",(0,i.kt)("inlineCode",{parentName:"p"},"libra")," binary is already built and located at ",(0,i.kt)("inlineCode",{parentName:"p"},"~/libra-framework/target/release/libra"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"echo 'export PATH=\"$HOME/libra-framework/target/release:$PATH\"' >> ~/.bashrc\nsource ~/.bashrc\n\n#Verification\nlibra --version \n")),(0,i.kt)("h3",{id:"you-will-now-need-sync-your-validator-to-the-latest-block-and-register-your-validator"},"You will now need ",(0,i.kt)("a",{parentName:"h3",href:"/validators/restore"},"sync your validator to the latest block")," and ",(0,i.kt)("a",{parentName:"h3",href:"/validators/register"},"register your validator"),"."),(0,i.kt)("h4",{id:"start-node"},"Start Node"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"libra node --config-path ~/.libra/validator.yaml")),(0,i.kt)("h3",{id:"setup-as-a-serviceoptional"},"Setup as a service(optional)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Install Service")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"use can this service template instead of running in tmux")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sudo nano /lib/systemd/system/libra-node.service")),(0,i.kt)("h4",{id:"systemd-template"},"Systemd template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[Unit]\nDescription=Libra Node Service\n\n[Service]\nUser=nodeuser\nGroup=nodeuser\n\nLimitNOFILE=500000\n\n#Environment="RUST_LOG=error"\nWorkingDirectory=/home/nodeuser/.libra\nExecStart=/usr/local/bin/libra --config-path ~/home/nodeuser/.libra/validator.yaml\n\nRestart=on-failure\nRestartSec=3s\n\nStandardOutput=journal\nStandardError=journal\nSyslogIdentifier=libra-node\n\n[Install]\nWantedBy=multi-user.target\nAlias=libra-node.service\n\n# config the service and start\nsudo systemctl enable libra-node\nsudo systemctl start libra-node\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reload and start system service")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sudo systemctl daemon-reload")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sudo systemctl enable libra-node.service")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sudo systemctl start libra-node.service")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Check the service is operating correctly")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sudo systemctl status libra-node.service")),(0,i.kt)("hr",null))}c.isMDXComponent=!0}}]);