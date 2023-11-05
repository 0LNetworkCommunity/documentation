---
title: "Use the Tower CLI"
id: "use-tower-cli"
---
## Tower CLI commands and options
```bash
libra tower --help
```
Output:
```
clap struct entry point for the tower cli

Usage: libra tower [OPTIONS] <COMMAND>

Commands:
  backlog  
  start    
  once     
  zero     
  help     Print this message or the help of the given subcommand(s)

Options:
  -l, --local-mode
          If the node is offline and tower needs to run in local mode without querying chain
  -c, --config-file <CONFIG_FILE>
          The optional path to an alternate path besides $HOME/.0L
  -p, --profile <PROFILE>
          nickname of the profile to use, if there is more than one. Defaults to first
  -t, --test-private-key <TEST_PRIVATE_KEY>
          optional, private key of the account. Otherwise this will prompt for mnemonic. Warning: intended for testing
  -h, --help
          Print help
  -V, --version
          Print version
```

## Configuration
If you don't already a valid `libra.yml` configuration file under path `~/.libra`, you may generate a new one with the following command (mnemonic needed): 
```bash
libra config init
```
Alternatively, the configuration folder can also be overwritten by:
```bash
libra config init --path <YOUR_CONFIG_PATH>
```

## Mining (Production Mode)
If you wish to create the genesis proof AKA proof zero of the configured account, execute the command:
```bash
libra tower zero
```
If everything went find, you should be able to see the file `proof_0.json` under `<YOUR_CONFIG_PATH>/vdf_proofs_<YOUR_PUBLIC_KEY>/`
Now let us generate the proof #n 1:
```bash
libra tower once
```
The above command will generate only one proof, which is good for testing purposes, but in production you may want to keep generating proofs automatically. This can be achieved with the following command:
```bash
libra tower start
```
The previous command will keep generating proofs and submit them automatically, but what if for some reason you wish to submit them manually? We got you:
```bash
libra-tower backlog
```

## Mining (Testing Mode)
For testing purposes is not feasible to wait too long just to have a generated proof, therefore it's possible to generate proofs in 1 sec. Such can be achieved using any of the above mining commands, we just need environment variable instructing to generate a proof a testing mode. Eg:
```bash
MODE_0L=TESTING libra tower zero
```
