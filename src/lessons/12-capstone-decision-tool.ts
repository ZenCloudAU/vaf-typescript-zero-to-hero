// Lesson 12: Capstone Decision Tool

type DecisionStatus = "candidate" | "review" | "approved" | "rejected";

type DecisionCard = {
  title: string;
  businessValue: number;
  risk: number;
  confidence: number;
  status: DecisionStatus;
};

function calculateScore(card: DecisionCard): number {
  return card.businessValue + card.confidence - card.risk;
}

function recommend(card: DecisionCard): string {
  const score = calculateScore(card);

  if (card.status === "rejected") return "Decision has already been rejected.";
  if (score >= 12) return "Approve or move to final review.";
  if (score >= 7) return "Keep under review.";
  return "Do not approve yet.";
}

const decisionCard: DecisionCard = {
  title: "Publish TypeScript Zero to Hero as a Velocity Academy module",
  businessValue: 9,
  risk: 3,
  confidence: 7,
  status: "review",
};

console.log("Decision card:", decisionCard.title);
console.log("Score:", calculateScore(decisionCard));
console.log("Recommendation:", recommend(decisionCard));

export {};
