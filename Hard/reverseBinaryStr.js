/* https://edabit.com/challenge/4s93F8ZiEdHjmMnMv

Write a function that takes an integer n, reverses the binary representation of that integer, 
and returns the new integer from the reversed binary. */

const reversedBinaryInteger = num => parseInt([...num.toString(2)].reverse().join(''),2);

console.log(reversedBinaryInteger(10));
console.log(reversedBinaryInteger(12));