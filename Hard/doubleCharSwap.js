// https://edabit.com/challenge/NfBqxaDu4KoxAysWF

// Write a function to replace all instances of character c1 with character c2 and vice versa.

const doubleSwap = (str, c1, c2) => str.replace(new RegExp(`[${c1}${c2}]`,'g'), c => c == c1 ? c2 : c1);

console.log(doubleSwap( "aabbccc", "a", "b"))
console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&"))
console.log(doubleSwap("128 895 556 788 999", "8", "9"))