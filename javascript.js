function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (num1, num2, operator) {
    if (operator === "+") add(num1, num2);
    if (operator === "-") subtract(num1, num2);
    if (operator === "*") multiply(num1, num2);
    if (operator === "/") divide(num1, num2);
}
console.log(add(2, 2));
let answer = operate(2, 2, "+");
console.log(answer);
//console.log(operate(2, 2, "+"));
//let textInput = document.getElementById("textInput").value; 
//console.log(textInput);