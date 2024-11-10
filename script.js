const historyLog = document.getElementById("history_log");
const operationBox = document.getElementById("operation_box");

let firstInput = "";
let secondInput = "";
let operation = "";

let isSecondInput = false;
document.querySelectorAll(".num").forEach((number) => {
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

let result;
document.querySelectorAll(".op").forEach((num) => {
  num.addEventListener("click", (e) => {
    if (firstInput && secondInput) {
      result = operations[operation](Number(firstInput), Number(secondInput));
      historyLog.textContent = `${firstInput} ${operation} ${secondInput} =`;
      operationBox.textContent = result;
      firstInput = result;
      secondInput = "";
      isSecondInput = false;
    }

    operation = e.target.textContent;
    historyLog.textContent = `${firstInput} ${operation} `;
    operation_box.textContent = "0";
    isSecondInput = true;
  });
});

document.querySelector(".equal").addEventListener("click", (e) => {
  let result = operations[operation](Number(firstInput), Number(secondInput));

  historyLog.textContent = `${firstInput} ${operation} ${secondInput} =`;
  operation_box.textContent = result;
  firstInput = result;
  secondInput = "";
});

const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const division = (a, b) => (b != 0 ? a / b : NaN);

const operations = {
  "+": plus,
  "-": minus,
  X: multiply,
  "/": division,
};

document.querySelector(".plus_minus").addEventListener("click", () => {
  if (firstInput && !secondInput) {
    firstInput = (Number(firstInput) * -1).toString();
    operationBox.textContent = firstInput;
  } else if (isSecondInput) {
    secondInput = (Number(secondInput) * -1).toString();
    operationBox.textContent = secondInput;
  }
});

document.querySelector(".clear").addEventListener("click", () => clear());
function clear() {
  firstInput = "";
  secondInput = "";
  operation = "";
  isSecondInput = false;

  result = 0;
  operationBox.textContent = "0";
  historyLog.textContent = "=";
}
