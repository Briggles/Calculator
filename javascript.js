const equalsButton = document.querySelector("#equals");
let mathOperator = "No Operator";
let firstOperand = 0;
let secondOperand = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    console.log(button.id);
        //takeAction(button.id);    
    })
});

/*const divs = document.querySelectorAll("div");

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.setAttribute = "style", "background-color = black;";
    })
});*/

equalsButton.addEventListener("click", () => {
    const textInput = document.querySelector("#inputText");
    inputText.value = inputText.value + " = ";
    console.log(inputText.value);
  });

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
    return a / b;
}

function operate (num1, num2, operator) {
    if (operator === "+") return add(num1, num2);
    if (operator === "-") return subtract(num1, num2);
    if (operator === "*") return multiply(num1, num2);
    if (operator === "/") return divide(num1, num2);
}
let answer = operate(2, 2, "+");
console.log(answer);


//console.log(operate(2, 2, "+"));
//let textInput = document.getElementById("textInput").value; 
//console.log(textInput);