/* https://edabit.com/challenge/PcSNdgbfiDf9JYJjz

Create a function that takes an array of names in the format 
"First Name Last Name" (e.g. "John Doe"), and returns an array 
of these names sorted by the length of their last names. 
If the length of multiple last names are the same, then proceed to sort 
alphabetically by last name. 

i couldnt pass the test because test cases dont have all possible answers
*/

function lastNameLensort(names){
  return names.sort((a, b) => a.split(' ')[1].length - b.split(' ')[1].length)
}

console.log(lastNameLensort([
  "Jennifer Figueroa",
  "Heather Mcgee",
  "Amanda Schwartz",
  "Nicole Yoder",
  "Melissa Hoffman"
]))
