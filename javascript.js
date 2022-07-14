const textInput = document.querySelector("#inputText");
let mathOperator = "No Operator";
let firstOperand = 0;
let secondOperand = 0;
let clearNextInput = false;
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    console.log(button.id);
    processInput(button.id);
    })
});

function processInput(a) {
    if (clearNextInput) clearCalculator();
    textInput.value = textInput.value + a;
    if (a === "=") {
        console.log("first operand: "  + firstOperand);
        console.log("second operand: " + secondOperand);
        console.log("operator: " + mathOperator);
        textInput.value = operate(firstOperand, secondOperand, mathOperator);
    }
    if (mathOperator != "No Operator") secondOperand = a;
    if (a === "+") mathOperator = "+";
    if (a === "-") mathOperator = "-";
    if (a === "*") mathOperator = "*";
    if (a === "/") mathOperator = "/";
    if (mathOperator === "No Operator") firstOperand = textInput.value;
    if (a === "clear") clearCalculator();
}

function clearCalculator(){
    mathOperator = "No Operator";
    firstOperand = "0";
    secondOperand = "0";
    textInput.value = "";
    clearNextInput = false;

}
function add (a, b) {
    return (a + b);
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if (b === "0") return "Don't divide by zero, silly goose!";
    return a / b;
}

function operate (num1, num2, operator) {
    clearNextInput = true;
    if (operator === "+") return add(num1, num2);
    if (operator === "-") return subtract(num1, num2);
    if (operator === "*") return multiply(num1, num2);
    if (operator === "/") return divide(num1, num2);
}