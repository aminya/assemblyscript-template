/// <reference types="@as-pect/assembly/types/as-pect" />

import { doSomething } from "../lib.as"

describe("doSomething", () => {
  it("should echo the given string", () => {
    expect<string>(doSomething("input")).toBe("input")
  })
})
