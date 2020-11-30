/* https://edabit.com/challenge/HZcpmfBg6NstB5soN

Write a function that returns the minimum number of swaps to convert the first binary string into the second. */

const minSwaps = (s1, s2) => [...s1].filter((d, i) => d != s2[i]).length / 2;

console.log(minSwaps("1100", "1001"))
console.log(minSwaps("10011001", "01100110"))