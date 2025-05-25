---
sidebar_label: From Source 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install Open Libra CLI From Source

This guide will walk you through installing the **Open Libra CLI** by building it from source. The CLI provides essential tools for interacting with the Open Libra network.

## Installation Overview

The installation process involves these main steps:

1. **Prerequisites Setup** - Install required system dependencies and Rust toolchain for your operating system
2. **Clone Repository** - Download the Open Libra Framework source code
3. **Build CLI** - Compile the CLI in release mode for optimal performance
4. **Install Binaries** - Copy the built binaries to your system PATH
5. **Verify Installation** - Confirm the CLI is working correctly

## Prerequisites Setup

Before beginning, ensure you have the following tools installed on your system:

- **Rust & Cargo** - The Rust programming language and its package manager
- **Git** - Version control system for cloning the repository
- **cURL** - Command-line tool for downloading files
- **C/C++ toolchain** - Compiler and build tools
- **OpenSSL headers** - Cryptographic library headers
- **CMake** - Cross-platform build system

## System-Specific Setup

Select your operating system for detailed installation instructions of all the prerequisites:

<Tabs
groupId="operating-systems"
defaultValue="linux"
values={[
{ label: 'Linux', value: 'linux' },
{ label: 'macOS', value: 'mac' },
{ label: 'Windows', value: 'windows' },
]}>

<TabItem value="linux">

**Tested on Ubuntu 22.04 LTS and compatible distributions.**

#### System Dependencies

```bash
# Update package lists
sudo apt update

# Install required packages
sudo apt install -y \
    build-essential \
    clang \
    llvm \
    lld \
    cmake \
    git \
    curl \
    pkg-config \
    libssl-dev \
    libgmp-dev \
    libpq-dev
```

#### Rust & Cargo Installation

The recommended installation method is `rustup`, which manages Rust toolchains:

```bash
# Download and install Rust
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh -s -- --default-toolchain stable -y

# Activate the toolchain in your current shell
source "$HOME/.cargo/env"

# Verify the installation
rustc --version && cargo --version
```

**To update an existing Rust installation:**

```bash
rustup update stable
```

</TabItem>

<TabItem value="mac">

#### System Dependencies

