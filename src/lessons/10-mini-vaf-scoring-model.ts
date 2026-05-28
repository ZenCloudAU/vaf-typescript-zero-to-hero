// Lesson 10: Mini VAF Scoring Model

type VafAssessment = {
  businessValue: number;
  dataReadiness: number;
  securityRisk: number;
  deliveryComplexity: number;
};

function calculateVafScore(assessment: VafAssessment): number {
  return assessment.businessValue + assessment.dataReadiness - assessment.securityRisk - assessment.deliveryComplexity;
}

function classifyScore(score: number): string {
  if (score >= 10) return "Strong candidate";
  if (score >= 5) return "Needs review";
  return "Not ready";
}

const assessment: VafAssessment = {
  businessValue: 9,
  dataReadiness: 7,
  securityRisk: 3,
  deliveryComplexity: 4,
};

const score = calculateVafScore(assessment);

console.log("VAF assessment:", assessment);
console.log("VAF score:", score);
console.log("Classification:", classifyScore(score));

export {};
