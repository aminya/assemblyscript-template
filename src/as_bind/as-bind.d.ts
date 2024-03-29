declare module "as-bind" {
  import * as CoreLoader from "@assemblyscript/loader/index" // eslint-disable-line import/no-duplicates
  export type Imports = CoreLoader.Imports

  // General asbind version
  export const version: number

  // Our APIs
  export const instantiate: typeof CoreLoader.instantiate

  export const instantiateSync: typeof CoreLoader.instantiateSync
}

declare module "as-bind/dist/as-bind.cjs.js" {
  import * as CoreLoader from "@assemblyscript/loader/index" // eslint-disable-line import/no-duplicates
  export type Imports = CoreLoader.Imports

  // General asbind version
  export const version: number

  // Our APIs
  export const instantiate: typeof CoreLoader.instantiate

  export const instantiateSync: typeof CoreLoader.instantiateSync
}

declare module "as-bind/dist/as-bind.esm.js" {
  import * as CoreLoader from "@assemblyscript/loader/index" // eslint-disable-line import/no-duplicates
  export type Imports = CoreLoader.Imports

  // General asbind version
  export const version: number

  // Our APIs
  export const instantiate: typeof CoreLoader.instantiate

  export const instantiateSync: typeof CoreLoader.instantiateSync
}
