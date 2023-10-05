export const primeTime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num > Math.pow(num, 16)) return false;

  let isPrime = true;
  for (let i = 2; i < Math.ceil(num / 2); i++) {
    if (num % i === 0) isPrime = false;
  }
  return isPrime;
};

/*
For this challange you will be determining if an argument  is a prime number. Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.
*/
