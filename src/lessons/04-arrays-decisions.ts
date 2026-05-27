// Lesson 04: Arrays and decision filters

interface CourseModule {
  code: string;
  title: string;
  difficulty: "foundation" | "intermediate" | "advanced";
  hours: number;
}

const modules: CourseModule[] = [
  { code: "TS-001", title: "What is TypeScript?", difficulty: "foundation", hours: 1 },
  { code: "TS-002", title: "Types and Functions", difficulty: "foundation", hours: 2 },
  { code: "TS-003", title: "Decision Models", difficulty: "intermediate", hours: 3 },
];

const foundationModules = modules.filter((module) => module.difficulty === "foundation");

console.log("Foundation modules:");
for (const module of foundationModules) {
  console.log(`${module.code} - ${module.title}`);
}
