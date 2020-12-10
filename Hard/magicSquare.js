/* https://edabit.com/challenge/WKTmHynBKz9zBDheR

In recreational mathematics, a square array of numbers, usually positive integers, is called a magic square 
if the sums of the numbers in each row, each column, and both main diagonals are the same.

Create a function that takes a square 2D array as an argument and returns a Boolean (if it is: true, if it isn't: false). */

function isMagicSquare(arr) {
  // const sumR = arr[0].reduce((sum, v) => sum + v, 0);
  // const sumC = arr.reduce((sum, a) => sum + a[0], 0);
  // const sumD = 
  let [sumR, sumC, sumD1, sumD2] = [0,0,0,0];
  for(let i=0; i<arr.length;i++){
    sumD2 += arr[i][arr.length - i - 1];
    for(let j=0; j<arr.length;j++){
      if(i === 0) sumR += arr[0][j];
      if(j === 0) sumC += arr[i][0];
      if(i === j) sumD1 += arr[i][j];
    }
  }
  return sumR === sumC && sumC === sumD1 && sumD1 === sumD2;
}

console.log(isMagicSquare([
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
]))

console.log(isMagicSquare([
  [16, 3, 2, 13],
  [5, 10, 11, 8],
  [9, 6, 7, 12],
  [4, 15, 14, 1]
]))

console.log(isMagicSquare([[2,7,600],[9,5,1],[-94,3,8]]));