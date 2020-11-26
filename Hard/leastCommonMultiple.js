/* https://edabit.com/challenge/ERmrS3QrK7sEt4PAt

Write a function that returns the least common multiple (LCM) of two integers. */

const gcd = (n1, n2) => n1 ? gcd(n2%n1, n1) : n2;

const lcm = (n1, n2) => (n1 * n2) / gcd(n1, n2);

console.log(lcm(9, 18))
console.log(lcm(8, 5))
console.log(lcm(17, 11))