var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return `Please provide two numbers.`;
  } else if (typeof num2 !== "number") {
    return `Please provide two numbers.`;
  }
  return num1 * num2;
};

console.log(multiply(2, 2));
// 4
console.log(multiply("abc", 4));
// Please provide two numbers.
console.log(multiply(2, "abc"));
// Please provide two numbers.
console.log(multiply("abc", "abc"));
// Please provide two numbers.
console.log(multiply(2.5, 2));
// 5
console.log(multiply(2, 3.5));
// 7
