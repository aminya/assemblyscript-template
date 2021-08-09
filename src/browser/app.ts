import { doSomething } from "./lib"

function main() {
  // get the input from the text field, and once button is hit, passes it wasm and gets the output back, and finally displays it.
  const inputElement = document.getElementById("InputField") as HTMLInputElement | null
  const runButtonElement = document.getElementById("RunButton")
  const outputElement = document.getElementById("OutputField") as HTMLOutputElement | null
  if (inputElement === null || runButtonElement === null || outputElement === null) {
    throw new Error("Page did not render correctly")
  }
  runButtonElement.onclick = async () => {
    // wasm gets the input and does something with it:
    const input = inputElement.value
    const output = await doSomething(input)
    outputElement.value = output
  }
}

main()
