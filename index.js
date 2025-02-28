const result = document.querySelector(".result");
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");
const inputBtns = document.querySelectorAll(".input li");
let num1 = "";
let num2 = "";
let op = "";

const numbers = "0123456789.".split("");
const operators = "+-*/".split("");

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
  let result = 0;
  switch (operator) {
    case "+":
      result = add(aNum, bNum);
      break;

    case "-":
      result = substract(aNum, bNum);
      break;

    case "*":
      result = multiply(aNum, bNum);
      break;

    case "/":
      result = divide(aNum, bNum);
      break;

    default:
      break;
  }
  return result;
}

function displayOutput(str) {
  display.textContent = String(str);
}
displayOutput("Hello, World!");

function clear() {
  displayOutput("");
  reset();
}
clearBtn.addEventListener("click", (e) => {
  clear();
});

function reset() {
  num1 = "";
  num2 = "";
  op = "";
}

function evaluate() {
  let result = operate(op, parseFloat(num1), parseFloat(num2)).toFixed(2);
  if ((result * 100) % 10 == 0 && (result * 100) % 100 == 0) {
    return Math.round(result);
  }
  return result;
}

inputBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (op === "" && numbers.includes(btn.textContent)) {
      if (!num1.includes(".") || btn.textContent !== ".") {
        num1 += String(btn.textContent);
        displayOutput(num1);
      }
    }
    if (op === "" && operators.includes(btn.textContent)) {
      op = btn.textContent;
      displayOutput(op);
    }
    if (op != "" && numbers.includes(btn.textContent)) {
      if (!num2.includes(".") || btn.textContent !== ".") {
        num2 += String(btn.textContent);
        displayOutput(num2);
      }
    }
  });
});

result.addEventListener("click", () => {
  displayOutput(evaluate());
  reset();
});
