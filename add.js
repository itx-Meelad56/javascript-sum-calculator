// const numbers = document.querySelectorAll('.number')
// const total = document.getElementById("total");

// numbers.forEach(input => {
//     input.addEventListener("input", () =>{
//         let sum = 0
//         numbers.forEach(num => {
//             sum += Number(num.value) || 0;
//         });
//         total.value = sum;
//     })
// });

function calculateSum() { 
let num1 = document.getElementById("num1").value
let num2 = document.getElementById("num2").value

// String → Number conversion
num1 = Number(num1)
num2 = Number(num2)

// Calculate sum
let sum = num1 + num2;

 // Show result

 let result = document.getElementById("result").innerText = "Result :" + sum;
}