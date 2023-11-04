---
sidebar_label: 'View'
sidebar_position: 6
description: 'Access pre-defined view methods'
---

# Resources
---

## Description

In the Diem blockchain and the Move programming language, a resource is a general-purpose tool for encapsulating and managing state. A resource can represent any kind of state that needs to be associated with an account and benefits from the Move language's guarantees, such as data integrity, type safety, and controlled access patterns.

For example, a resource could represent:

- User identities, profiles, or permissions.
- Contracts with specific terms and conditions.
- Ownership or participation in a system, like voting rights.
- Token assets
- Non-fungible assets like collectibles, game items, or digital media.
- Domain-specific state, such as staking information, loyalty points, or system configuration.

Resources are powerful abstractions for state management, particularly for creating a system of digital assets that require strict rules around their creation, duplication, transfer, and destruction. The ability to enforce invariants through the type system makes them well-suited for a wide range of applications beyond just tokens.

The query tool provides an easy interface query resources

---

## Usage

```
libra query resource --account ADDRESS --resource-path-string RESOURCE_PATH_STRING
```

Example:
```
libra query resource --account 0x2865f3332b998ac267fabcf3801ef089 --resource-path-string 0x1::ancestry::Ancestry
```


