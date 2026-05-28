// Lesson 08: Functions as Decision Engines

type DecisionInput = {
  value: number;
  risk: number;
  confidence: number;
};

function calculateDecisionScore(input: DecisionInput): number {
  return input.value + input.confidence - input.risk;
}

function recommendAction(score: number): string {
  if (score >= 12) return "Proceed";
  if (score >= 7) return "Proceed with review";
  return "Do not proceed yet";
}

const input: DecisionInput = {
  value: 8,
  risk: 3,
  confidence: 6,
};

const score = calculateDecisionScore(input);
const recommendation = recommendAction(score);

console.log("Decision input:", input);
console.log("Decision score:", score);
console.log("Recommendation:", recommendation);

export {};
