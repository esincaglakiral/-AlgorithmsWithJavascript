export const firstFactorial = (num) => {
  let factorial = 1;

  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
};

/* 
First Factorial

Using the JavaScript language, have the function FirstFactorial(num)
take the num parameter being passed and return the factorial of it (ie.
    if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range 
will be between 1 and 18.
*/
