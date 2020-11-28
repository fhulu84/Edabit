/* https://edabit.com/challenge/oX9kdz2h6pQH7NJ2m

The goal is to test if a consecutive sequence is formed. A consecutive sequence is defined 
as sequence of incrementing numbers (e.g. 1, 2, 3 or 5, 6, 7, 8). 
The twist is that you have to consider the combination of vectors as shown. */

function hasConsecutiveSeries(v1, v2) {
	const combinedV = v1.length >= v2.length ? v1.map((n, i) => v2[i] ? n + v2[i] : n)
                                           : v2.map((n, i) => v1[i] ? n + v1[i] : n);
  return combinedV.every((n, i, arr) => i === arr.length-1 || n+1 === arr[i+1]);
}

console.log(hasConsecutiveSeries([1, 2, 3], [1, 1, 1]))
console.log(hasConsecutiveSeries([8, 6, 10], [25, 28, 25, 26, 28, 29]))
console.log(hasConsecutiveSeries([12, 3], [0, 10, 14, 15, 16]))