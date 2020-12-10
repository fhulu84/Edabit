/* https://edabit.com/challenge/5S5HBQW6zZp8eH3eL

Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed.

Given a censored string and a string of the censored vowels, return the original uncensored string. */

function uncensor(str, vowels) {
  vowels = [...vowels].reverse();
	return [...str].map(c => c !== "*" ? c : vowels.pop()).join('');
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"))
console.log(uncensor("abcd", ""))
console.log(uncensor("*PP*RC*S*", "UEAE"))