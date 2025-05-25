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

### Native Windows

1. **Create directory for binary**:
   ```powershell
   mkdir %HOMEPATH%\bin
   ```

2. **Copy and rename**:
   ```powershell
   copy "Downloads\libra-windows-x64.exe" %HOMEPATH%\bin\libra.exe
   ```

3. **Add to PATH**:
    - Open System Properties → Advanced → Environment Variables
    - Add `%HOMEPATH%\bin` to your PATH variable
    - Or via command line:
   ```powershell
   setx PATH "%PATH%;%HOMEPATH%\bin"
   ```

4. **Verify installation**:
   ```powershell
   libra version
   ```

### Windows Subsystem for Linux (WSL2)

:::tip WSL2 Users
For WSL2, use the Linux binary:
1. Download the Linux binary (not Windows)
2. Follow the Linux installation steps above
   :::

</TabItem>
</Tabs>

## Troubleshooting

### Common Issues

| Problem | Solution |
|---------|----------|
| "command not found" | Ensure the binary location is in your PATH |
| "Permission denied" | Make the file executable: `chmod +x libra` |
| "cannot execute binary file" | Wrong architecture - check your system architecture |
| OpenSSL errors | Install OpenSSL for your platform |
| "bad CPU type" (macOS) | Download the correct architecture (x64 vs arm64) |
