const historyLog = document.getElementById("history_log");
const operationBox = document.getElementById("operation_box");
const numbers = document.querySelectorAll(".num");

let firstInput = "";
let secondInput = "";
let operation = "";

function clear() {
  historyLog.textContent = operation;
  operationBox.textContent = "0";
}

// display numbers on screen
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

const btnPlus = document.querySelector(".plus");
btnPlus.addEventListener("click", () => {
  operation = "+";
  if (firstInput && secondInput) {
    calculation(operation);
  } else {
    clear();
    isSecondInput = true;
  }
});

const btnMinus = document.querySelector(".minus");
btnMinus.addEventListener("click", () => {
  operation = "-";
  clear();
  isSecondInput = true;
});

const btnMult = document.querySelector(".multiply");
btnMult.addEventListener("click", () => {
  operation = "*";
  clear();
  isSecondInput = true;
});

const btnDivision = document.querySelector(".division");
btnDivision.addEventListener("click", () => {
  operation = "/";
  clear();
  isSecondInput = true;
});

const plusMinus = document.querySelector(".plus_minus");
plusMinus.addEventListener("click", () => {
  firstInput = changeSign(firstInput);
  operationBox.textContent = firstInput;
});

const btnClear = document.querySelector(".clear");
btnClear.addEventListener("click", () => {
  clear();
  firstInput = "";
  secondInput = "";
  isSecondInput = false;
});

const btnEqual = document.querySelector(".equal");
btnEqual.addEventListener("click", () => {
  calculation(operation);
});

function calculation(operation) {
  let result;
  if (operation == "+") {
    result = sum(firstInput, secondInput);
    operationBox.textContent = result;
    historyLog.textContent = `${firstInput} + ${secondInput} =`;
    firstInput = result;
    secondInput = "";
  } else if (operation == "-") {
    result = subtraction(firstInput, secondInput);
    operationBox.textContent = result;
    historyLog.textContent = `${firstInput} - ${secondInput} =`;
    firstInput = result;
    secondInput = "";
  } else if (operation == "*") {
    result = multiply(firstInput, secondInput);
    operationBox.textContent = result;
    historyLog.textContent = `${firstInput} * ${secondInput} =`;
    firstInput = result;
    secondInput = "";
  } else {
    result = division(firstInput, secondInput);
    operationBox.textContent = result;
    historyLog.textContent = `${firstInput} / ${secondInput} =`;
    firstInput = result;
    secondInput = "";
  }
}

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
