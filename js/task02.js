'use strict'

{
  const isPrime = (a) => {
    for (let i = 2; i < Math.round(Math.sqrt(a) + 1); i++) {
      if (a % i === 0) return false;
    }

    return a > 1;
  }

  console.log(isPrime(5));
  console.log(isPrime(2));
  console.log(isPrime(3));
  console.log(isPrime(4));
  console.log(isPrime(17));
  console.log(isPrime(18));
  console.log(isPrime(14));
  console.log(isPrime(25));
}
