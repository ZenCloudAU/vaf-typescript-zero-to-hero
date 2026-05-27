// Exercise 02: Create an interface

// Task:
// Create an interface called LearningPath with:
// - name: string
// - audience: string
// - level: "seed" | "planned" | "available"
// Then type the object below.

interface LearningPath {
  name: string;
  audience: string;
  level: "seed" | "planned" | "available";
}

const learningPath: LearningPath = {
  name: "Agentic AI for Architecture",
  audience: "Architecture practitioners",
  level: "seed",
};

console.log(learningPath);

export {};
