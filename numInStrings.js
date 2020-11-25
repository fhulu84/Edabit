/* https://edabit.com/challenge/eCPim4XcssdZdvs32

Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. 
If there are no strings containing numbers, return an empty array. */

const numInStr = arr => arr.filter(s => /\d/.test(s));

console.log(numInStr(["1a", "a", "2b", "b"]))
console.log(numInStr(["abc", "abc10"]))
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]))
console.log(numInStr(["this is a test", "test1"]))