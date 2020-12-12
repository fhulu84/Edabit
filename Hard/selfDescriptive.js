function selfDescriptive(n){
  const cnts = new Array(10).fill(0); //counts of digits
  const nStr = typeof n == "bigint" ? ''+BigInt(n) : ''+n;
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