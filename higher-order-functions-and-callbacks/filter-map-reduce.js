// Step 1: keep only even numbers
// Step 2: double them
// Step 3: add them into one total

const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter(function (num) {
    return num % 2 === 0;
  })
  .map(function (num) {
    return num * 2;
  })
  .reduce(function (acc, num) {
    return acc + num;
  }, 0);

console.log(result); // 24