Using [Homebrew](https://brew.sh/) (recommended):

```bash
# Install required packages
brew install git curl cmake llvm pkg-config openssl@3 gmp

# Configure OpenSSL for pkg-config
echo 'export PKG_CONFIG_PATH="/opt/homebrew/opt/openssl@3/lib/pkgconfig:$PKG_CONFIG_PATH"' >> ~/.zprofile

# Apply the changes (restart terminal or run one of these)
source ~/.zshrc    # if using zsh
source ~/.bash_profile  # if using bash  
source ~/.profile  # for other shells
```

**Alternative: Using MacPorts**

```bash
sudo port install cmake llvm git curl pkgconfig openssl3 gmp
```

#### Rust & Cargo Installation

```bash
# Download and install Rust
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh -s -- --default-toolchain stable -y

# Activate the toolchain in your current shell
source "$HOME/.cargo/env"

# Verify the installation
rustc --version && cargo --version
```

**To update an existing Rust installation:**

```bash
rustup update stable
```

</TabItem>

<TabItem value="windows">

#### System Dependencies

**Option 1: Using Chocolatey (Recommended)**

First, install [Chocolatey](https://chocolatey.org/install) if you haven't already, then:

```powershell
# Install required packages
choco install git cmake llvm rust-ms

# Install Visual Studio Build Tools (required for compilation)
choco install visualstudio2022buildtools --package-parameters "--add Microsoft.VisualStudio.Workload.VCTools"
```

**Option 2: Manual Installation**

1. Install [Git for Windows](https://git-scm.com/download/win)
2. Install [CMake](https://cmake.org/download/)
3. Install [Visual Studio Build Tools](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022)
4. Install [LLVM](https://releases.llvm.org/download.html)

#### Rust & Cargo Installation

```powershell
# Download and install Rust (run in PowerShell)
Invoke-WebRequest -Uri https://win.rustup.rs/x86_64 -OutFile rustup-init.exe
.\rustup-init.exe --default-toolchain stable -y

# Restart your terminal or run:
$env:PATH += ";$env:USERPROFILE\.cargo\bin"

# Verify the installation
rustc --version; cargo --version
```

**To update an existing Rust installation:**

```powershell
rustup update stable
```

</TabItem>

</Tabs>

## Build & Install the CLI

Once you have all prerequisites installed, follow these steps to build and install the Open Libra CLI:

### 1. Clone the Repository

```bash
git clone https://github.com/0LNetworkCommunity/libra-framework.git
cd libra-framework
```

### 2. Build the CLI

```bash
# Build in release mode for optimal performance
cargo build --release -p libra
```

**Note:** The build process may take several minutes depending on your system's performance.

### 3. Install the Binary

<Tabs
groupId="install-methods"
defaultValue="cargo-install"
values={[
{ label: 'Using cargo install (Recommended)', value: 'cargo-install' },
{ label: 'Manual installation', value: 'manual-install' },
]}>

<TabItem value="cargo-install">

```bash
# Install directly using cargo (recommended)
cargo install --path tools/libra --force
```

</TabItem>

<TabItem value="manual-install">

```bash
# Copy the binary to your local bin directory
install -m 755 target/release/libra "$HOME/.cargo/bin"
```

**On Windows (PowerShell):**

```powershell
# Create the directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.cargo\bin"

# Copy the binary
Copy-Item "target\release\libra.exe" -Destination "$env:USERPROFILE\.cargo\bin"
```

</TabItem>

</Tabs>

### 4. Update Your PATH (if needed)

The PATH update is only necessary if you used the manual installation method and chose to install to `$HOME/.cargo/bin`. If you used `cargo install` or installed to `/usr/local/bin`, you can skip this step.

**Linux/macOS:**

```bash
# Add to appropriate shell configuration file
if [[ "$SHELL" == *"zsh"* ]]; then
    echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
elif [[ "$SHELL" == *"bash"* ]]; then
    echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.bashrc && source ~/.bashrc
else
    echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.profile && source ~/.profile
fi

# Alternative: Check manually and add to your preferred shell config
# echo $SHELL  # to see which shell you're using
```

**Windows (PowerShell):**

```powershell
# Add to PATH permanently
$oldPath = [Environment]::GetEnvironmentVariable("PATH", "User")
if ($oldPath -notlike "*$env:USERPROFILE\.cargo\bin*") {
    [Environment]::SetEnvironmentVariable("PATH", "$oldPath;$env:USERPROFILE\.cargo\bin", "User")
}
```

### Verify Installation

```bash
# Check that the CLI is properly installed
libra --version

# View available commands
libra --help
```

## Troubleshooting

### Common Issues

**Build fails with OpenSSL errors:**
- **Linux:** Ensure `libssl-dev` is installed
- **macOS:** Make sure PKG_CONFIG_PATH includes OpenSSL path
- **Windows:** Install OpenSSL or use the Windows-specific Rust toolchain

**Permission denied when installing:**
- Ensure you have write permissions to `$HOME/.cargo/bin`
- On Windows, run PowerShell as Administrator if needed

**Command not found after installation:**
- Verify `$HOME/.cargo/bin` is in your PATH
- Restart your terminal or source your shell configuration

**Compilation takes too long:**
- The initial build can take 10-30 minutes depending on your system
- Consider using `cargo build --release -j $(nproc)` to use all CPU cores

### Getting Help

If you encounter issues not covered here:

1. Check the [project issues](https://github.com/0LNetworkCommunity/libra-framework/issues) on GitHub
2. Ensure you're using the latest version of Rust and dependencies

## Next Steps

After successful installation:

1. Run `libra --help` to explore available commands
2. Join the Open Libra contributors community on Discord for support and updates

---

**Need pre-built binaries?** Visit the [binary releases page](./install-open-libra-cli-binaries.md) to learn about downloadable binaries (when available).
