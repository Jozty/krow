import { Curry } from "./utils/types.ts"
import curryN from "./utils/curry_n.ts"

function _defaultTo<T1, T2>(defaultV: T1, value: T2) {
  return value == null || value !== value ? defaultV : value;
}

/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 * 
 * 
 *      const defaultTo125 = Fae.defaultTo(125)
 *
 *      defaultTo125(null)  //=> 125
 *      defaultTo125(undefined)  //=> 125
 *      defaultTo125(false)  //=> false
 *      defaultTo125('Fae')  //=> 'Fae'
 */
export const defaultTo: Curry<typeof _defaultTo> = curryN(2, _defaultTo)