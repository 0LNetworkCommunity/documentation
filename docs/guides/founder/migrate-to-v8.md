---
sidebar_label: "Re-join & Vouch (v8)"
description: |
  A plain-language guide **for Founder accounts** – anyone who held 0L coins *before* the Level-8 upgrade.
  These steps implement the community-approved **FILO** (First-In-Last-Out) proposal ([read the rationale](https://docs.openlibra.io/blog/proposals/back-to-filo-the-future-of-open-libra)).
  Learn why you must run a small "re-join" action and receive a quick "vouch" from a friend, plus what to do if things go wrong.
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Re-join & Vouch – Getting Your 0L Account Moving Again (v8 Upgrade)

**For Founder accounts** – anyone who held 0L coins before the Level-8 upgrade

This guide implements the community-approved **FILO** (First-In-Last-Out) proposal ([read the rationale](https://docs.openlibra.io/blog/proposals/back-to-filo-the-future-of-open-libra)). Learn why you must run a "re-join" action and receive a "vouch" from a friend to reactivate your account.



## Prerequisites

### Install the CLI
All steps require the **Open Libra command-line tool** v8.0+:

```bash
libra --version   # Must show version ≥ 8.0
```

If not installed, follow → Install the Open Libra CLI from [source code](https://docs.openlibra.io/getting-started/install-open-libra-cli) or [binaries](https://docs.openlibra.io/getting-started/install-open-libra-cli/install-open-libra-cli-binaries)

### Verify You're a Founder
```bash
libra query view 0x1::founder::is_founder <your-address>
```
If this returns **true**, continue with this guide.

## Quick Start ⚡

1. **Re-join the network**
```bash
libra txs user re-join
```

2. **Get vouched by a friend**
   Ask them to run:
```bash
libra txs user vouch --vouch-for <your-address>
```

3. **Wait for next epoch** (~24 hours)
Your coins will begin unlocking automatically


## Understanding the Process

### What is FILO?

FILO (First-In-Last-Out) is the v8 migration strategy that:
- **Resets** all founder accounts to ensure fair participation
- **Restarts** the gradual coin unlock schedule
- **Requires** social proof via vouching to prevent abuse

[Full FILO proposal details →](https://docs.openlibra.io/blog/proposals/back-to-filo-the-future-of-open-libra)

### Why These Steps?

| Step | Purpose | Technical Details |
|------|---------|-------------------|
| **Re-join** | Signals your return and migrates account to v8 format | Calls `filo_migration::maybe_migrate` which initializes Activity, Founder status, SlowWallet reset, Vouch structures, and PageRank |
| **Vouch** | Provides social proof you're a real person | Creates on-chain attestation via `vouch::vouch_for`, expires after 45 epochs |

## Step-by-Step Instructions

### 1. Prepare Your Account

**Requirements:**
- Your 24-word mnemonic phrase
- Latest 0L CLI installed
- Network connection

### 2. Execute Re-join

```bash
libra txs user re-join
```

**What happens:**
- Updates your account to v8 data structures
- Resets your slow wallet to 0 unlocked balance
- Initializes vouch and trust systems
- Returns a transaction hash on success

### 3. Obtain a Vouch

Share your address with any active 0L user and request:
```bash
libra txs user vouch --vouch-for <your-address>
```

**Vouch rules:**
- Any active user can vouch (once per day)
- Vouches last 45 epochs (~45 days)
- Required for sending transactions

### 4. Verify Success

```bash
libra query view 0x1::reauthorization::is_v8_authorized <your-address>
```
Returns **true** when fully authorized.


## Common Questions

### Do I need a vouch for coins to unlock?
**No.** Unlocking begins automatically after re-join at the next epoch. Vouches are only required for *sending* transactions.

### Why are my coins locked after re-join?
FILO resets your unlocked balance to 0. The first unlock happens at the next epoch boundary (~24h), regardless of vouch status.

### Can I re-join multiple times?
**Yes.** The system safely ignores duplicate re-joins.

### What happens when my vouch expires?
- Your balance continues unlocking normally
- Outgoing transactions fail with `EU_NO_VOUCHER`
- Simply request a new vouch to resume sending

### Can I vouch for myself?
**No.** Self-vouching is blocked with error `EU_SELF_VOUCH`.


## Troubleshooting

| Error | Cause | Solution |
|-------|-------|----------|
| `ENOT_MIGRATED_FROM_V7` | Haven't run re-join | Execute `libra txs user re-join` |
| `EFOUNDER_HAS_NO_FRIENDS` | Founder without valid vouch | Get vouched by an active user |
| `EU_NO_VOUCHER` | No valid vouch found | Request a vouch from a friend |
| `EU_ACCOUNT_NOT_INITIALIZED` | Voucher hasn't migrated | Voucher must run re-join first |
| `EU_SELF_VOUCH` | Attempted self-vouch | Ask someone else |
| `EU_ALREADY_VOUCHED` | Duplicate vouch exists | Already vouched - no action needed |
| `EU_VOUCH_LIMIT_EPOCH` | Voucher's daily limit reached | Wait 24h or find another voucher |
| `EU_REVOKE_COOLDOWN` | Revoked too recently | Wait 3 epochs before new actions |
| Balance shows `0 / X` unlocked | FILO reset | Wait one epoch for first unlock |
| Lost mnemonic | No recovery possible | Mnemonic required - treat like hardware wallet seed |


## Technical Deep Dive

<details>
<summary>🔧 Advanced Implementation Details</summary>

### Core Functions

**Re-join Migration** (`filo_migration::maybe_migrate`):
- `activity::migrate` - Marks account as v8 active
- `founder::migrate` - Handles founder-specific setup
- `slow_wallet::filo_migration_reset` - Resets unlock schedule to 0
- `vouch::init` - Creates vouch data structures
- `page_rank_lazy::maybe_initialize_trust_record` - Initializes trust scoring

**Authorization Check** (`reauthorization::assert_v8_authorized`):
- Verifies migration status via `activity::is_initialized`
- For founders: requires `founder::has_friends` (valid vouches)
- For community wallets: requires donor authorization

**Vouch System** (`vouch` module):
- Vouches stored in `ReceivedVouches` and `GivenVouches` resources
- 45-epoch expiration via `EXPIRATION_ELAPSED_EPOCHS`
- Automatic garbage collection of expired vouches
- Anti-sybil protections via ancestry checks

### Validator-Specific Requirements

Validators need enhanced social proof:
- Required vouches: `sqrt(validator_count) + 1`
- Calculated by `proof_of_fee::calculate_min_vouches_required`
- Blocks validator actions if threshold not met

### Module Interaction Flow

```
User → re-join → filo_migration::maybe_migrate
                        ↓
                  [Migrates 5 systems]
                        ↓
User → get vouched → vouch::vouch_for
                        ↓
                  [Creates vouch edge]
                        ↓
Any transaction → reauthorization::assert_v8_authorized
                        ↓
                  [Checks migration + vouches]
```

</details>


