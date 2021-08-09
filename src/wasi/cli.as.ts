import "wasi" // eslint-disable-line import/no-unassigned-import
import { Console, CommandLine } from "as-wasi"

import { doSomething } from "../wasm/lib.as"

function main(): void {
  const commandLine = new CommandLine()
  const args = commandLine.all()

  if (args.length <= 1) {
    throw new Error("The number of inputs to the CLI is incorrect. Pass an input!")
  }

  const input = args[1]
  const output = doSomething(input)

  Console.log(output)
}

main()
