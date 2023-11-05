---
sidebar_label: 'Tower'
sidebar_position: 3
description: 'Query for tower status'
---
# Tower

---

## Usage

```
$> libra query tower --account ADDRESS
```

Print out will be of the format:
```
{
  "previous_proof_hash": [
    120,
    71,
    165,
    199,
    236,
    24,
    230,
    162,
    161,
    145,
    161,
    99,
    140,
    197,
    219,
    230,
    130,
    147,
    171,
    245,
    102,
    132,
    154,
    82,
    116,
    194,
    187,
    40,
    205,
    130,
    147,
    0
  ],
  "verified_tower_height": 20948,
  "latest_epoch_mining": 609,
  "count_proofs_in_epoch": 0,
  "epochs_mining": 242,
  "contiguous_epochs_mining": 242
}
```

For more information about the `Tower` tool, check out the documentation [HERE](Tools/tower/index.md)

