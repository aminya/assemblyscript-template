import { getExports } from "../as_bind/node.js"

/** Documentation about the exported function */
export async function doSomething(input: string) {
  const wasmExports = await getExports()
  const output = wasmExports.doSomething(input)
  return output
}
