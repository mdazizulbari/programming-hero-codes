// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

let mathInput = Number(prompt("Enter Mathematics marks:"));
let bioInput = Number(prompt("Enter Biology marks:"));
let cheInput = Number(prompt("Enter Chemistry marks:"));
let phyInput = Number(prompt("Enter Physics marks:"));
let bangInput = Number(prompt("Enter Bangla marks:"));

let sum = mathInput + bioInput + cheInput + phyInput + bangInput;
let average = sum / 5;

console.log(`The average result is ${average.toFixed(2)}`);
