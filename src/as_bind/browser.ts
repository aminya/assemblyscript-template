/// <reference types="./as-bind.d.ts" />
import * as AsBind from "as-bind"

type WasmLib = typeof import("../wasm/lib.as") // prettier-ignore

/** Instantiates wasm for the browser */
export async function instantiate(imports?: AsBind.Imports) {
  // The path of the file is relative to ./dist/
  const data = await fetch("./index.wasm")

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
