let displayElement = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = null;

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    displayElement.innerText = '0';
}

function appendNumber(number) {
    if (number === 0 && currentOperand === '0') return;
    currentOperand = currentOperand.toString() + number.toString();
    displayElement.innerText = currentOperand;
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operation = null;
    previousOperand = '';
    displayElement.innerText = currentOperand;
}
