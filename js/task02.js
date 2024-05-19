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

// {
//   const isPrime = (a) => {
//     for (let i = 2; i < Math.round(Math.sqrt(a) + 1); i++) {
//       console.log(a);
//       if (a % i === 0) return false;
//     }
//     // console.log(a);

//     return a > 1;
//   }

//   for (let i = 0, count = 0; i <= 23; i++) {
//     // console.log(i);
//     if (isPrime(i)) {
//       console.log(`${++count}) Простое число - ${i}`);
//     }
//   }

  /* console.log(isPrime(2));
  console.log(isPrime(3));
  console.log(isPrime(4));
  console.log(isPrime(17));
  console.log(isPrime(18));
  console.log(isPrime(14));
  console.log(isPrime(25)); */
  /* console.log(Math.round(Math.sqrt(7) + 1));
  console.log(`${Math.sqrt(17) + 1}`);
} */