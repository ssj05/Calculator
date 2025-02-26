let num1 = 0;
let num2 = 0;
let op = "";

function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(operator, aNum, bNum) {
  if (operator === "+") {
    return add(aNum, bNum);
  }
  if (operator === "-") {
    return substract(aNum, bNum);
  }
  if (operator === "*") {
    return multiply(aNum, bNum);
  }
  if (operator === "/") {
    return divide(aNum, bNum);
  }
}
console.log(operate("/", 100, 200));
// console.log(add(10, 100));
// console.log(substract(20, 10));
// console.log(multiply(2, 10));
// console.log(divide(50, 5));
