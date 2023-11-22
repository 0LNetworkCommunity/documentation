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

1. Cleanup
2. Prepare `.libra` Directory and Add GitHub PAT
3. Fetch Source & Verify Commit Hash
4. Build `libra-framework` Packages
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

### 1. Cleanup

1.1 If you have participated in testnets, delete any previous forks of testnet repos (such
as `release-v6.9.0-rc.0-genesis-2`) from your GitHub repositories.

1.2 Previous clones and testnets leave data in the `.libra` directory, clean those up by removing these directories:

``` bash
rm -Rf ~/libra-framework
rm -Rf ~/.libra/data && rm -Rf ~/.libra/genesis && rm -Rf ~/.libra/secure-data.json
```

1.3 Retrieve Validator address and paste it aside:
``` bash
grep 'account_address' ~/.libra/public-keys.yaml
```

1.4 Fetch your external Static IP and set it aside:
``` bash
curl -s ipinfo.io | jq .ip
```

- **Enter your Validator Address, Operator Name, and Static IP in the [Genesis Worksheet](https://docs.google.com/spreadsheets/d/17mF8Trg4xkUEkpJH9yTjVWRWx6ugYBRTMcuXscafhlI/edit?pli=1#gid=2041290571).**

### 2. Prepare `.libra` directory and add GitHub PAT (use classic with repo privileges)

Acquire [GitHub Personal Access Token (PAT)](https://github.com/settings/tokens) with repo privileges. Paste it aside.

Setup the data and configs directory:
``` bash
mkdir ~/.libra/
```

Paste your GitHub PAT in the `~/.libra/github_token.txt` file:
``` bash
nano ~/.libra/github_token.txt
```

### 3. Fetch source & verify commit hash

``` bash
cd ~
git clone https://github.com/0LNetworkCommunity/libra-framework
cd ~/libra-framework
git fetch --all && git checkout main (or a specific branch as instructed by the coordinator)

# Ensure the commit hash matches your peers and the coordinator
git log -n 1 --pretty=format:"%H"
```

- **Provide git hash in the [Genesis Worksheet](https://docs.google.com/spreadsheets/d/17mF8Trg4xkUEkpJH9yTjVWRWx6ugYBRTMcuXscafhlI/edit?pli=1#gid=2041290571).**

- **Confirm with "done" in the [Genesis Worksheet](https://docs.google.com/spreadsheets/d/17mF8Trg4xkUEkpJH9yTjVWRWx6ugYBRTMcuXscafhlI/edit?pli=1#gid=2041290571).**

### 4. Export genesis ceremony repository as environment variable

Export the genesis ceremony repository as an environment variable:
``` bash
export GIT_REPO=release-v6.9.0-genesis-registration
```

If your directory structure setup is different from the default, you can override the defaults by exporting the following environment variables: `SOURCE_PATH`, `BINS_PATH`, `DATA_PATH`. See the [Makefile](https://github.com/0LNetworkCommunity/libra-framework/blob/03d9f10bb539bda4c3f9de96e4a411971ec88d80/tools/genesis/Makefile#L7) for more details.


- To use many of our genesis CLI tooling, we have to switch to its directory:
``` bash
cd ~/libra-framework/tools/genesis
```

### 5. Install the source

``` bash
make install
```
- **Confirm with "done" in the [Genesis Worksheet](https://docs.google.com/spreadsheets/d/17mF8Trg4xkUEkpJH9yTjVWRWx6ugYBRTMcuXscafhlI/edit?pli=1#gid=2041290571).**

### 6. Genesis Registration

``` bash
make register
```

- **Confirm with "done" in the [Genesis Worksheet](https://docs.google.com/spreadsheets/d/17mF8Trg4xkUEkpJH9yTjVWRWx6ugYBRTMcuXscafhlI/edit?pli=1#gid=2041290571).**

:::warning
Please wait for the coordinator at this step.
:::

### 7. PR Received

(coordinator confirms)

### 8. PR Merged

(coordinator merges your PR)

### 9. Build JSON_Legacy from snapshot and ancestry

Export the epoch from which legacy is built:
``` bash
export EPOCH=694
```

Build the legacy json:
``` bash
make legacy
```

- **Confirm `v5_recovery.json` md5 hash in the [Genesis Worksheet](https://docs.google.com/spreadsheets/d/17mF8Trg4xkUEkpJH9yTjVWRWx6ugYBRTMcuXscafhlI/edit?pli=1#gid=2041290571).**

### 10. All nodes added to `layout.yaml` users key

:::warning
Please wait for the coordinator. Pre-genesis set closes here.
:::

### 11. Make Genesis

``` bash
make genesis
```

- Confirm with "done" in the **[Genesis Worksheet](https://docs.google.com/spreadsheets/d/17mF8Trg4xkUEkpJH9yTjVWRWx6ugYBRTMcuXscafhlI/edit?pli=1#gid=2041290571).**

:::warning
Please wait for the coordinator.
:::

### 12. Start nodes!

Wait for the coordinator, say a prayer, then start!

``` bash
libra node
```

---
**End Of The Genesis Ceremony Steps.**
