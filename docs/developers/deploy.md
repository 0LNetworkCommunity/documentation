---
sidebar_label: 'Deploy'
sidebar_position: 2
description: 'Deploy Move smart contracts on 0L Network'
---


# Deploy a Hello 0L Contract


#### High Level Steps

1. Write the Contract and Tests
2. Create a TOML file
3. Compile
4. Test
5. Publish
6. Interact


### 1. Write the Contract and Tests

Create the Hello 0L smart contract

##### Directory Structure

```
hello_0L
    |
    ├── Move.toml
    └── sources
        └── hello_0L.move
        └── hello_0L_test.move
```



##### hello_0L.move

```
module hello_0L::message {
    use std::error;
    use std::signer;
    use std::string;
    use diem_framework::account;
    use diem_framework::event;

//:!:>resource
    struct MessageHolder has key {
        message: string::String,
        message_change_events: event::EventHandle<MessageChangeEvent>,
    }
//<:!:resource

    struct MessageChangeEvent has drop, store {
        from_message: string::String,
        to_message: string::String,
    }

    /// There is no message present
    const ENO_MESSAGE: u64 = 0;

    #[view]
    public fun get_message(addr: address): string::String acquires MessageHolder {
        assert!(exists<MessageHolder>(addr), error::not_found(ENO_MESSAGE));
        borrow_global<MessageHolder>(addr).message
    }

    public entry fun set_message(account: signer, message: string::String)
    acquires MessageHolder {
        let account_addr = signer::address_of(&account);
        if (!exists<MessageHolder>(account_addr)) {
            move_to(&account, MessageHolder {
                message,
                message_change_events: account::new_event_handle<MessageChangeEvent>(&account),
            })
        } else {
            let old_message_holder = borrow_global_mut<MessageHolder>(account_addr);
            let from_message = old_message_holder.message;
            event::emit_event(&mut old_message_holder.message_change_events, MessageChangeEvent {
                from_message,
                to_message: copy message,
            });
            old_message_holder.message = message;
        }
    }

    #[test(account = @0x1)]
    public entry fun sender_can_set_message(account: signer) acquires MessageHolder {
        let addr = signer::address_of(&account);
        diem_framework::account::create_account_for_test(addr);
        set_message(account,  string::utf8(b"Hello, Blockchain"));

        assert!(
          get_message(addr) == string::utf8(b"Hello, Blockchain"),
          ENO_MESSAGE
        );
    }
```

##### hello_0L_test.move

```
#[test_only]
module hello_0L::message_tests {
    use std::signer;
    use std::unit_test;
    use std::vector;
    use std::string;

    use hello_0L::message;

    fun get_account(): signer {
        vector::pop_back(&mut unit_test::create_signers_for_testing(1))
    }

    #[test]
    public entry fun sender_can_set_message() {
        let account = get_account();
        let addr = signer::address_of(&account);
        diem_framework::account::create_account_for_test(addr);
        message::set_message(account,  string::utf8(b"Hello, Blockchain"));

        assert!(
          message::get_message(addr) == string::utf8(b"Hello, Blockchain"),
          0
        );
    }
}
```

### 2. Create a TOML file

##### Move.toml
:::note
**Named addresses:**
Your module needs to be deployed at an address. You can hard-code the address in the Move.toml file. Or you can have the address variable (e.g. `hello_0L`), defined at publishing time. In either case the address MUST MATCH THE ADDRESS OF THE SIGNER that is publishing.
:::
```
[package]
name = 'message'
version = '1.0.0'

# [addresses]
# hello_0L = "_"

[dependencies.DiemFramework]
git = 'https://github.com/0LNetworkCommunity/diem.git'
rev = 'release'
subdir = 'diem-move/framework/diem-framework'
```

### 3. Compile

```
libra move compile --package-dir path/to/your/hello_0L_contract

#Example
libra move compile --package-dir ~/hello_0L --named-addresses "hello_0L=0xd1281de242839fc939745996882c5fc2" 
```

##### Output
```
Compiling, may take a little while to download git dependencies...
UPDATING GIT DEPENDENCY https://github.com/0LNetworkCommunity/diem.git
INCLUDING DEPENDENCY DiemFramework
INCLUDING DEPENDENCY DiemStdlib
INCLUDING DEPENDENCY MoveStdlib
BUILDING test_publish
package size 819 bytes
transaction success  ··········································· ✓
```

### 4. Test


```
libra move test --package-dir path/to/your/hello_0L_contract

# Example
libra move test --package-dir ~/hello_0L --named-addresses "hello_0L=0xd1281de242839fc939745996882c5fc2"
```

##### Output
```
INCLUDING DEPENDENCY DiemFramework
INCLUDING DEPENDENCY DiemStdlib
INCLUDING DEPENDENCY MoveStdlib
BUILDING message
Running Move unit tests
[ PASS    ] 0xd1281de242839fc939745996882c5fc2::message_tests::sender_can_set_message
[ PASS    ] 0xd1281de242839fc939745996882c5fc2::message::sender_can_set_message
Test result: OK. Total tests: 2; passed: 2; failed: 0
```

### 5. Publish
> Note that `txs publish` will compile the package before submitting.
You should test and compile the code before running, but it is not necessary for publishing.

```
libra txs publish --package-dir path/to/your/hello_0L_contract  

#Example
libra txs publish --package-dir ~/hello_0L --named-addresses "hello_0L=0xc208c09ecb52d626ef037c2011ba2d7b18f999eee5be54ac8161627613500c93" 
``` 

##### Output
```
Compiling, may take a little while to download git dependencies...
UPDATING GIT DEPENDENCY https://github.com/0LNetworkCommunity/diem.git
INCLUDING DEPENDENCY DiemFramework
INCLUDING DEPENDENCY DiemStdlib
INCLUDING DEPENDENCY MoveStdlib
BUILDING message
package size 1136 bytes
transaction success  ··········································· ✓
```

### 6. Interact

#### Interacting with functions
You can interact with your new smart contract with the `generate_transaction` subcommand of the `txs` tool
```
libra txs generate-transaction --function-id address::module::function

# Example
libra txs generate-transaction --function-id 0xc208c09ecb52d626ef037c2011ba2d7b18f999eee5be54ac8161627613500c93::message::set_message --args 'b"hello"'
```

#### Interacting with view functions
To view the changes you have made use the `resource` subcommand of the `query` tool
```
libra query resource --account <ACC> --resource-path-string address::module::struct

# Example
libra query resource --account 0xc208c09ecb52d626ef037c2011ba2d7b18f999eee5be54ac8161627613500c93 --resource-path-string 0xc208c09ecb52d626ef037c2011ba2d7b18f999eee5be54ac8161627613500c93::message::MessageHolder
```

> Be sure to check out Move code examples for various types of Smart Contracts [here](https://github.com/0LNetworkCommunity/diem/tree/release/diem-move/move-examples)