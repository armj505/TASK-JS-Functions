/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`);
}
greet("Hamza");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // // Your code here
  // if (n % 2 === 1) {
  //   return true;
  // }
  // return false;
  return n % 2;
}

isOdd(7);
isOdd(10);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  //   let oddTotal = 0;
  //   for (let i = 0; i < n; i++) {
  //     if (i % 2 === 1) {
  //       oddTotal += 1;
  //     }
  //   }
  //   console.log(oddTotal);
  //
  console.log(parseInt(n / 2));
}

oddsSmallerThan(7);
oddsSmallerThan(15);
oddsSmallerThan(50);

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  // result = 0;
  // if (n % 2 === 0) {
  //   result = n * 2;
  // } else {
  //   result = n ** 2;
  // }
  // console.log(result);
  if (isOdd(n)) {
    console.log(n ** 2);
  } else {
    console.log(n * 2);
  }
}
squareOrDouble(16);
squareOrDouble(9);
