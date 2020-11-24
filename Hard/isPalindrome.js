/* https://edabit.com/challenge/aeHGWC6M44KhLCRBt

Create a recursive function that determines whether a word is a palindrome or not. */

function isPalindrome(wrd) {
  return wrd.length < 2 ? true 
       : wrd[0] === wrd.slice(-1) ? isPalindrome(wrd.slice(1,-1))
       : false;
}


console.log(isPalindrome("madam"))
console.log(isPalindrome("adieu"))
console.log(isPalindrome("rotor"))