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

:::note
**Founder accounts require vouches for coins to unlock.** Without at least one valid vouch that provides sufficient trust score, your coins remain locked indefinitely. This security measure prevents abandoned or compromised accounts from accessing funds.
:::

## Prerequisites

### Install the CLI
All steps require the **Open Libra command-line tool** v8.0+:

```bash
libra --version   # Must show version ≥ 8.0
```

If not installed, follow → Install the Open Libra CLI from [source code](https://docs.openlibra.io/getting-started/install-open-libra-cli) or [binaries](https://docs.openlibra.io/getting-started/install-open-libra-cli/install-open-libra-cli-binaries)

### Verify You're a Founder
```bash
libra query view -f 0x1::founder::is_founder --args <your-address>
```
If this returns **true**, continue with this guide.

## Quick Start ⚡

1. **Re-join the network**
```bash
libra txs user re-join
```

2. **Get vouched by a friend** *(Required for unlocking!)*
   Ask them to run:
```bash
libra txs user vouch --vouch-for <your-address>
```

3. **Verify your trust score meets threshold**
```bash
libra query view -f 0x1::founder::is_voucher_score_valid --args <your-address>
```

4. **Wait for next epoch** (~24 hours)
   Your coins will begin unlocking automatically *only if your trust score is sufficient*

## Understanding the Process

### What is FILO?

FILO (First-In-Last-Out) is the v8 migration strategy that:
- **Resets** all founder accounts to establish active participation
- **Restarts** the gradual coin unlock schedule from zero
- **Requires** social proof via vouching to prevent automated attacks
- **Protects** the network from abandoned, lost, or compromised accounts

[Full FILO proposal details →](https://docs.openlibra.io/blog/proposals/back-to-filo-the-future-of-open-libra)

### Why These Steps?

| Step | Purpose | Technical Details |
|------|---------|-------------------|
| **Re-join** | Signals your return and migrates account to v8 format | Calls `filo_migration::maybe_migrate` which initializes Activity, Founder status, SlowWallet reset, Vouch structures, and PageRank |
| **Vouch** | Provides social proof you're a real person AND enables coin unlocking | Creates on-chain attestation via `vouch::vouch_for`, contributes to trust score calculation. Must achieve score ≥ 100,000 |

## The Trust Score System

### How Trust Scores Work

The Open Libra network uses a PageRank-inspired algorithm to calculate trust scores. Imagine trust as water flowing through pipes - it starts at the "roots of trust" (genesis validators) with full pressure, but loses half its pressure at each connection point as it flows outward through the network.

### Understanding Your Trust Score

Your trust score determines three critical things:
1. **Whether your coins can unlock** - Founders need a minimum score of 100,000
2. **How many vouches you can give** - Higher scores allow more outgoing vouches
3. **Your influence in the network** - Well-connected users strengthen the network

The algorithm traces all possible paths from root validators to your account. Each path contributes trust value that decreases by 50% per hop. All path values sum together to create your final score.

### Trust Score Scenarios

Here are the exact calculations for common situations Founder accounts encounter:

#### Scenario 1: Direct Root Vouch
**You receive a vouch directly from a genesis validator**

When a root validator vouches for you, the trust calculation works as follows:
- The algorithm starts with power 200,000 at the root
- After one hop to reach you, power becomes 100,000 (50% decay)
- Your trust score: 100,000 ✓
- Status: Meets threshold, coins will unlock next epoch

```
Root Validator → You
Starting power: 200,000
Your received power: 100,000
Threshold needed: 100,000
Result: AUTHORIZED ✓
```

#### Scenario 2: Second-Degree Connection
**You're vouched by someone who was vouched by a root**

This creates a two-hop path from root to you:
- Root starts with 200,000 power
- Your voucher receives 100,000 (one hop from root)
- You receive 50,000 (two hops from root)
- Your trust score: 50,000 ✗
- Status: Below threshold, coins remain locked

```
Root → Friend → You
Power flow: 200,000 → 100,000 → 50,000
Your score: 50,000
Threshold: 100,000
Result: NOT AUTHORIZED ✗
```

#### Scenario 3: Multiple Second-Degree Connections
**You need multiple vouches from second-degree users**

Trust scores from different paths add together:
- Path 1: Root A → Friend A → You = 50,000
- Path 2: Root B → Friend B → You = 50,000
- Combined trust score: 100,000 ✓
- Status: Meets threshold through multiple paths

```
Root A → Friend A → You (50,000)
    +
Root B → Friend B → You (50,000)
    =
Total Score: 100,000 ✓
```

#### Scenario 4: Distant Connections
**You're three or more hops from roots**

Trust decays exponentially with distance:
- Three hops: 200,000 → 100,000 → 50,000 → 25,000
- Four hops: 200,000 → 100,000 → 50,000 → 25,000 → 12,500
- Five hops: Too weak to contribute meaningful trust

```
Root → A → B → You
Power: 200,000 → 100,000 → 50,000 → 25,000
Need 4 such paths to reach 100,000 threshold
```

#### Scenario 5: Complex Real Networks
**Most users have multiple paths of varying lengths**

Real networks create intricate webs of trust:
```
Path 1: Root A → You (direct): 100,000
Path 2: Root B → Friend X → You: 50,000  
Path 3: Root C → X → Y → You: 25,000
Path 4: Root A → P → Q → You: 25,000
Total Score: 200,000 ✓
Status: Well-connected, exceeds threshold
```

### Checking Your Trust Status

Monitor your exact trust position with these commands:

```bash
# Check if your trust score meets Founder threshold
libra query view -f 0x1::founder::is_voucher_score_valid --args <your-address>

# View your current cached trust score
libra query view -f 0x1::page_rank_lazy::get_cached_score --args <your-address>

# Calculate fresh trust score (shows depth and nodes processed)
libra query view -f 0x1::page_rank_lazy::calculate_score --args <your-address>

# Verify full v8 authorization
libra query view -f 0x1::reauthorization::is_v8_authorized --args <your-address>
```

## Being Strategic with Vouches

### Why Vouch Choices Matter

Your vouching decisions create permanent connections in the trust network. Think of vouches as professional recommendations - they reflect on both parties. Poor vouching choices can damage your reputation and limit your future influence in the network.

### Vouch Wisely Because:

1. **Limited Resources** - You can only give one vouch per epoch (24 hours). Choose recipients who will strengthen the network.

2. **Reputation Risk** - If you vouch for accounts that later behave maliciously or abandon the network, it reflects poorly on your judgment.

3. **Network Effects** - Your vouches help determine who can unlock coins and participate. Vouching for inactive accounts weakens the overall network.

4. **Revocation Penalties** - Removing a vouch triggers a 3-epoch cooldown before you can vouch again. Frequent revocations suggest poor judgment.

5. **Trust Flow** - When you vouch for someone, you're passing along trust you received from others. Use this responsibility carefully.

### Before Vouching, Verify:

- The account has completed re-join (check their Activity status)
- You know the person or their contributions to the network
- They're likely to remain active and constructive
- They understand their obligations as a network participant

## Managing Your Vouches

### Viewing Your Vouches

Check your current vouching relationships:

```bash
# See who you've vouched for
libra query view -f 0x1::vouch::get_given_vouches --args <your-address>

# See who has vouched for you
libra query view -f 0x1::vouch::get_received_vouches --args <your-address>

# Check how many vouches you've given this epoch
libra query view -f 0x1::vouch::get_given_this_epoch --args <your-address>
```

### Revoking a Vouch

Sometimes you need to remove a vouch. Perhaps the account became inactive, acted maliciously, or you need to reallocate your limited vouches. Here's how revocation works:

```bash
libra txs user revoke --vouch-for <address-to-revoke>
```

### Revocation Rules and Consequences

The revocation system includes several protective mechanisms:

1. **Revocation Limit** - Maximum 2 revocations per epoch. This prevents gaming the system by rapidly adding and removing vouches.

2. **Cooldown Period** - After revoking, you must wait 3 full epochs (approximately 72 hours) before giving any new vouches. This enforces thoughtful vouching decisions.

3. **Immediate Effect** - Revocations take effect immediately. The revoked account's trust score updates, potentially dropping below the unlock threshold.

4. **Tracked History** - The system maintains a permanent record of revocations. Excessive revocations may impact your reputation.

### When to Consider Revocation

Revocation should be rare. Consider it only when:
- The account has been inactive for extended periods
- You have evidence of malicious behavior
- You vouched in error (wrong address)
- The account holder requests removal

Remember that revocation immediately impacts the other account's ability to unlock coins and transact. Use this power responsibly.

### Revocation Example Timeline

Here's what happens when you revoke:

```
Epoch 100: You revoke a vouch
Epoch 100-102: You cannot give new vouches (cooldown)
Epoch 103: You can vouch again
Note: You can still revoke others during cooldown
```

## Understanding Anti-Sybil Protections

### The Sybil Attack Problem

A Sybil attack occurs when one person creates many fake identities to gain disproportionate influence. In Open Libra, this could mean creating numerous accounts to claim more unlocking coins or manipulate the trust network. The vouching system creates multiple layers of defense against such attacks.

### Layer 1: Root Scarcity

The genesis validators (roots of trust) form an immutable foundation. Since no new roots can be created and existing roots are well-known community members, attackers cannot insert fake identities at the network's core. This scarcity makes root vouches valuable and difficult to obtain fraudulently.

### Layer 2: Trust Decay

The 50% trust decay per hop creates a natural barrier. Even if an attacker convinces someone to vouch for multiple fake accounts, each subsequent layer receives exponentially less trust. By the third hop, accounts only receive 25% of root trust, requiring coordinated vouching from multiple legitimate users to meet thresholds.

### Layer 3: Ancestry Verification

The system checks family relationships through the ancestry module. Related accounts cannot vouch for each other, preventing attackers from creating "vouch families" where they control all members. This forces attackers to convince truly independent users to participate.

### Layer 4: Rate Limiting

Multiple mechanisms limit vouching speed:
- One vouch per account per epoch prevents rapid network building
- Vouchers with low trust scores can only vouch for 1-3 accounts total
- The 45-epoch expiration requires ongoing maintenance of fake networks

### Layer 5: Revocation Penalties

The 3-epoch cooldown after revocation prevents "vouch cycling" where attackers might try to reuse their limited vouches by constantly adding and removing accounts. Combined with the 2-revocations-per-epoch limit, this makes gaming the system extremely slow and detectable.

### Layer 6: Economic Barriers

Creating a meaningful Sybil network requires:
- Convincing multiple legitimate users to vouch (social cost)
- Maintaining those vouches for 45+ epochs (time cost)
- Managing revocation cooldowns and limits (opportunity cost)
- Building sufficient trust scores for each identity (network cost)

The combination makes large-scale Sybil attacks economically irrational compared to legitimate participation.

### Real-World Example

Consider an attacker trying to create 10 fake Founder accounts:
1. Each needs trust score ≥ 100,000 to unlock coins
2. Without root access, each needs 2+ second-degree vouches
3. That's 20+ vouches from legitimate users
4. Users can only give 1 vouch per epoch
5. Low-trust users can only maintain 1-3 total vouches
6. Vouches expire after 45 epochs

The attacker would need to convince 10-20 legitimate users to dedicate their scarce vouches for 45+ epochs. The social engineering required makes this far harder than simply participating legitimately.

## Common Questions

### Do I need a vouch for coins to unlock?
**YES!** This requirement applies specifically to Founder accounts. Without vouches that provide a trust score of at least 100,000, your coins remain locked permanently. The system checks your authorization status before each epoch's unlock calculation.

### Why are my coins still locked after getting vouched?
Several factors could be preventing unlock:

**Insufficient trust score** - Your voucher might be too distant from roots. A vouch from someone three hops away only provides 25,000 trust, far below the 100,000 threshold.

**Vouch not yet processed** - Transactions take a few minutes to finalize on chain. Check your trust score after waiting.

**Epoch boundary pending** - Unlocks only occur at epoch transitions, approximately every 24 hours. Even with proper vouches, you must wait for the next boundary.

**Expired vouch** - Vouches last 45 epochs. Check `vouch::get_received_vouches` to see expiration status.

### How many vouches do I need?
The number depends entirely on your vouchers' positions in the trust network:
- **1 root validator vouch** = 100,000 trust (meets threshold)
- **2 second-degree vouches** = 50,000 each = 100,000 total
- **4 third-degree vouches** = 25,000 each = 100,000 total
- **Mixed distances** = Calculate each path's contribution

Use `page_rank_lazy::calculate_score` to see your exact score breakdown.

### Can I re-join multiple times?
**Yes.** The migration function includes safety checks that prevent any negative effects from repeated execution. However, re-joining won't help if you lack sufficient vouches - focus on building trust connections instead.

### What makes a vouch valid?
Beyond the basic technical requirements, a valid vouch must:
- **Not be expired** - Given within the last 45 epochs
- **From an unrelated account** - No shared ancestry per the family tree
- **From an initialized account** - Voucher completed v8 migration
- **Within voucher's limits** - They haven't exceeded their quality-based quota
- **From an active account** - Inactive accounts' vouches may have less value

### What happens when my vouch expires?
The 45-epoch expiration creates several effects:
- Your trust score recalculates without the expired vouch
- If score drops below 100,000, unlock stops at the next epoch
- Previously unlocked coins remain fully accessible
- You'll need new vouches to resume unlocking

Monitor expiration dates and request renewal before they lapse.

### Why can well-connected users give more vouches?
The system rewards network builders by allowing those with higher trust scores to vouch for more accounts:

Trust Score → Maximum Vouches:
- 0-49,999 → 1 vouch
- 50,000-99,999 → 3 vouches
- 100,000-199,999 → 5 vouches
- 200,000-399,999 → 10 vouches
- 400,000-799,999 → 15 vouches
- 800,000+ → 20 vouches

This incentivizes users to build strong network positions while preventing spam from poorly connected accounts.

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| `ENOT_MIGRATED_FROM_V7` | Haven't run re-join | Execute `libra txs user re-join` |
| `EFOUNDER_HAS_NO_FRIENDS` | Trust score below 100,000 | Get vouches from better-connected users or more users |
| Coins won't unlock | Insufficient trust score | Check `founder::is_voucher_score_valid`, get strategic vouches |
| Trust score too low | Distant or few vouchers | Seek root validators or multiple second-degree vouches |
| `EU_NO_VOUCHER` | No vouches for transactions | Different from unlock requirement - any valid vouch works |
| `EU_VOUCH_LIMIT_EPOCH` | Voucher exhausted daily limit | Wait 24h or find another voucher |
| `EREVOCATION_LIMIT_REACHED` | Revoked 2+ times this epoch | Wait until next epoch to revoke again |
| `ECOOLDOWN_PERIOD_ACTIVE` | Recent revocation | Wait 3 epochs before new vouches |
| Balance shows 0 unlocked | No authorization | Verify trust score meets threshold |

## Technical Deep Dive

<details>
<summary>🔧 Advanced Implementation Details</summary>

### Trust Score Calculation

The PageRank-inspired algorithm in `page_rank_lazy` implements sophisticated trust propagation:

**Algorithm Core**:
```rust
// Trust propagation through network
walk_backwards_from_target_with_stats(
    current: address,
    roots: &vector<address>,
    visited: &mut vector<address>,
    current_power: u64,  // Starts at 200,000
    current_depth: u64,
    processed_count: &mut u64,
    max_depth_reached: &mut u64,
    max_depth: u64  // Default 5
)
```

**Key Mechanisms**:
- **Power Decay**: Each hop divides power by 2
- **Accumulation**: All paths sum together
- **Circuit Breaker**: Maximum 10,000 nodes processed
- **Cycle Prevention**: Visited set prevents infinite loops
- **Depth Limit**: Default maximum 5 hops

**Founder Validation**:
```move
// Minimum score required for Founders
const MULTIPLIER: u64 = 1;
const MAX_VOUCH_SCORE: u64 = 100_000;

public fun is_voucher_score_valid(user: address): bool {
    page_rank_lazy::get_trust_score(user) >= 
        MULTIPLIER * MAX_VOUCH_SCORE  // 100,000
}
```

### Authorization Flow

The complete authorization check for Founders:

```
Transaction Request
        ↓
reauthorization::assert_v8_authorized(account)
        ↓
    ┌─ Check 1: activity::is_initialized(account)
    │    └─ Ensures v8 migration completed
    │
    ├─ Check 2: founder::is_founder(account)  
    │    └─ Identifies pre-v8 accounts
    │
    └─ Check 3: founder::has_friends(account)
         └─ Verifies trust score ≥ 100,000
              ↓
         ┌─ YES: Transaction proceeds
         └─ NO: Abort with EFOUNDER_HAS_NO_FRIENDS
```

### Slow Wallet Integration

The slow wallet system enforces authorization requirements:

```move
public fun unlocked_amount(addr: address): u64 acquires SlowWallet {
    // Critical check - no unlock without authorization
    if (!reauthorization::is_v8_authorized(addr)) {
        return 0
    };
    
    if (exists<SlowWallet>(addr)) {
        let s = borrow_global<SlowWallet>(addr);
        return s.unlocked
    };
    
    libra_coin::balance(addr)
}
```

This creates the hard dependency: **No authorization = No unlock**.

### Vouch System Architecture

**Data Structures**:
```move
struct ReceivedVouches has key {
    incoming_vouches: vector<address>,
    epoch_vouched: vector<u64>,
}

struct GivenVouches has key {
    outgoing_vouches: vector<address>,
    epoch_vouched: vector<u64>,
}

struct VouchesLifetime has key {
    given: u64,
    given_revoked: u64,
    received: u64,
    last_revocation_epoch: u64,
    revocations_this_epoch: u64,
    last_given_epoch: u64,
    given_this_epoch: u64,
}
```

**Expiration Handling**:
- Vouches expire after 45 epochs automatically
- `garbage_collect_expired` removes stale entries
- Expired vouches don't contribute to trust scores

### Anti-Sybil Implementation

**Ancestry Checks**:
```move
public fun assert_unrelated(left: address, right: address) {
    let (is_family, _) = is_family(left, right);
    assert!(!is_family, error::invalid_state(EACCOUNTS_ARE_FAMILY));
}
```

**Rate Limiting**:
```move
// Per epoch: maximum 1 new vouch
const MAX_VOUCHES_PER_EPOCH: u64 = 1;

// Per epoch: maximum 2 revocations
const MAX_REVOCATIONS_PER_EPOCH: u64 = 2;

// Post-revocation: 3 epoch cooldown
const REVOCATION_COOLDOWN_EPOCHS: u64 = 3;
```

**Quality-Based Limits**:
```move
public fun calculate_score_limit(grantor_acc: address): u64 {
    let trust_score = page_rank_lazy::get_trust_score(grantor_acc);
    let max_score = page_rank_lazy::get_max_single_score();
    
    if (trust_score >= (max_score * 8)) {
        BASE_MAX_VOUCHES  // 20
    } else if (trust_score >= (max_score * 4)) {
        15
    } else if (trust_score >= (max_score * 2)) {
        10
    } else if (trust_score >= max_score) {
        5
    } else if (trust_score >= (max_score/2)) {
        3
    } else {
        1
    }
}
```

### Performance Optimizations

- **Lazy Evaluation**: Trust scores only recalculate when marked stale
- **Caching**: Scores cached with timestamps
- **Circuit Breakers**: Maximum 10,000 nodes per calculation
- **Batch Processing**: Staleness propagates efficiently
- **Early Termination**: Paths stop when power < 2

</details>

## Summary

For Founder accounts, building trust connections is not optional – it's the key to unlocking your coins. The system ensures that only accounts with genuine, active connections to the community can access funds. This protects everyone from sybil accounts while rewarding active participation.

Focus on quality over quantity when building vouch relationships. A single vouch from a root validator or two vouches from well-connected members will unlock your coins faster than many vouches from peripheral accounts. Remember that your vouching decisions reflect on you – choose wisely, revoke sparingly, and contribute to a strong trust network.

Your coins remain secure and will begin their gradual unlock as soon as your trust score reaches 100,000. The closer your connections to the network's roots of trust, the stronger your position becomes.
