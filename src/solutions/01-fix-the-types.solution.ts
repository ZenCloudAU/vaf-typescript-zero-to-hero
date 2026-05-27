function calculateRiskScore(likelihood: number, impact: number): number {
  return likelihood * impact;
}

console.log(calculateRiskScore(4, 5));
export {};