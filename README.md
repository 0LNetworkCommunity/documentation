# Open Libra Documentation
This is the source for the documentation hosted here:

👇👇👇👇👇👇👇👇👇👇

https://0lnetwork.dev/

👆👆👆👆👆👆👆👆👆👆

alternatively here:
https://0lnetworkcommunity.github.io/documentation/



# Maintainers
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation
Open Libra core prefers Bun over NPM and Yarn (https://bun.sh/), but you can use any.
```
$ bun install
```

### Local Development

```
$ bun run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ bun run build
```
This command generates static content into the `build` directory and can be
served using any static contents hosting service.

#### Errors
`build` will intentionally throw errors if links cannot be resolved. Note that
on mac/windows/linux, paths may resolve differently, so you may get no errors on
a MacOs but it will on CI (linux).
