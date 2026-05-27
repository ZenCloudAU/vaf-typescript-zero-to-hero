// Lesson 02: Types and functions

function addBusinessValue(revenueImpact: number, efficiencyGain: number): number {
  return revenueImpact + efficiencyGain;
}

function describeScore(score: number): string {
  if (score >= 80) {
    return "High value";
  }

  if (score >= 50) {
    return "Medium value";
  }

  return "Low value";
}

const score = addBusinessValue(45, 30);

console.log("Score:", score);
console.log("Assessment:", describeScore(score));
