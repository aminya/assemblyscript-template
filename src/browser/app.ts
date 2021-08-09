import { doSomething } from "./lib"

function main() {
  // get the inputs from the text field, and once button is hit, get the output from the wasm and display it.
  const inputElement = document.getElementById("InputField") as HTMLInputElement | null
  const runButtonElement = document.getElementById("runButton")
  const outputElement = document.getElementById("Output") as HTMLOutputElement | null
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
