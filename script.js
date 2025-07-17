  let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = "";
let resultShown = false;

// Update display
function updateDisplay(value) {
  display.value = value;
}

// Number button click
function appendNumber(num) {
  if (resultShown) {
    currentInput = "";
    resultShown = false;
  }
  currentInput += num;
  updateDisplay(currentInput);
}

// Decimal point
function appendDot() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay(currentInput);
  }
}

// Operator button click
function appendOperator(op) {
  if (currentInput === "") return;

  if (firstOperand && operator && currentInput !== "") {
    calculate(); // calculate previous expression
  }

  firstOperand = currentInput;
  operator = op;
  currentInput = "";

  // ✅ Show operator on screen
  updateDisplay(firstOperand + " " + getSymbol(op));
}

// Replace symbols for display
function getSymbol(op) {
  switch (op) {
    case "*": return "×";
    case "/": return "÷";
    case "-": return "−";
    case "+": return "+";
    default: return op;
  }
}

// Clear display
function clearDisplay() {
  currentInput = "";
  firstOperand = "";
  operator = "";
  resultShown = false;
  updateDisplay("");
}

// Backspace one digit
function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput);
}

// Calculate result
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
