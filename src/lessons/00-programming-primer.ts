// Lesson 00: Programming Primer

<<<<<<< HEAD
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
=======
// Programming is data plus instructions.
// Data is the information a program works with.
// Instructions are what the program does with that information.

const learnerName: string = "Phil";
const courseName: string = "TypeScript Zero to Hero";
const lessonNumber: number = 0;
const isReady: boolean = true;

console.log("Learner:", learnerName);
console.log("Course:", courseName);
console.log("Lesson:", lessonNumber);
console.log("Ready:", isReady);

function createMessage(name: string, course: string): string {
  return `${name} is starting ${course}.`;
}

const message: string = createMessage(learnerName, courseName);
console.log(message);

const learningGoal = {
  skill: "Understand the language behind AI-generated code",
  outcome: "Read, run, question, and improve TypeScript safely",
  system: "Velocity Architecture Academy",
};

console.log("Learning goal:", learningGoal.skill);
console.log("Outcome:", learningGoal.outcome);
console.log("System:", learningGoal.system);

export {};
>>>>>>> 2eea2a3c5f60d7db29e1a40a5375ece82c96a62b
