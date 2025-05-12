function togglePassword(event) {
    let passwordField = document.getElementById("passwords");
    if (passwordField.type === "password") {
      passwordField.type = "text";
      event.target.textContent = "Hide Password";
    } else {
      passwordField.type = "password";
      event.target.textContent = "Show Password";
    }
  }
  
  function showAlert() {
    alert("This is a JavaScript alert!");
  }
  
  function toggleLight() {
    let lightbulb = document.getElementById("lightbulb");
    if (lightbulb.src.includes("lightbulb_off.png")) {
      lightbulb.src = "lightbulb_on.png";
    } else {
      lightbulb.src = "lightbulb_off.png";
    }
  }
  
  function calculate() {
    let num2 = parseFloat(document.getElementById("num2").value) || 0;
    let num3 = parseFloat(document.getElementById("num3").value) || 0;
    let operation = document.getElementById("operation").value;
    let result;
    switch (operation) {
      case "add":
        result = num2 + num3;
        break;
      case "subtract":
        result = num2 - num3;
        break;
      case "multiply":
        result = num2 * num3;
        break;
      case "divide":
        result = num3 !== 0 ? (num2 / num3).toFixed(2) : "Cannot divide by zero";
        break;
      default:
        result = "Invalid Operation";
    }
    document.getElementById("output7").innerHTML = `Result: ${result}`;
  }
  
  document.getElementById("colorButton").addEventListener("click", function () {
    const colors = ["red", "blue", "black"];
    let currentColor = this.style.backgroundColor;
    let nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
    this.style.backgroundColor = nextColor;
  });
  
  function updateColor() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    document.getElementById("redValue").innerText = red;
    document.getElementById("greenValue").innerText = green;
    document.getElementById("blueValue").innerText = blue;
    let rgbColor = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById("colorBox").style.backgroundColor = rgbColor;
  }
  window.onload = updateColor;
  
  function calculateGrade() {
    let marks = document.getElementById("marks").value;
    let grade;
    if (marks > 100) {
      grade = "Error: Marks cannot exceed 100.";
    } else if (marks < 0) {
      grade = "Error: Marks cannot be negative.";
    } else if (marks >= 95) {
      grade = "A+ (Outstanding)";
    } else if (marks >= 90) {
      grade = "A+";
    } else if (marks >= 80) {
      grade = "A";
    } else if (marks >= 70) {
      grade = "B";
    } else if (marks >= 60) {
      grade = "C";
    } else if (marks >= 50) {
      grade = "D";
    } else if (marks >= 0) {
      grade = "F (Fail)";
    }
    document.getElementById("result").innerHTML = `Your Grade: ${grade}`;
  }
  
  function performOperations() {
    let a = parseFloat(document.getElementById("inputA").value);
    let b = parseFloat(document.getElementById("inputB").value);
    let addition = a + b;
    let subtraction = a - b;
    let multiplication = a * b;
    let division = b !== 0 ? (a / b).toFixed(2) : "Infinity (division by zero)";
    let modulus = b !== 0 ? a % b : "Undefined (modulus by zero)";
    let isGreater = a > b;
    let logicalCheck = a > 5 && b < 10;
    let outputText = `
      Results:<br>
      Addition (a + b) = ${addition}<br>
      Subtraction (a - b) = ${subtraction}<br>
      Multiplication (a * b) = ${multiplication}<br>
      Division (a / b) = ${division}<br>
      Modulus (a % b) = ${modulus}<br>
      Is 'a' greater than 'b'? ${isGreater}<br>
      Logical AND (a > 5 && b < 10): ${logicalCheck}
    `;
    document.getElementById("output1").innerHTML = outputText;
  }
  
  function displayValues() {
    let myName = document.getElementById("name").value;
    let myNumber = parseInt(document.getElementById("number").value) + 10;
    let isStudent = true;
    document.getElementById("output").innerHTML = `
      My Name: ${myName}<br>
      My Number: ${myNumber}<br>
      Boolean Value: ${isStudent}`;
  }
  
  let count = 0;
  const counterDisplay = document.getElementById("counterDisplay");
  document.getElementById("incrementBtn").addEventListener("click", function () {
    count++;
    counterDisplay.innerText = count;
  });
  document.getElementById("decrementBtn").addEventListener("click", function () {
    count--;
    counterDisplay.innerText = count;
  });
  document.getElementById("resetBtn").addEventListener("click", function () {
    count = 0;
    counterDisplay.innerText = count;
  });
  
  function calculateSquare() {
    let num1 = document.getElementById("num1").value;
    let square = num1 * num1;
    document.getElementById("output6").innerHTML = `Square of ${num1} is ${square}`;
  }
  
  const add = (a, b) => a + b;
  
  function addNumbers() {
    let num_1 = parseInt(prompt("Enter first number:"));
    let num_2 = parseInt(prompt("Enter second number:"));
    let sum = add(num_1, num_2);
    document.getElementById("output6").innerHTML = `Sum of ${num_1} and ${num_2} is ${sum}`;
  }
  
  function checkEvenOdd1() {
    let num1 = document.getElementById("num1").value;
    let result = num1 % 2 === 0 ? "Even" : "Odd";
    document.getElementById("output6").innerHTML = `${num1} is ${result}`;
  }