const historyLog = document.getElementById("history_log");
const operationBox = document.getElementById("operation_box");

// display numbers on screen
const numbers = document.querySelectorAll(".num");

let firstInput = "";
let secondInput = "";
let operation = "";
let isSecondInput = false;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (!isSecondInput) {
      firstInput += e.target.textContent;
      operationBox.textContent = firstInput;
    } else {
      secondInput += e.target.textContent;
      operationBox.textContent = secondInput;
    }
  });
});

// plus
const btnPlus = document.querySelector(".plus");
btnPlus.addEventListener("click", () => {
  operation = "+";
  historyLog.textContent = "+";
  operationBox.textContent = "0";
  isSecondInput = true;
});

// minus
const btnMinus = document.querySelector(".minus");
btnMinus.addEventListener("click", () => {
  operation = "-";
  historyLog.textContent = "-";
  operationBox.textContent = "0";
  isSecondInput = true;
});

// multiply
const btnMult = document.querySelector(".multiply");
btnMult.addEventListener("click", () => {
  operation = "*";
  historyLog.textContent = "*";
  operationBox.textContent = "0";
  isSecondInput = true;
});

// division
const btnDivision = document.querySelector(".division");
btnDivision.addEventListener("click", () => {
  operation = "/";
  historyLog.textContent = "/";
  operationBox.textContent = "0";
  isSecondInput = true;
});

// +/- operation
const plusMinus = document.querySelector(".plus_minus");
plusMinus.addEventListener("click", () => {
  firstInput = changeSign(firstInput);
  operationBox.textContent = firstInput;
});

// clear operation
const btnClear = document.querySelector(".clear");
btnClear.addEventListener("click", () => {
  historyLog.textContent = "=";
  operationBox.textContent = "0";
  firstInput = "";
  secondInput = "";
  isSecondInput = false;
});

// equals operation
const btnEqual = document.querySelector(".equal");
btnEqual.addEventListener("click", () => {
  let result = 0;
  if (operation == "+") {
    result = sum(firstInput, secondInput);
    operationBox.textContent = result;
    historyLog.textContent = `${firstInput} + ${secondInput}`;
    firstInput = result;
    secondInput = "";
  } else if (operation == "-") {
    result = subtraction(firstInput, secondInput);
    operationBox.textContent = result;
    historyLog.textContent = `${firstInput} - ${secondInput}`;
    firstInput = result;
    secondInput = "";
  } else if (operation == "*") {
    result = multiply(firstInput, secondInput);
    operationBox.textContent = result;
    historyLog.textContent = `${firstInput} * ${secondInput}`;
    firstInput = result;
    secondInput = "";
  } else {
    result = division(firstInput, secondInput);
    operationBox.textContent = result;
    historyLog.textContent = `${firstInput} / ${secondInput}`;
    firstInput = result;
    secondInput = "";
  }
});

// operations
function sum(firstInput, secondInput) {
  return parseInt(firstInput) + parseInt(secondInput);
}

function subtraction(firstInput, secondInput) {
  return parseInt(firstInput) - parseInt(secondInput);
}

function multiply(firstInput, secondInput) {
  return parseInt(firstInput) * parseInt(secondInput);
}

function division(firstInput, secondInput) {
  if (secondInput != 0) {
    return parseInt(firstInput) / parseInt(secondInput);
  } else {
    return "ERROR";
  }
}

function changeSign(input) {
  return parseInt(input) * -1;
}
