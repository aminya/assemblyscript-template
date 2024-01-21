/// <reference types="./as-bind.d.ts" />
import * as AsBind from "as-bind/dist/as-bind.cjs.js"

import { join, dirname } from "path"
import { promises } from "fs"
const { readFile } = promises
import * as desm from "desm"

type WasmLib = typeof import("../wasm/lib.as") // prettier-ignore

const __dirname = desm.dirname(import.meta.url)

/** Instantiates wasm for node */
export async function instantiate(imports?: AsBind.Imports) {
  const data = await readFile(join(dirname(dirname(__dirname)), "dist/index.wasm"))
  const wasmModule = await AsBind.instantiate<WasmLib>(data, imports)
  return wasmModule.exports
}

let _exports: WasmLib | undefined

/** Get the wasm exports (instantiates wasm on the first call) */
export async function getExports(imports?: AsBind.Imports) {
  if (_exports === undefined) {
    // eslint-disable-next-line require-atomic-updates
    _exports = await instantiate(imports)
  }
  return _exports!
}
