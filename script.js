var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return `Please provide two numbers.`;
  } else if (typeof num2 !== "number") {
    return `Please provide two numbers.`;
  }
  return num1 * num2;
};

console.log(multiply(2, 2));
console.log(multiply("abc", 4));
console.log(multiply(2, "abc"));
console.log(multiply("abc", "abc"));
console.log(multiply(2.5, 2));
console.log(multiply(2, 3.5));
