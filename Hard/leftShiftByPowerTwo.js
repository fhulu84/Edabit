/* https://edabit.com/challenge/CNimjGSPT7xmPJuvY

The left shift operation is similar to multiplication by powers of two, thus, the process is repetitive and can be done recursively.
10 << 3 = 10 * 2^3 = 10 * 8 = 80 */

function shiftToLeft(x, y) {
  return (y === 0) ? x : 2 * shiftToLeft(x, y-1);
}

console.log(shiftToLeft(5, 2));
console.log(shiftToLeft(-32, 2));
console.log(shiftToLeft(46, 6));
console.log(shiftToLeft(-6, 5));
console.log(shiftToLeft(57, 0));