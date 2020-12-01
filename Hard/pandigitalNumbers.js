/* https://edabit.com/challenge/NXTrfGBXTKg3Z9jkz

A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, 
returning true if the integer is pandigital, and false otherwise. */

const isPandigital = num => [0,1,2,3,4,5,6,7,8,9].every(d => `${num}`.includes(d));


console.log(isPandigital(98140723568910))
console.log(isPandigital(90864523148909))
console.log(isPandigital(112233445566778899))