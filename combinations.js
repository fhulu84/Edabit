/* https://edabit.com/challenge/tRx22rECqK4dTJTg8

Create a function that takes a variable number of arguments, each argument representing the number of items in a group, 
and returns the number of permutations (combinations) of items that you could get by taking one item from each group. */

function combinations(items) {
  return Array.from(arguments).reduce((perm, n) => n ? perm * n : perm, 1);
}

console.log(combinations(2, 3))
console.log(combinations(3, 7, 4))
console.log(combinations(2, 3, 4, 0))