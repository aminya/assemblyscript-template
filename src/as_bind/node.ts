import "./as-bind.d" // eslint-disable-line import/no-unassigned-import
import * as AsBind from "as-bind/dist/as-bind.cjs" // if using esm, change the extension to `esm.js`

import { join, dirname } from "path"
import { promises } from "fs"
const { readFile } = promises

/** Instantiates wasm for node */
export async function instantiate(imports?: AsBind.Imports) {
  const data = await readFile(join(dirname(dirname(__dirname)), "dist/index.wasm"))
  const wasmModule = await AsBind.instantiate<typeof import("../wasm/lib.as")>(data, imports)
  return wasmModule.exports
}

let _exports: typeof import("../wasm/lib.as") | undefined

/** Get the wasm exports (instantiates wasm on the first call) */
export async function getExports(imports?: AsBind.Imports) {
  if (_exports === undefined) {
    // eslint-disable-next-line require-atomic-updates
    _exports = await instantiate(imports)
  }
  return _exports!
}
