# Module and Structure Initialization in Move

When you create a new data structure in Move that needs to be initialized by the system and not by the user, you generally need to add the initialization in two places:

1. **`genesis.move`**: Add the initialization in the `initialize` function to ensure that the smoke tests execute successfully.
2. **`epoch_boundary.move`**: Add the initialization in the `migrate_data` function to ensure it will be executed in production.

## Steps for Initialization

### 1. `genesis.move`

Add the initialization in the `initialize` function. This is crucial to ensure that smoke tests run without issues.

Example:

```move
// In genesis.move
public fun initialize(...) {
    // Existing initialization code
    ...
    // Initialize your module
    <YOUR_MODULE>::initialize();
    ...
}
```

### 2. epoch_boundary.move

Add the initialization in the `migrate_data` function. This ensures that the initialization is executed in production.

Example:

```move
// In epoch_boundary.move
public fun migrate_data(...) {
    // Existing migration code
    ...
    // Initialize your module
    <YOUR_MODULE>::initialize();
    ...
}
```

## Common Issue and Error Message

One of the side effects of not initializing these data is that when the test scenario uses `LibraSmoke` with more than one node, it will not be able to complete the genesis. If you check the log of one of the nodes, you will see the following error message:

```
Execution error InternalError { error: "status UNEXPECTED_ERROR_FROM_KNOWN_MOVE_FUNCTION of type Invariant violation with message [diem_vm] Unexpected error from known Move function, 'block_prologue'. Error: EXECUTION_FAILURE { status_code: MISSING_DATA, sub_status: None, location: 0000000000000000000000000000000000000000000000000000000000000001::<YOUR_MODULE>...
```

This error indicates that the required initialization was not performed, leading to missing data during execution.

## Summary

To avoid this issue, always ensure to:

- Add the necessary initialization in the `initialize` function within `genesis.move`.
- Add the necessary initialization in the `migrate_data` function within `epoch_boundary.move`.

Following these steps will help you ensure that your module or structure is properly initialized both in testing and production environments.
