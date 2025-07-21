  let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = "";
let resultShown = false;

 
function updateDisplay(value) {
  display.value = value;
}

 
function appendNumber(num) {
  if (resultShown) {
    currentInput = "";
    resultShown = false;
  }
  currentInput += num;
  updateDisplay(currentInput);
}

 
function appendDot() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay(currentInput);
  }
}

 
function appendOperator(op) {
  if (currentInput === "") return;

  if (firstOperand && operator && currentInput !== "") {
    calculate();  
  }

  firstOperand = currentInput;
  operator = op;
  currentInput = "";

  
  updateDisplay(firstOperand + " " + getSymbol(op));
}

 
function getSymbol(op) {
  switch (op) {
    case "*": return "×";
    case "/": return "÷";
    case "-": return "−";
    case "+": return "+";
    default: return op;
  }
}

 
function clearDisplay() {
  currentInput = "";
  firstOperand = "";
  operator = "";
  resultShown = false;
  updateDisplay("");
}

 
function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput);
}

 
function calculate() {
  if (firstOperand === "" || currentInput === "") return;

  let a = parseFloat(firstOperand);
  let b = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = b !== 0 ? a / b : "Error"; break;
    default: result = "Error";
  }

  updateDisplay(result);
  currentInput = result.toString();
  firstOperand = "";
  operator = "";
  resultShown = true;
}
