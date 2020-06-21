import curryN from "./utils/curry_n.ts"
import { Curry } from "./utils/types.ts"

function _subtract(a: number, b: number) {
  return a - b
}

/** Subtracts its second argument from its first argument. */
export const subtract: Curry<typeof _subtract> = curryN(2, _subtract)
