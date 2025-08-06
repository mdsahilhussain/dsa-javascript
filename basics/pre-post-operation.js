// node pre-post-operation

// performing increment and decrement
// post-increment and post-decrement
console.log(a++, " is a before incrementing");
console.log(b--, " is b before decrementing");

// pre-increment and pre-decrement
//! note: post-increment and post-decrement return the value before the operation, while pre-increment and pre-decrement return the value after the operation.
console.log(++a, " is a after incrementing");
console.log(--b, " is b after decrementing");

//! note: ++ kha lga hai, agar ++ pehle hai to number 1 badho fir use kro lo | ager ++ baad me hai to use kro lo fir number 1 badho lo

//! Question

let i = 11;
i = i++ + ++i; // 11 + 13
console.log(i);

let a = 11,
  b = 22;
let c = a + b + a++ + b++ + ++a + ++b;
console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);

let x = true;
x++;
console.log(x);

let y = false;
y++;
console.log(y);
y--;
console.log(y--);
