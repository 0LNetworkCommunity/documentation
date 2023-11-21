---
sidebar_position: 6
sidebar_label: "Genesis"
description: 'Launch the 0L Network'
---

# 0L Genesis Ceremony Guide

This guide outlines the essential steps for conducting a Genesis Ceremony in the 0L Network. The Genesis Ceremony is a pivotal event marking the creation of the network's genesis blob — the foundational block that underpins the entire blockchain. It's a crucial process that not only initiates the network but also involves transitioning or migrating the network's state from an earlier version (in this case, from v5 to v6.9.0). This ensures continuity and preserves the integrity of the network through upgrades or hard forks. Follow this document to navigate the process effectively, ensuring a smooth and successful launch or upgrade of the 0L Network.

### High Level Ceremony Steps

1. Cleanup
2. Prepare `.libra` Directory and Add GitHub PAT
3. Fetch Source & Verify Commit Hash
4. Build `libra-framework` Packages
5. Pre-Genesis Registration
   - **Stop**: Wait for coordinator to merge all PR's. Step 8 can be done while you wait
6. PR Received
7. PR Merged
8. Build JSON_Legacy
9. All Nodes Added to `layout.yaml` Users Key
   - **Wait for Coordinator**: Wait for coordinator post-pre-genesis set closure and to add all genesis participants.
10. Pull from Genesis Repo and Build
    - **Wait for Coordinator**: Wait for coordinator's signal to start.
11. Start Nodes!
    
---
Each step requires careful attention to the coordinator's instructions, ensuring a smooth and successful Genesis Ceremony for the 0L Network. Coordination happens via 0L Discord and a sheet will track participants.



**Coordinator**: `sirouk`

> ⚠️ **Important**: Only proceed with asynchronous steps after the coordinator confirms the previous sequential blocking steps as completed.

## Genesis Ceremony Steps

### 1. Cleanup
- Delete any previous forks of testnet genesis coordination repo (such as `release-v6.9.0-rc.0-genesis-2`) from your GitHub repositories.
- Previous clones and testnets leave data in the `.libra` directory, clean those up:
  ```
  rm -Rf ~/libra-framework
  rm -Rf ~/.libra/data && rm -Rf ~/.libra/genesis && rm -Rf ~/.libra/secure-data.json
  ```

(Optional) If you already know with which account you'll register, or registered in the past for a testnet with the same account, you can already update the coordination sheet with your information. Otherwise, you'll do it once you generated your new account keys in step (6) below. 
- Retrieve Validator Address and paste it aside:

  ```
  grep 'account_address' ~/.libra/public-keys.yaml
  ```
- Fetch your external Static IP and set it aside

  ```
  curl -s ipinfo.io | jq .ip
  ```

Enter your Validator Address, Operator Name, and Static IP in the [Genesis Worksheet](https://docs.google.com/spreadsheets/d/17mF8Trg4xkUEkpJH9yTjVWRWx6ugYBRTMcuXscafhlI/edit?pli=1#gid=2041290571).


### 2. Prepare `.libra` directory and add GitHub PAT (use classic with repo privileges)

Acquire [GitHub Personal Access Token (PAT)](https://github.com/settings/tokens) with repo privileges. Paste it aside.

Setup the data and configs directory:
```bash
mkdir ~/.libra/
```

Paste your GitHub PAT in the `~/.libra/github_token.txt` file:
```bash
nano ~/.libra/github_token.txt
# or
echo <KEY> > ~/.libra/github_token.txt
```

### 3. Fetch source & verify commit hash

```
cd ~
git clone https://github.com/0LNetworkCommunity/libra-framework
cd ~/libra-framework
git fetch --all && git checkout main (or a specific branch as instructed by the coordinator)

# Ensure the commit hash matches your peers and the coordinator
git log -n 1 --pretty=format:"%H"
```

 > **Note**: Provide git hash in the [Genesis Worksheet](https://docs.google.com/spreadsheets/d/17mF8Trg4xkUEkpJH9yTjVWRWx6ugYBRTMcuXscafhlI/edit?pli=1#gid=2041290571). Only proceed with the following async steps after the coordinator provides the git hash and your results match your peers.

- Confirm with "done" in the Genesis Worksheet.

### 4. Export coordination repo as environment variables and override defaults if needed

If your setup from directory structure is different from the default, you can override the defaults by exporting the following environment variables:
`SOURCE_PATH`, `BINS_PATH`, `DATA_PATH`. See the [Makefile](https://github.com/0LNetworkCommunity/libra-framework/blob/03d9f10bb539bda4c3f9de96e4a411971ec88d80/tools/genesis/Makefile#L7) for more details.

```bash
export GIT_REPO=release-v6.9.0-genesis-registration
# export SOURCE_PATH=... as needed
```

### 4. Change directory to the genesis tool
```bash
cd ~/libra-framework/tools/genesis
```

### 5. Install the source
```bash
make install
```
- Confirm with "done" in the Genesis Worksheet.

### 6. Pre-Genesis Registration
```bash
make register
```
- Confirm with "done" in the Genesis Worksheet.

:::warning 
Wait for coordinator
:::

### 6. PR Received
(coordinator)

### 7. PR Merged
(coordinator)

### 8. Build JSON_Legacy from snapshot and ancestry
```bash
# Export the epoch from which legacy is built
export EPOCH=694

# Build the legacy json
make legacy
```
- Confirm `v5_recovery.json` md5 hash in the Genesis Worksheet.

### 9. All nodes added to `layout.yaml` users key
    (coordinator)  
> ⚠️ **Note**: Pre-genesis set closes here. Wait for coordinator.

### 10. Make Genesis

```bash
make genesis
```
- Confirm with "done" in the Genesis Worksheet.

:::warning 
Wait for coordinator
:::

### 11. Start nodes!
Wait for the coordinator, say a prayer, then start!
```bash
~/libra-framework/target/release/libra node --config-path ~/.libra/validator.yaml
```

---
**End of Ceremony Steps**
