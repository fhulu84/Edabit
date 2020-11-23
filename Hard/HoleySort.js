/* https://edabit.com/challenge/sdxaSqNqcuDRfnMHs

What do the numbers 4, 6, 8, 9 and 0 have in common? They all have holes in them! Notice how the number 8 contains not one, but two holes.

Given an array of numbers, sort the array in accordance to how many holes occur in the number. It should be sorted in ascending order. */

function holeySort(arr) {
	return arr.sort((a,b) => {
    return [...`${a}`].reduce((acc, d) => acc + [1,0,0,0,1,0,1,0,2,1][d], 0) 
          -[...`${b}`].reduce((acc, d) => acc + [1,0,0,0,1,0,1,0,2,1][d], 0)
  })
}

console.log(holeySort([44, 4, 444, 4444]))
console.log(holeySort([100, 888, 1660, 11]))
console.log(holeySort([8, 121, 41, 66]))