let display = document.getElementById("display");
let currentInput = "";

function appendNumber(num) {
  currentInput += num;
  display.value = currentInput;
}

function appendOperator(op) {
  if (currentInput === "" || /[+\-*/.]$/.test(currentInput)) return; 
  currentInput += op;
  display.value = currentInput;
}

function appendDot() {
  if (currentInput === "" || /[+\-*/]$/.test(currentInput)) {
    currentInput += "0.";
  } else if (!/\.\d*$/.test(currentInput.split(/[+\-*/]/).pop())) {
    currentInput += ".";
  }
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.value = "";
}

function calculate() {
  try {
    if (currentInput.includes("/0")) {
      display.value = "Error (Divide by 0)";
      currentInput = "";
      return;
    }
    display.value = eval(currentInput);
    currentInput = display.value;
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
}
