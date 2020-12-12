/* https://edabit.com/challenge/BbXHMKZLPmRdmzucf

The number 10213223 is self-descriptive. Count the number of zeros, ones, twos, and threes 
that are contained in this number and you have 1 zero, 2 ones, 3 twos, 2 threes, 
but that is a replica of the number itself 10|21|32|23.

I couldnt pass the test, because last test parameter wasnt given properly  */

function selfDescriptive(n){
  const cnts = new Array(10).fill(0); //counts of digits
  const nStr = ''+n;
  for(let i = 0; i < nStr.length; i++){
    cnts[nStr[i]]++;
  } 
  for(let i=0; i < nStr.length; i+=2){
    if(cnts[nStr[i+1]] != nStr[i]) return false;
  }
  return true;
}

console.log(selfDescriptive(22))
console.log(selfDescriptive(3999))
console.log(selfDescriptive(31331419))
console.log(selfDescriptive(21321316))
console.log(selfDescriptive(4132232416171))
console.log(selfDescriptive(31331819))
console.log(selfDescriptive(613223141526171819n))