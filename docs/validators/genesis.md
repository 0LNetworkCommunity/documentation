---
sidebar_position: 5
sidebar_label: "Genesis Ceremony"
description: 'Launch the 0L Network'
---

# Genesis Ceremony

This guide outlines the essential steps for conducting a Genesis Ceremony in the 0L Network.

## The Purpose of the Genesis Ceremony

A Genesis Ceremony is a pivotal event marking the creation of the network's genesis block — the foundational block that
underpins the entire blockchain.
The genesis of a network can begin with a blank state (0 balances) or with preserving the state of an earlier chain and
migrate to the new chain during the genesis ceremony. The latter approach is also known as a fork.
It is a crucial process that not only initiates the network but also involves migrating the network's state from an
earlier version to the next version.

Follow this document to navigate the process effectively, ensuring a smooth and successful launch or upgrade of the 0L
Network.

## High Level Ceremony Steps

1. Operator Name & Cleanup
2. Fetch Source & Verify Commit Hash
3. Build `libra-framework` Packages
4. Account Preparation and Adding GitHub PAT
5. Pre-Genesis Registration
    - **Stop**: Wait for the coordinator to merge all PR's. Step 8 can be done while you wait
6. PR Received
7. PR Merged
8. Build JSON_Legacy
9. All Nodes Added to `layout.yaml` Users Key
    - **Wait for the Coordinator**: Wait for the coordinator post-pre-genesis set closure and to add all genesis participants.
10. Pull from Genesis Repo and Build
    - **Wait for the Coordinator**: Wait for the coordinator's signal to start.
11. Start Nodes!

Coordination happens via the 0L Discord server voice channels, and a Google Sheet will track participants at each. Each
step requires careful attention to the coordinator's instructions.

:::note
Only proceed with asynchronous steps after the coordinator confirms the previous sequential blocking steps as completed.
:::


## Genesis Ceremony Steps

### 1. Operator name and cleanup of previous binaries or testnet data

Provide your operator name (handle) in the **[Genesis Worksheet](https://docs.google.com/spreadsheets/d/19hZTqGeN1cVw0Jlj5vWtMSEB36EYftjdSfPHhgwCiy8/edit#gid=1604681690).**

If you have participated in testnets, delete any previous forks of testnet repos (such as `release-v6.9.0-rc.0-genesis-2`) from your GitHub repositories.

Previous clones and testnets leave data in the `.libra` directory, clean those up by removing these directories

``` bash
rm -rf ~/libra-framework && rm -rf ~/.libra/libra-legacy-v6
rm -rf ~/.libra/data && rm -rf ~/.libra/genesis && rm -rf ~/.libra/secure-data.json
rm -f /usr/bin/libra && rm -rf /usr/local/bin/libra && rm -f ~/.cargo/bin/libra
```


### 2. Fetch source & verify commit hash

We suggest you start a new tmux session
``` bash
sudo apt install tmux -y
tmux new -t libra-node
```

Clone the `libra-framework` repository and make sure you are on the correct branch
``` bash
cd ~
git clone https://github.com/0LNetworkCommunity/libra-framework
cd ~/libra-framework
git fetch --all && git checkout release-6.9.0-rc.10
```

Ensure the commit hash matches your peers and the coordinator
``` bash
git log -n 1 --pretty=format:"%H"
```

- **Confirm the git hash in the [Genesis Worksheet](https://docs.google.com/spreadsheets/d/19hZTqGeN1cVw0Jlj5vWtMSEB36EYftjdSfPHhgwCiy8/edit#gid=1604681690).**


### 3. Build and install the libra binaries

To use many of our genesis CLI tooling, we have to switch to its directory
``` bash
cd ~/libra-framework/tools/genesis
```

If your directory structure setup is different from the default, you can override the defaults by exporting the following environment variables: `SOURCE_PATH`, `BINS_PATH`, `DATA_PATH`. See the [Makefile](https://github.com/0LNetworkCommunity/libra-framework/blob/03d9f10bb539bda4c3f9de96e4a411971ec88d80/tools/genesis/Makefile#L7) for more details.

Install the source
``` bash
sudo apt install make -y
EPOCH=692 make install
```

- **Confirm with "done" in the [Genesis Worksheet](https://docs.google.com/spreadsheets/d/19hZTqGeN1cVw0Jlj5vWtMSEB36EYftjdSfPHhgwCiy8/edit#gid=1604681690).**


### 4. Account Preparation and Adding GitHub PAT (use classic with repo privileges)

Acquire [GitHub Personal Access Token (PAT)](https://github.com/settings/tokens) with repo privileges. Paste it aside.

If you are new and do not have an account, create one, carefully record your seed phrase, and keep it aside for later
``` bash
libra wallet keygen
```

Setup the validator configs and data directory `~/.libra` (it is OK to refresh your configs)
``` bash
libra config validator-init
```

Retrieve Validator address and paste it aside
``` bash
grep 'account_address' ~/.libra/public-keys.yaml
```

Paste your GitHub PAT in the `~/.libra/github_token.txt` file
``` bash
nano ~/.libra/github_token.txt
```

Fetch your external Static IP and set it aside
``` bash
curl -s ipinfo.io | jq .ip
```

- **Enter your Validator Address Static IP in the [Genesis Worksheet](https://docs.google.com/spreadsheets/d/19hZTqGeN1cVw0Jlj5vWtMSEB36EYftjdSfPHhgwCiy8/edit#gid=1604681690).**


### 5. Export genesis ceremony repository and register for genesis 

Export the genesis ceremony repository as an environment variable
``` bash
export GIT_REPO=release-v6.9.0-genesis-registration
```

Register for genesis
``` bash
make register
```

- **Confirm with "done" in the [Genesis Worksheet](https://docs.google.com/spreadsheets/d/19hZTqGeN1cVw0Jlj5vWtMSEB36EYftjdSfPHhgwCiy8/edit#gid=1604681690).**

:::warning
Please wait for the coordinator at this step.
:::


### 6. PR Received

(coordinator confirms)


### 7. PR Merged

(coordinator merges your PR)


### 8. Build JSON_Legacy from snapshot and ancestry

Build the legacy json
``` bash
make legacy
```

- **Confirm `v5_recovery.json` md5 hash in the [Genesis Worksheet](https://docs.google.com/spreadsheets/d/19hZTqGeN1cVw0Jlj5vWtMSEB36EYftjdSfPHhgwCiy8/edit#gid=1604681690).**


### 9. All nodes added to `layout.yaml` users key

:::warning
Please wait for the coordinator. Pre-genesis set closes here.
:::


### 10. Make Genesis

Pull from the genesis repo and build genesis
``` bash
make genesis
```

- Confirm with "done" in the **[Genesis Worksheet](https://docs.google.com/spreadsheets/d/19hZTqGeN1cVw0Jlj5vWtMSEB36EYftjdSfPHhgwCiy8/edit#gid=1604681690).**

:::warning
Please wait for the coordinator.
:::


### 11. Start nodes!

Wait for the coordinator, say a prayer, then start!
``` bash
libra node
```

To disconnect from your tmux session `CTRL + b` and then `d` to disconnect. To reconnect you can use `tmux a -t libra-node`.

You could also consider running `libra node` as a service [which is detailed here](validators/detailed-instructions#setup-as-a-serviceoptional).


---
**End Of The Genesis Ceremony Steps.**
