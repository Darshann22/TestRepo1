const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calc-btn, .action-btn');
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');
const equalsBtn = document.getElementById('equalsBtn');

let currentValue = '0';
let hasResult = false;

function updateDisplay() {
  display.value = currentValue;
}

function appendValue(value) {
  if (hasResult) {
    if ('+-*/'.includes(value)) {
      hasResult = false;
      currentValue = currentValue;
    } else {
      currentValue = '0';
      hasResult = false;
    }
  }

  if (currentValue === '0' && value !== '.') {
    currentValue = value;
  } else if (value === '.' && currentValue.slice(-1) === '.') {
    return;
  } else {
    currentValue += value;
  }

  updateDisplay();
}

function clearAll() {
  currentValue = '0';
  hasResult = false;
  updateDisplay();
}

function deleteLast() {
  if (hasResult) {
    currentValue = '0';
    hasResult = false;
  } else {
    currentValue = currentValue.slice(0, -1) || '0';
  }
  updateDisplay();
}

function calculate() {
  try {
    const sanitized = currentValue.replace(/[^0-9.+\-*/()]/g, '');
    const result = Function(`"use strict"; return (${sanitized})`)();
    currentValue = String(result);
    hasResult = true;
  } catch {
    currentValue = 'Error';
    hasResult = true;
  }
  updateDisplay();
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    appendValue(button.dataset.value);
  });
});

clearBtn.addEventListener('click', clearAll);
deleteBtn.addEventListener('click', deleteLast);
equalsBtn.addEventListener('click', calculate);

updateDisplay();
