import "./as-bind.d" // eslint-disable-line import/no-unassigned-import
import * as AsBind from "as-bind"

/** Instantiates wasm for the browser */
export async function instantiate(imports?: AsBind.Imports) {
  // The path of the file is relative to ./dist/
  const data = await fetch("./index.wasm")
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
