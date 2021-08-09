declare module "as-bind" {
  import * as CoreLoader from "@assemblyscript/loader/index" // eslint-disable-line import/no-duplicates
  export type Imports = CoreLoader.Imports

  // General asbind versionn
  export const version: number

  // Our APIs
  export const instantiate: typeof CoreLoader.instantiate

  export const instantiateSync: typeof CoreLoader.instantiateSync
}

declare module "as-bind/dist/as-bind.cjs" {
  import * as CoreLoader from "@assemblyscript/loader/index" // eslint-disable-line import/no-duplicates
  export type Imports = CoreLoader.Imports

  // General asbind versionn
  export const version: number

  // Our APIs
  export const instantiate: typeof CoreLoader.instantiate

  export const instantiateSync: typeof CoreLoader.instantiateSync
}
