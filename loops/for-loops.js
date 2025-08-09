//! notes: All valid for loop
// for(;;){}
// for(; i<=10;){}
// for(var i=1; i<=10;){}
// for(var i=1; i<=10; i++){}

//!notes: invalid for loop
// for(;){}

//! Question
// sum of n natural numbers
let sum = 0;
const n = 10;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("Sum of n natural number", sum);

function factorial(n) {
  if (n < 0) {
    return "Factorial not defined for negative numbers";
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
const number = 5;
console.log(`Factorial of ${number} is`, factorial(number));

function getFactors(n) {
  // Check karte hain ki number valid hai ya nahi (positive integer)
  if (!Number.isInteger(n) || n <= 0) {
    console.log("Please enter a positive integer."); // Agar galat input hai toh error message
    return; // Function yahi stop ho jayega
  }

  const factors = []; // Yahan hum saare factors store karenge

  // Loop chalega 1 se leke sqrt(n) tak
  // Kyun? Kyunki sqrt se aage wale factors already mil chuke honge paired form me
  for (let i = 1; i <= Math.sqrt(n); i++) {
    // Agar n ko i se divide karne pe remainder 0 aata hai
    if (n % i === 0) {
      factors.push(i); // i ek factor hai, list me add karo

      // Check karte hain ki paired factor (n / i) alag hai ya nahi
      // Example: 28 → 2 ka pair hai 14, but 4 ka pair 7 hai
      // Agar same nahi hai toh usko bhi add karenge
      if (i !== n / i) factors.push(n / i);
    }
  }

  // Factors ko ascending order me arrange karenge
  return factors.sort((a, b) => a - b);
}

// Test run: 28 ke saare factors print karo
console.log(getFactors(28)); // Output: [1, 2, 4, 7, 14, 28]

function isPrime(n) {
  // Step 1: Input check karo - number hona chahiye, NaN nahi, aur integer (decimal nahi)
  if (typeof n !== "number" || Number.isNaN(n) || n % 1 !== 0) {
    return null; // null = invalid input
  }

  // Step 2: 1 se chhote ya equal number prime nahi hote
  if (n <= 1) return false;

  // Step 3: 2 ek special case hai - sabse chhota prime
  if (n === 2) return true;

  // Step 4: Agar even number hai (2 ke alawa) toh prime nahi hoga
  if (n % 2 === 0) return false;

  // Step 5: Square root tak check karna kaafi hai (upar tak jaane ki zarurat nahi)
  const limit = Math.floor(Math.sqrt(n));

  // Step 6: Sirf odd numbers check karo kyunki even pehle hi reject ho gaye
  for (let i = 3; i <= limit; i += 2) {
    // Agar divisible mil gaya toh prime nahi hai
    if (n % i === 0) return false;
  }

  // Step 7: Sab check pass ho gaye toh prime hai
  return true;
}

// Testing
const primeCheck = 8;
const result = isPrime(primeCheck);

if (result === null) {
  console.log("Invalid input");
} else {
  console.log(
    result
      ? `${primeCheck} is a prime number`
      : `${primeCheck} is not a prime number`
  );
}
