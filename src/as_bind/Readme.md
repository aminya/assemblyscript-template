# As-bind wrapper

A wrapper around `as-bind` to get a unified interface for instantiating WASM.

It exports a `getExports(imports?: Imports)` function, which instantiates the Wasm module for browser or Node and returns the exports.
