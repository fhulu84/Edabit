/* https://edabit.com/challenge/9CNJtMXaw2K5NwMLJ

Create a function that converts Celcius to Fahrenheit and vice versa. */

function convert(deg) {
	return !/°[CF]/.test(deg) ? "Error"
         : deg.includes('C') ? `${Math.round(deg.match(/-*\d+/)[0]*1.8 + 32)}\xb0F`
                             : `${Math.round((deg.match(/-*\d+/)[0]-32)/1.8)}\xb0C`;
}

console.log(convert("-40°C"))
console.log(convert("-40°F"))
console.log(convert("35°C"))
console.log(convert("33"))