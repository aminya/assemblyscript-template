/* eslint-disable */
import { wasi_console } from "@assemblyscript/wasi-shim/assembly/wasi_console"
import { wasi_process } from "@assemblyscript/wasi-shim/assembly/wasi_process"
/* eslint-enable */

import { doSomething } from "../wasm/lib.as"

function main(): void {
  if (wasi_process.argv.length <= 1) {
    throw new Error("The number of inputs to the CLI is incorrect. Pass an input!")
  }

  const input = wasi_process.argv[1]
  const output = doSomething(input)

  wasi_console.log(output)
}

main()
