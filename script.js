function makeChange(amount) {
  // Values for each coin
  const quarterValue = 25;
  const dimeValue = 10;
  const nickelValue = 5;
  const pennyValue = 1;

  // Initialize counts for each coin
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  // Calculate the number of quarters
  quarters = Math.floor(amount / quarterValue);
  amount %= quarterValue;

  // Calculate the number of dimes
  dimes = Math.floor(amount / dimeValue);
  amount %= dimeValue;

  // Calculate the number of nickels
  nickels = Math.floor(amount / nickelValue);
  amount %= nickelValue;

  // The remaining amount is the number of pennies
  pennies = amount;

  // Create and return the result object
  const result = { "q": quarters, "d": dimes, "n": nickels, "p": pennies };
  return result;
}

// Test cases
console.log(makeChange(47));  // Output: { "q": 1, "d": 2, "n": 0, "p": 2 }
console.log(makeChange(24));  // Output: { "q": 0, "d": 2, "n": 0, "p": 4 }


// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
