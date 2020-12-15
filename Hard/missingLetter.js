/* https://edabit.com/challenge/t6HFLEYD2e7ePxAu5

Given a string of letters in the English alphabet, return the letter that's missing from the string. 
The missing letter will make the string be in alphabetical order (from A to Z).

If there are no missing letters in the string, return "No Missing Letter". */

function missingLetter(str) {
	for(let i=0; i < str.length - 1; i++){
    if(str.charCodeAt(i) + 1 !== str.charCodeAt(i+1)) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  return "No Missing Letter";
}

console.log(missingLetter("abdefg"));
console.log(missingLetter("ghijklmno"));