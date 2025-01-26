function add(a: number, b: number): number {
  return a + b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    console.error("Invalid input: Arguments must be numbers.");
    return 0; // Or throw an error
  }
}

let result1 = addSafe(10, 20); // Correct usage
let result2 = addSafe("hello", 10); // Safe handling of type mismatch
let result3 = addSafe(10, "world"); // Safe handling of type mismatch