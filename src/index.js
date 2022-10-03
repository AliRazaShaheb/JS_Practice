import "./styles.css";

console.clear();
//Question: How would you verify a prime number?

function isPrime(num) {
  let divisor = 2;
  if (!num) {
    return console.error("please input number");
  }
  if (num <= 1) {
    console.error("not a prime number");
  }
  while (num > divisor) {
    if (num % divisor === 0) {
      console.log(false);
      return false;
    }
    divisor++;
  }
  console.log(true);
  return true;
}

// isPrime(7);

function allPrimeNumbers(num) {
  let divisor = 2,
    primeArr = [];

  if (!num) {
    return console.error("please input number");
  }

  if (num <= 1) {
    console.error("not a prime number");
  }
  while (num > divisor) {
    if (num % divisor === 0) {
    }
  }
}
