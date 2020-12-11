/* https://edabit.com/challenge/ew9dry9RzoaeiTzwX

Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character. */

const insertWhitespace = str => str.replace(/([a-z])([A-Z])/g, "$1 $2");

console.log(insertWhitespace("SheWalksToTheBeach"))
console.log(insertWhitespace("MarvinTalksTooMuch"))
console.log(insertWhitespace("TheGreatestUpsetInHistory"))
