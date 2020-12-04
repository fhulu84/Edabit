/* https://edabit.com/challenge/7pkKPYtTJzpxRMckZ

An array is positive dominant if it contains strictly more unique positive values than unique negative values.
Write a function that returns true if an array is positive dominant. */

function isPositiveDominant(a) {
	return [...new Set(a)].filter(n => n > 0).length > [...new Set(a)].filter(n => n < 0).length;
}

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]))
console.log(isPositiveDominant([5, 99, 832, -3, -4]))
console.log(isPositiveDominant([5, 0]))
console.log(isPositiveDominant([0, -4, -1]))