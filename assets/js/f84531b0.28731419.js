"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[709],{9933:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(5893),t=a(1151);const r={title:"First Steps",sidebar_position:4,slug:"/",tags:["Getting started"]},i="First steps - Common useful operations",s={id:"first-steps",title:"First Steps",description:"Introduction",source:"@site/docs/first-steps.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/first-steps.md",tags:[{label:"Getting started",permalink:"/tags/getting-started"}],version:"current",sidebarPosition:4,frontMatter:{title:"First Steps",sidebar_position:4,slug:"/",tags:["Getting started"]},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/tutorial-basics/translate-your-site"},next:{title:"Tools",permalink:"/category/tools"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Setup Environment Quick Start",id:"setup-environment-quick-start",level:2},{value:"Clone the Repository",id:"clone-the-repository",level:3},{value:"Prepare Your Instance",id:"prepare-your-instance",level:3},{value:"Finalizing Setup",id:"finalizing-setup",level:3},{value:"Basic Query Operations",id:"basic-query-operations",level:2},{value:"Check Account Balance",id:"check-account-balance",level:3},{value:"Check Your Vouches",id:"check-your-vouches",level:3},{value:"Get Total Supply",id:"get-total-supply",level:3},{value:"Node Operations",id:"node-operations",level:2},{value:"Send Coins",id:"send-coins",level:3},{value:"Validator-Specific Operations",id:"validator-specific-operations",level:2},{value:"Vouch for an Account",id:"vouch-for-an-account",level:3},{value:"Query for Vouches",id:"query-for-vouches",level:3},{value:"Bid for Position",id:"bid-for-position",level:3},{value:"Un-jail Account",id:"un-jail-account",level:3},{value:"Monitoring Your Node",id:"monitoring-your-node",level:2},{value:"Status Page",id:"status-page",level:3},{value:"Grafana Local Setup",id:"grafana-local-setup",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Install Grafana Using Docker",id:"install-grafana-using-docker",level:4},{value:"Access Grafana",id:"access-grafana",level:4},{value:"Connect Grafana to Your 0L Node",id:"connect-grafana-to-your-0l-node",level:4},{value:"Add a Data Source in Grafana:",id:"add-a-data-source-in-grafana",level:4},{value:"Create Dashboards",id:"create-dashboards",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"first-steps---common-useful-operations",children:"First steps - Common useful operations"}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"Welcome to the 0L Libra Framework! This guide is designed to help you set up your development environment and introduce you to some common operations that are useful for interacting with the Libra blockchain. Whether you're a validator, core developer, or simply curious about Libra, this document will walk you through the initial steps to get you started \ud83d\ude80"}),"\n",(0,o.jsx)(n.h2,{id:"setup-environment-quick-start",children:"Setup Environment Quick Start"}),"\n",(0,o.jsx)(n.h3,{id:"clone-the-repository",children:"Clone the Repository"}),"\n",(0,o.jsx)(n.p,{children:"First, let's clone the libra-framework repository to your local machine. This contains all the necessary code and tools to work with the Libra blockchain. We recommend using a tmux session to keep your setup process manageable, especially if you're connecting over SSH."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Start or attach to a tmux session\ntmux a\ncd ~ \n# Clone the libra-framework repository \ngit clone https://github.com/0LNetworkCommunity/libra-framework\ncd ~/libra-framework\n"})}),"\n",(0,o.jsx)(n.h3,{id:"prepare-your-instance",children:"Prepare Your Instance"}),"\n",(0,o.jsx)(n.p,{children:"Depending on your role (validator, core developer, Move developer, or CI), you will need to install different sets of tools:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# View all development setup options \nbash ./util/dev_setup.sh -h\n# Install build tools for validators\nbash ./util/dev_setup.sh -t\n\n# Install build tools and Postgres for core developers \nbash ./util/dev_setup.sh -tP\n\n# Install Move Prover tools for Move developers\nbash ./util/dev_setup.sh -ty\n\n# Setup for CI with no user input required\nbash ./util/dev_setup.sh -tb\n\n# Build the project\n\ncargo build --release\n"})}),"\n",(0,o.jsx)(n.h3,{id:"finalizing-setup",children:"Finalizing Setup"}),"\n",(0,o.jsx)(n.p,{children:"After building the project, you'll have the Libra framework binaries ready. To make these binaries easily accessible, add them to your PATH:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Copy binaries to your Cargo bin directory\nsudo cp -f ~/libra-framework/target/release/libra* ~/.cargo/bin/\n"})}),"\n",(0,o.jsx)(n.p,{children:"Well done! \ud83d\udc4f You now have a fully operational node running the 0L Libra framework."}),"\n",(0,o.jsx)(n.h2,{id:"basic-query-operations",children:"Basic Query Operations"}),"\n",(0,o.jsx)(n.h3,{id:"check-account-balance",children:"Check Account Balance"}),"\n",(0,o.jsx)(n.p,{children:"To check the balance of an account, use:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"libra query balance --account ADDRESS\n"})}),"\n",(0,o.jsx)(n.h3,{id:"check-your-vouches",children:"Check Your Vouches"}),"\n",(0,o.jsx)(n.p,{children:"For validators, to check for vouches:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"libra query resource --resource-path-string 0x1::vouch::MyVouches --account ADDRESS\n"})}),"\n",(0,o.jsx)(n.h3,{id:"get-total-supply",children:"Get Total Supply"}),"\n",(0,o.jsx)(n.p,{children:"To view the total supply of Libra coins:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'libra query view --function-id "0x1::gas_coin::supply"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"node-operations",children:"Node Operations"}),"\n",(0,o.jsx)(n.h3,{id:"send-coins",children:"Send Coins"}),"\n",(0,o.jsx)(n.p,{children:"To transfer coins to another account:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"libra txs transfer --to-account DESTINATION_ADDRESS --amount AMOUNT\n"})}),"\n",(0,o.jsx)(n.h2,{id:"validator-specific-operations",children:"Validator-Specific Operations"}),"\n",(0,o.jsx)(n.p,{children:"These operations are exclusively for validators."}),"\n",(0,o.jsx)(n.h3,{id:"vouch-for-an-account",children:"Vouch for an Account"}),"\n",(0,o.jsx)(n.p,{children:"To vouch for another account:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"libra txs validator vouch --vouch-for ADDRESS"})}),"\n",(0,o.jsx)(n.h3,{id:"query-for-vouches",children:"Query for Vouches"}),"\n",(0,o.jsx)(n.p,{children:"To query for vouches you have received:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"libra query view --function-id 0x1::vouch::true_friends --args ADDRESS \n"})}),"\n",(0,o.jsx)(n.h3,{id:"bid-for-position",children:"Bid for Position"}),"\n",(0,o.jsx)(n.p,{children:"To bid for a validator position:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"libra txs validator pof --bid-pct PERCENT_YOU_PAY --expiry EPOCH_NUMBER_WHEN_BID_EXPIRES \n# Example\nlibra txs validator pof --bid-pct 0.9 --expiry 999\n"})}),"\n",(0,o.jsx)(n.h3,{id:"un-jail-account",children:"Un-jail Account"}),"\n",(0,o.jsx)(n.p,{children:"To un-jail an account (note: self-unjail is not possible):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"libra txs validator jail --unjail-acct ADDRESS\n"})}),"\n",(0,o.jsx)(n.h2,{id:"monitoring-your-node",children:"Monitoring Your Node"}),"\n",(0,o.jsx)(n.h3,{id:"status-page",children:"Status Page"}),"\n",(0,o.jsx)(n.p,{children:"To set up a local status page for monitoring:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/0LNetworkCommunity/status.git\ncd status\nyarn\nyarn dev\n# Visit http://localhost:5173 to view the status page\n"})}),"\n",(0,o.jsx)(n.h3,{id:"grafana-local-setup",children:"Grafana Local Setup"}),"\n",(0,o.jsxs)(n.p,{children:["Here's a quick guide to setting up Grafana locally on your PC. If you'd like to go into more detail, don't hesitate to consult the ",(0,o.jsx)(n.a,{href:"https://grafana.com/docs/grafana/latest/",children:"official documentation"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(n.p,{children:"A server or local machine with a 0L node already set up and running.\nDocker installed on your machine (recommended for simplicity)."}),"\n",(0,o.jsx)(n.h4,{id:"install-grafana-using-docker",children:"Install Grafana Using Docker"}),"\n",(0,o.jsx)(n.p,{children:"Pull the Grafana Docker image by running the following command in your terminal:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker pull grafana/grafana\n"})}),"\n",(0,o.jsx)(n.p,{children:"Run the Grafana container with the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run -d -p 3000:3000 grafana/grafana\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This command runs Grafana in a Docker container and maps port 3000 of the container to port 3000 on your host machine, allowing you to access Grafana at ",(0,o.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"access-grafana",children:"Access Grafana"}),"\n",(0,o.jsxs)(n.p,{children:["Open a web browser and navigate to ",(0,o.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),".\nLog in with the default credentials (username: admin, password: admin). You will be prompted to change the password."]}),"\n",(0,o.jsx)(n.h4,{id:"connect-grafana-to-your-0l-node",children:"Connect Grafana to Your 0L Node"}),"\n",(0,o.jsx)(n.p,{children:"To monitor your 0L node, you need to connect Grafana to the node's data source. If your 0L node exposes metrics via an HTTP API or a compatible database, follow these general steps:"}),"\n",(0,o.jsx)(n.h4,{id:"add-a-data-source-in-grafana",children:"Add a Data Source in Grafana:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Go to the Grafana dashboard"}),"\n",(0,o.jsx)(n.li,{children:'Navigate to "Configuration" > "Data Sources".'}),"\n",(0,o.jsx)(n.li,{children:'Click "Add data source" and select the type that matches your 0L node\'s data output (e.g., Prometheus, MySQL, etc.).'}),"\n",(0,o.jsx)(n.li,{children:"Configure the Data Source with the URL and any authentication details required to access your 0L node's metrics."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Save and Test to ensure Grafana can retrieve data successfully."}),"\n",(0,o.jsx)(n.h4,{id:"create-dashboards",children:"Create Dashboards"}),"\n",(0,o.jsx)(n.p,{children:"Once Grafana is connected to your 0L node's data source, you can create dashboards to visualize the data:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Navigate to "Create" > "Dashboard".'}),"\n",(0,o.jsx)(n.li,{children:"Add panels and select the metrics you wish to monitor."}),"\n",(0,o.jsx)(n.li,{children:"Configure the panel settings, such as the query, visualization type, and panel title."}),"\n",(0,o.jsx)(n.li,{children:"Repeat these steps to add more panels as needed, customizing your dashboard to display the 0L node metrics most relevant to you."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Here we go! You now have Grafana set up to monitor your 0L (Libra) node. You can extend this setup by exploring more Grafana features, such as alerts and more advanced dashboard configurations, to suit your monitoring needs."})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>i});var o=a(7294);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);