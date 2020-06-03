import curryN from "./utils/curry_n.ts"
import { Curry2 } from "./utils/types.ts"

function _max(a: number | string | Date, b: number | string | Date) {
    return a > b ? a : b
}

/**
 * Returns the larger of its two arguments.
 * 
 * NaN > 1000  // false
 * 
 *      Fae.max(1, 2)  // => 2
 *      Fae.max('abd', 'abc')  // => 'abd'
 *      Fae.max(1000, NaN)  // => 1000
*/
export const max: Curry2<number | string | Date, number | string | Date, number | string | Date> = curryN(2, _max)
