module.exports = {
  /** A set of globs passed to the glob package that qualify typescript files for testing. */
  include: ["**/__tests__/**/*.spec.as.ts"],
  /** A set of regexp that will disclude source files from testing. */
  disclude: [/node_modules/],
  /** Add your required AssemblyScript imports here. */
  imports(memory, createImports, instantiateSync, binary) {
    const instance = instantiateSync(
      binary,
      createImports({
        // put your web assembly imports here, and return the module
        // they can reference `instance`
      })
    )
    return instance
  },
  /** Enable code coverage. */
  coverage: ["**/__tests__/**/*.as.ts"],
  /** Specify if the binary wasm file should be written to the file system. */
  outputBinary: false,
}
