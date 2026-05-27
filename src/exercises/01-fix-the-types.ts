// Exercise 01: Fix the types

// Task:
// 1. Change the parameters so TypeScript knows they are numbers.
// 2. Change the return type so TypeScript knows the function returns a number.
// 3. Run: npm run check

function calculateRiskScore(likelihood: number, impact: number): number {
  return likelihood * impact;
}

console.log(calculateRiskScore(4, 5));

export {};