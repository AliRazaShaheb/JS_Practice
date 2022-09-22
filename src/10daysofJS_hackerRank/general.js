/**
 * Create the function factorial here
 */

// factorial method with recursive method

function factorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(factorial(5));

// 5 x 4 x 3 x 2 x 1

function factorial2(n) {
  let num = 0;
  for (let i = 0; i < n; n--) {
    console.log(n);
  }
  return "";
}

// console.log(factorial2(5));

function factorial3(n) {
  let num = 1;
  for (let i = n; i > 0; i--) {
    num *= i;
  }
  return num;
}

console.log(factorial3(5));
