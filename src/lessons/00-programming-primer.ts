// Lesson 00: Programming Primer

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
