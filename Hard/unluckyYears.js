/* https://edabit.com/challenge/JnbkJAxA3woPFHYMm

Create a function which returns how many Friday 13ths there are in a given year. */

function howUnlucky(y) {
	return [...Array(12).keys()].reduce((cnt, month) => {
    return (new Date(y, month, 13)).getDay() === 5 ? ++cnt : cnt;
  }, 0)
}

console.log(howUnlucky(2020))
console.log(howUnlucky(2026))
console.log(howUnlucky(2016))