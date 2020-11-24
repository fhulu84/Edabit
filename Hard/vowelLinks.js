/* https://edabit.com/challenge/byCrFXYokKujSebsD

Given a sentence as str, return true if any two adjacent words 
have this property: One word ends with a vowel, while the word 
immediately after begins with a vowel (a e i o u). */

const vowelLinks = str => /[aeiou]\s[aeiou]/i.test(str);

console.log(vowelLinks("a very large appliance"));
console.log(vowelLinks("go to edabit"))
console.log(vowelLinks("an open fire"))
console.log(vowelLinks("a sudden applause"))