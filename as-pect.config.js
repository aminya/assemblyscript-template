const aspectConfig = {
  /** A set of globs passed to the glob package that qualify typescript files for testing. */
  entries: ["**/__tests__/**/*.spec.as.ts"],
  /** A set of globs passed to the glob package that quality files to be added to each test. */
  include: ["**/__tests__/**/*.include.as.ts"],
  /** A set of regexp that will disclude source files from testing. */
  disclude: [/node_modules/],
  /** Add your required AssemblyScript imports here. */
  /* eslint-disable */
  async instantiate(memory, createImports, instantiate, binary) {
    let instance // Imports can reference this
    const myImports = {
      env: { memory },
      // put your web assembly imports here, and return the module promise
    }
    instance = instantiate(binary, createImports(myImports))
    return instance
  },
  /** Enable code coverage. */
  // coverage: ["**/*.as.ts", "!**/node_modules/**", "!**/__tests__/**"],
  /** Specify if the binary wasm file should be written to the file system. */
  outputBinary: false,
}
export default aspectConfig
