# AssemblyScript-template

[![CI](https://github.com/aminya/assemblyscript-template/actions/workflows/CI.yml/badge.svg)](https://github.com/aminya/assemblyscript-template/actions/workflows/CI.yml)

An AssemblyScript template with support for many environments

This template is all you need to get started in AssemblyScript.
It allows you to write a library in AssemblyScript, and use it in various environments.

- The **wasm** library is in `./src/wasm/`.
  This is the AssemblyScript file that exports the functions for your library.
- The **browser** app is in `./src/browser/`. It sets up a simple form to get input from the user and passes it to the wasm.
- The **node** wrappers are in `./src/node`.
  The `lib.ts` file is a library file, and the `cli.ts` file is meant to be used as a Node bin.
- The **wasi** wrappers are in `./src/wasi` folder.

Note: The AssemblyScript files have a `.as.ts` or `.as` extension, and the TypeScript files have a `.ts` extension.

### Wasm Lib

```ps1
npm install
npm run build.wasm
```

`./dist/index.wasm`

```ts
export function doSomething(input: string): string
```

### Browser App

Build:

```
npm install
npm run build.browser
```

Run:

```
npm run start.browser
```

### Browser Lib

Build:

```
npm install
npm run build.browser
```

```ts
import { doSomething } from "./dist/browser/lib.js"

await doSomething("input")
```

### Node CLI

Build:

```ps1
npm install
npm run build.node
```

Run:

```ps1
node ./dist/node/cli.js 'input'
```

### Node Lib

```ts
import { doSomething } from "./dist/node/lib.js"

const output = await doSomething("input")
```

### Wasi CLI

Build:

```ps1
npm install
npm run build.wasi
```

Run:

```ps1
wasmtime ./dist/wasi.wasm 'input'
```
