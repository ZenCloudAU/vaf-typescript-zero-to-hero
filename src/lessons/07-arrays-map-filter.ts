// Lesson 07: Arrays, Map, and Filter

type Decision = {
  title: string;
  value: number;
  risk: number;
};

const decisions: Decision[] = [
  { title: "Adopt TypeScript", value: 9, risk: 3 },
  { title: "Build a course portal", value: 8, risk: 4 },
  { title: "Skip quality checks", value: 2, risk: 9 },
];

const scoredDecisions = decisions.map((decision) => {
  return {
    ...decision,
    score: decision.value - decision.risk,
  };
});

const goodDecisions = scoredDecisions.filter((decision) => decision.score >= 4);

console.log("All scored decisions:");
console.log(scoredDecisions);

console.log("Good decisions:");
console.log(goodDecisions);

export {};
