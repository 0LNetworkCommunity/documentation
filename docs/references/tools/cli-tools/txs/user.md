# User Transactions

Generate transactions for V8 user vouches.

## Assert that an address has re-joined the chain

```bash
libra txs user re-join
```

## Vouch for another address

```bash
libra txs user vouch --vouch-for=<SOME ADDRESS>
```

## View vouch status

View how many vouches an address has to give:
```bash
libra query view --function-id 0x1::vouch_limits::get_vouch_limit --args <SOME_ADDRESS>
{
  "body": [
    "1"        # <--- This is the number of vouches available
  ]
}
```

View vouch score for an address:
```bash
libra query view --function-id 0x1::page_rank_lazy::get_cached_score --args <SOME_ADDRESS>
{
  "body": [
    "0"         # <--- This is the number of vouches received
  ]
}
```

View founder status for an address:
```bash
libra query view --function-id 0x1::founder::is_founder --args <SOME_ADDRESS>
{
  "body": [
    true         # <--- This means this address is a founder
  ]
}
```

View V8 account authorization status:
```bash
libra query view --function-id 0x1::reauthorization::is_v8_authorized --args <SOME_ADDRESS>
{
  "body": [
    true         # <--- This means this address is a authorized
  ]
}
```
