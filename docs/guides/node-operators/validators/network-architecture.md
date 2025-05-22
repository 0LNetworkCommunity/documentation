# Network Architecture
There are three types of note in the network. All nodes run the same binary software. The difference between node types is
by configuration and the arrangement of network connectivity.
 * Validator Node (VN): A node controlled by an on-chain account that is in the set of currently active validators.
 The purpose of VNs is to provide chain consensus and to maintain authoratitive chain state.
 Validator nodes communicate with each other to
 maintain consensus and propagate new transactions. Validator node p2p networking is permissioned: a connection not originating from another validator node
 will not succeed.
 * Validator Full Node (VFN): A node run in association with a VN, controlled by the same account. 
 The role of the VFN is to provide p2p service to other "downstream" nodes that in turn provide services to users.
 The purpose of the VFN as a distinct concept from the VN is to act as a
 resource isolation mechanism between the VN and Full Nodes (see below). VFNs receive new chain state from their peer VN and propagate
 that new chain state "downstream" to FNs. Resource isolation is achieved by only allowing connections
 on a non-permissioned p2p network to VNs to come from the peer VFN. Because VNs provide no p2p service except to peer validators,
 the VFN is the only route by which network state propagates from VNs out to users connected to FNs.
 * Full Node (FN): A node run by any entity wishing to provide API service. API service is used by end-users e.g. wallet users and commercial services
 such as explorers and chain data indexers. Full Nodes may peer with VFNs to receive new chain state, or with other nodes known to the operators.
 Full Nodes are the only providers of API service to any client anywhere in the network.

The diagram below illustrates the arrangement of node types showing their network configuration:
![Network Diagram](/img/node-network-details.png "Network Diagram")
