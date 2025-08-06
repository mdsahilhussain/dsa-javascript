// question-practice

//! question: area of square and perimeter
let lengthOfRectangle = 20;
let widthOfRectangle = 4;
console.log("Area of Rectangle is:", lengthOfRectangle * widthOfRectangle);
console.log(
  "Perimeter of Rectangle:",
  2 * (lengthOfRectangle + widthOfRectangle)
);

//! question: area of triangle by heron's formula
let a = 5;
let b = 4;
let c = 3;
//? hits: sqrt of s (semi perimeter): s * (s-a) * (s-b) * (s-c)
//? hits: semi perimeter formula : (a+b+c)/2
let semiPerimeter = Math.trunc((a + b + c) / 2);
console.log(
  "Area of triangle by heron's formula: ",
  Math.sqrt(
    semiPerimeter *
      (semiPerimeter - a) *
      (semiPerimeter - b) *
      (semiPerimeter - c)
  )
);

//! question: Circumference of circle
let radius = 12;
//? hits: Circumference formula
console.log(Number((2 * Math.PI * radius).toFixed(2)));
