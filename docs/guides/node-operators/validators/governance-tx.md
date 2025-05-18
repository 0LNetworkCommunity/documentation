# Governance Transactions
Updating system state under consensus

## Create a Upgrade Script
Sometimes we would like to adjust parameters of the network and not upgrade the underlying frameworks. For this we need to prepare and write an upgrade script.

Note: this requires you have the `libra` cli tool built locally.

## Create Template Script

`libra move framework governance --script-dir <Script Dir>  --framework-local-dir ~/libra-framework/framework/ --only-make-template`

## Prepare Script

You will want to name the folders appropriately. We will use `UP-0002` as an example. In actual historical example we wanted to change the nominal consensus reward due to a migration error at v7.0.0.

### Folder Structure

- up-002
    - sources
        - patch_nominal_reward_migration_error.move

### Script

By default it prepares a `multi_step_proposal`.

Note: you may notice the requirement of script hash is different from framework `hot upgrades`. Here  will just produce an empty vector (as opposed to a chain of hashes as is done in multi-step upgrades).

#### Before

```
script {
  // THIS IS A TEMPLATE GOVERNANCE SCRIPT
  // you can generate this file with commandline tools:
  // `libra move framework governance --script-dir --framework-local-dir`
  use diem_framework::diem_governance;
  use std::vector;

  fun main(proposal_id: u64){
      let next_hash = vector::empty();
      let _framework_signer = diem_governance::resolve_multi_step_proposal(proposal_id, @0000000000000000000000000000000000000000000000000000000000000001, next_hash);
  }
}
```


#### After
Make changes to the template. Here is an example of changing some on chain state for the `ol_framework::proof_of_fee` module
```
script {

  use diem_framework::diem_governance;
  use ol_framework::proof_of_fee;

  fun main(proposal_id: u64){
      let framework_signer = diem_governance::resolve_multi_step_proposal(
          proposal_id,
          @0000000000000000000000000000000000000000000000000000000000000001,
          vector[],
      );
      // Set the nominal_reward to the value prior to v7.0.1 hard fork
      proof_of_fee::genesis_migrate_reward(&framework_signer, 178204815);
  }
}
```

### Example: Governance Mode
Here's an example script of how the validators can enter "Governance Mode" where coin transfers are disabled during governance upgrades and events.

```

script {
  // Enter Governance Mode, and disable coin transactions
  use diem_framework::diem_governance;
  use ol_framework::ol_features_constants;
  use std::features;
  use std::vector;


  fun main(proposal_id: u64){
      let next_hash = vector::empty();
      let _framework_signer = diem_governance::resolve_multi_step_proposal(proposal_id, @0000000000000000000000000000000000000000000000000000000000000001, next_hash);
      // set governance mode
      let gov_mode_id = ol_features_constants::get_governance_mode();
      features::change_feature_flags(&framework_sig, vector::singleton(gov_mode_id), vector::empty());

      // TO EXIT GOVERNANCE MODE REVERSE THE VECTORS:
      // features::change_feature_flags(&framework_sig, vector::empty(), vector::singleton(gov_mode_id));
  }
}
```

## Compile

To compile we simply use the same command we originally generated the template with, and point to the `Script Dir` where your modified template is found.

```
libra move framework governance --script-dir <Script Dir>  --framework-local-dir ~/libra-framework/framework/
```


## Submit Proposal
Sending, getting consensus, and resolving a Governance Tx proposal follows the same steps as a framework Hot Upgrade.
Follow instructions [here](hot-upgrades.md)
