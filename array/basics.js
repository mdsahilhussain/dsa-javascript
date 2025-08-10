// take input for array from the user
let prompt = require("prompt-sync")();
let array = new Array(5);
for (let i = 0; i < array.length; i++) {
  array[i] = Number(prompt("Enter you input: "));
}

