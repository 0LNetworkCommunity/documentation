---
sidebar_label: From Pre-built Binaries 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install Open Libra CLI From Pre-built Binary

This guide covers installing pre-built binaries of the Open Libra CLI tool across macOS, Linux, and Windows platforms.

## Supported Platforms

| Platform | Architectures | Notes |
|----------|--------------|-------|
| macOS | x64 (Intel), arm64 (Apple Silicon) | Requires Homebrew |
| Linux | x64, arm64 | Built on Ubuntu 24.04 |
| Windows | x64 only | arm64 runs via emulation |

:::warning
**Pre-built binaries carry inherent security risks.**
- For production environments or maximum security, [build from source](./install-open-libra-cli.md)
- Only download from `https://github.com/0LNetworkCommunity/libra-framework/releases` (under Assets)
  :::

## Download Instructions

### 1. Check Your Architecture

<Tabs>
<TabItem value="unix" label="macOS/Linux" default>

```bash
uname -m
```

**Results:**
- `x86_64` = Download x64 binary
- `arm64` or `aarch64` = Download arm64 binary

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
wmic os get osarchitecture
```

**Results:**
- `64-bit` = Download x64 binary
- `32-bit` = Not supported

</TabItem>
</Tabs>

### 2. Download the Binary

1. Visit the [official releases page](https://github.com/0LNetworkCommunity/libra-framework/releases)
2. Find the latest release
3. Download the appropriate binary:

| System | File to Download |
|--------|------------------|
| Intel Mac | `libra-macos-x64` |
| Apple Silicon Mac (M1/M2/M3/M4) | `libra-macos-arm64` |
| Standard Linux | `libra-linux-x64` |
| ARM Linux (Raspberry Pi) | `libra-linux-arm64` |
| Windows | `libra-windows-x64.exe` |

## Installation Instructions

<Tabs>
<TabItem value="macos" label="macOS" default>

### Prerequisites
- [Homebrew](https://brew.sh/) must be installed

### Steps

1. **Install OpenSSL dependency**:
   ```bash
   brew install openssl
   ```

2. **Move binary to PATH**:
   ```bash
   # Create bin directory if it doesn't exist
   mkdir -p ~/bin
   
   # Copy and rename the binary (replace arm64 with x64 if needed)
   cp ~/Downloads/libra-macos-arm64 ~/bin/libra
   ```

3. **Remove quarantine** (macOS security feature):
   ```bash
   xattr -dr com.apple.quarantine ~/bin/libra
   ```

4. **Make executable**:
   ```bash
   chmod +x ~/bin/libra
   ```

5. **Add to PATH** (if ~/bin isn't already in PATH):
   ```bash
   echo 'export PATH="$HOME/bin:$PATH"' >> ~/.zshrc
   source ~/.zshrc
   ```

6. **Verify installation**:
   ```bash
   libra version
   ```

</TabItem>
<TabItem value="linux" label="Linux">

### Prerequisites
- Ubuntu 24.04 or newer (for pre-built binaries)

### Steps

1. **Install OpenSSL dependency**:
   ```bash
   sudo apt update
   sudo apt install openssl
   ```

2. **Move binary to PATH**:
   ```bash
   # Create bin directory if it doesn't exist
   mkdir -p ~/bin
   
   # Copy and rename the binary (replace x64 with arm64 if needed)
   cp ~/Downloads/libra-linux-x64 ~/bin/libra
   ```

3. **Make executable**:
   ```bash
   chmod +x ~/bin/libra
   ```

4. **Add to PATH** (if ~/bin isn't already in PATH):
   ```bash
   echo 'export PATH="$HOME/bin:$PATH"' >> ~/.bashrc
   source ~/.bashrc
   ```

5. **Verify installation**:
   ```bash
   libra version
   ```

:::info Ubuntu 22.04 and Older
The pre-built binaries require Ubuntu 24.04. For older versions:
- Build from source (recommended)
- Use Docker/containerization
- Upgrade to Ubuntu 24.04
  :::

</TabItem>



<TabItem value="windows" label="Windows">

> **Assumption:** You have downloaded **`libra-windows-x64.exe`** into **`C:\Users\<you>\Downloads`**.

### TL;DR — One‑liner

You can set up `libra` in one step. Paste the following commands into the `PowerShell` application, press Enter, and wait for the version output to confirm success:

```powershell
mkdir "$HOME\bin" -ErrorAction SilentlyContinue; `
Move-Item "$HOME\Downloads\libra-windows-x64.exe" "$HOME\bin\libra.exe" -Force; `
setx PATH "$($Env:PATH);$HOME\bin"; `
$Env:PATH += ";$HOME\bin"; `
libra version
```
What it does:
- **Create `$HOME\bin`** if it does not exist.
- **Move and rename** the downloaded file to `$HOME\bin\libra.exe`.
- **Update your `PATH`** permanently so Windows can find `libra` in any new session.
- **Refresh `PATH`** for the current window so you can use `libra` immediately.
- **Verify** by printing the installed version.

You should see output like:

```
LIBRA VERSION 8.0.7
build timestamp: 2025-06-04T...
```

<br/>

### Step‑by‑Step guide

1. **Create a personal `bin` folder**  
   This folder will hold your local executables and allow you to run them from anywhere.
   ```powershell
   mkdir "$HOME\bin"
   ```

2. **Move and rename the binary**  
   Place the downloaded file into your new folder and give it a simple name.
   ```powershell
   Move-Item "$HOME\Downloads\libra-windows-x64.exe" "$HOME\bin\libra.exe"
   ```

3. **Add the folder to your `PATH` (permanent)**  
   This makes `libra` available in any future PowerShell window.
   ```powershell
   setx PATH "$($Env:PATH);$HOME\bin"
   ```
   :::caution
   This updates the system registry but does not change the `PATH` in the current session.
   :::

4. **Apply the new `PATH` to this session**  
   So you don’t need to close and reopen PowerShell.
   ```powershell
   $Env:PATH += ";$HOME\bin"
   ```

5. **Verify the installation**  
   Run the version command to confirm that `libra` is installed correctly.
   ```powershell
   libra version   # or: libra --help
   ```

If everything is configured, you’ll see `libra` print its version information.

---

---

## Windows Subsystem for Linux (WSL2)

:::tip WSL2 users
In WSL2, install as if on Linux:

1. Download the **Linux** version into your WSL distro.
2. Follow the [Linux installation steps](../linux) provided in this guide.
:::

</TabItem>


</Tabs>

## Troubleshooting

### Common Issues

| Symptom                                     | Likely Cause                                                                 | Resolution                                                                                       |
|---------------------------------------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| `"command not found"`                       | Binary location is not in your `PATH`                                         | Ensure the binary location is in your `PATH`                                                     |
| `"Permission denied"`                       | File is not marked as executable                                              | Run `chmod +x libra` to make the file executable                                                 |
| `"cannot execute binary file"`              | Downloaded binary does not match your system architecture                     | Check your system architecture and download the correct binary                                   |
| `OpenSSL errors`                            | OpenSSL is missing or not properly installed                                   | Install or update OpenSSL for your platform                                                       |
| `"bad CPU type"` (macOS)                    | Binary was built for the wrong CPU architecture                                | Download the correct architecture (x64 vs. arm64)                                                 |
| `libra : The term 'libra' is not recognized…` | Current PowerShell session has not picked up the updated `PATH`                | Open a new PowerShell window, or run step 4 to refresh `PATH` in the current session             |
| Path appears as `C:\Users\win\Downloads\%HOMEPATH%\bin` | `%HOMEPATH%` was used instead of `$HOME` or `%USERPROFILE%` (lacks drive letter) | Re-run steps 1–3 using `$HOME` (PowerShell) or `%USERPROFILE%` (cmd)                              |
| Need to type `.\libra.exe` instead of `libra` | Windows does not execute files from the current directory by default           | Ensure `$HOME\bin` is in your `PATH`; then running `libra` will work without `.\`                |

