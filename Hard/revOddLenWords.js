/* https://edabit.com/challenge/yYfQoo6rkMezauG77

Given a string, reverse all the words which have odd length. The even length words are not changed. */

const reverseOdd = str => str.split(' ').map(w => (w.length) % 2 === 1 ? [...w].reverse().join('') : w).join(' ');

console.log(reverseOdd("Bananas"));
console.log(reverseOdd("One two three four"))
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"))