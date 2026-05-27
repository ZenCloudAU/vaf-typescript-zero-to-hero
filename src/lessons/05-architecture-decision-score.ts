// Lesson 05: A small Velocity-style decision scoring function

interface DecisionInput {
  businessValue: number;
  dataReadiness: number;
  securityConfidence: number;
  deliveryComplexity: number;
}

interface DecisionScore {
  rawScore: number;
  recommendation: "Proceed" | "Investigate" | "Stop";
}

function scoreArchitectureDecision(input: DecisionInput): DecisionScore {
  const rawScore =
    input.businessValue * 0.4 +
    input.dataReadiness * 0.25 +
    input.securityConfidence * 0.2 -
    input.deliveryComplexity * 0.15;

  if (rawScore >= 70) {
    return { rawScore, recommendation: "Proceed" };
  }

  if (rawScore >= 45) {
    return { rawScore, recommendation: "Investigate" };
  }

  return { rawScore, recommendation: "Stop" };
}

const result = scoreArchitectureDecision({
  businessValue: 90,
  dataReadiness: 70,
  securityConfidence: 80,
  deliveryComplexity: 40,
});

console.log(result);
