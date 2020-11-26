/* https://edabit.com/challenge/heamNm6MXBn4w6exw

Given is a dict with the Morse alphabet, added a code for space between words. 
Write a function, which takes a string, either out of letters or out of Morse code from the hash. 
The function outputs an encrypted letter string of a decrypted Mmorse code. */

function morse(str) {
	const d = {"A":".-","B":"-...","C":"-.-.","D":"-..","E":".",
	"F":"..-.","G":"--.","H":"....","I":"..","J":".---",
	"K":"-.-","L":".-..","M":"--","N":"-.","O":"---",
	"P":".--.","Q":"--.-","R":".-.","S":"...","T":"-",
	"U":"..-","V":"...-","W":".--","X":"-..-","Y":"-.--","Z":"--..",
   " ":"....."}
   
  return  /.-/.test(str) 
          ? str.split(' ').map(m => Object.keys(d).find(key => d[key] === m)).join('')
          : [...str.toUpperCase()].map(c => d[c]).join(' ');
}

console.log(morse("F Mueller"))
console.log(morse(".--- --- .... -. ..... ..-. ..... -.- . -. -. . -.. -.--"))
console.log(morse("Barack Obama"))