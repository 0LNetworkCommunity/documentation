---
sidebar_label: 'Migrate'
sidebar_position: 2
description: 'Migrate Community Wallet from v5 to v7 on 0L Network'
---


# Migrate a Community Wallet

Due to some structural changes to community wallets and the features that were added to them when 0L Network migrated from v5 to v7, all community wallets must be migrated and will stay in a dormant state until the original steward performs the following steps.

## Process
1. Initialize with at least a 2 of 3 m-of-n multisig. Meaning a multi signature wallet that has 3 admins and every action must signed by 2 of those admins
2. Finalize the initialization process. This will remove the ability of the original auth key for the address associated with the community wallet.
3. Create a test transfer to become familar with how community wallet payments are now made.

## Initialize
```
libra txs community gov-init -a ADMIN_1  -a ADMIN_2 -a  ADMIN_3 -n 2
```
## Finalize
```
libra txs community gov-init -a ADMIN_1  -a ADMIN_2 -a  ADMIN_3 -n 2 --finalize
```

## Create a test transfer
The test transfer will need to be executed by two admins. The first admins transaction will propose the payment, the second admins transaction will scquedule the payment. The payment will be processed in 
```
libra txs community propose --community-wallet COM_WALLET_ADDRESS  --recipient RECIPIENT_ADDRESS --amount 1000000 --description "Community Wallet test - to be returned to this community wallet"
```
## View Community Wallet information

- View if a wallet has been migrated.
```
libra query view --function-id 0x1::community_wallet_init::qualifies --args ADDRESS
```
- View the admins of a community wallet
```
libra query view --function-id 0x1::community_wallet_init::get_community_wallet_authorities --args ADDRESS
```
- View the payment history of a community wallet
```
libra query resource --account  COM_WALLET_ADDRESS --resource-path-string 0x1::donor_voice_txs::TxSchedule
```