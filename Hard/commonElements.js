/* https://edabit.com/challenge/jtAvQyyDpFA2EaCcj

Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays. */

const commonElements = (arr1, arr2) => [...new Set(arr1.filter(n => arr2.includes(n)))];


console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]))
console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]))
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]))
console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]))