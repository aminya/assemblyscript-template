import { doSomething } from "./lib"

async function main(argv: string[]) {
  if (argv.length <= 1) {
    throw new Error("The number of inputs to the CLI is incorrect")
  }
  const input = argv[2]
  const output = await doSomething(input)
  console.log(output)
}

main(process.argv).catch((err) => {
  throw err
})
