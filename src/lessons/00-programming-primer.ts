// Lesson 00: Programming Primer

// A value is a piece of data.
const learnerName = "Phil";
const yearsExperience = 20;
const isLearning = true;

// A variable gives a value a name.
console.log("Learner name:");
console.log(learnerName);

console.log("Years of experience:");
console.log(yearsExperience);

console.log("Is learning:");
console.log(isLearning);

// A function is a reusable instruction.
function createGreeting(name: string): string {
  return "Hello " + name + ". Welcome to programming basics.";
}

// Calling a function means running it.
const greeting = createGreeting(learnerName);

console.log("Greeting:");
console.log(greeting);

// An object groups related data together.
const architectureDecision = {
  title: "Adopt TypeScript for AI-native tooling",
  value: 8,
  risk: 3,
};

// Dot notation lets us read values from an object.
console.log("Decision title:");
console.log(architectureDecision.title);

console.log("Decision value:");
console.log(architectureDecision.value);

console.log("Decision risk:");
console.log(architectureDecision.risk);

// A function can use an object to calculate something.
function calculateDecisionScore(value: number, risk: number): number {
  return value - risk;
}

const decisionScore = calculateDecisionScore(
  architectureDecision.value,
  architectureDecision.risk
);

console.log("Decision score:");
console.log(decisionScore);

export {};