// node type-casting

let age = "25"; // ek valid numeric string ha
console.log(Number(age), "type casting to number");

let newAge = "25a";
console.log(Number(newAge), "type casting to number with invalid string");

console.log(Number("42"), "type casting to number with valid string");
console.log(parseInt("42.5"), "type casting to integer with valid string");
console.log(parseFloat("42.5"), "type casting to float with valid string");
console.log(String(true), "type casting to string with boolean");
console.log(String(42), "type casting to string with number");
console.log(
  (44).toString(),
  "type casting to string with number using toString method"
);

console.log(
  Boolean(0) / Boolean("hello"),
  "type casting to boolean with number and string"
);

console.log(BigInt(42), " type casting to BigInt with number");
