interface LearningPath {
  name: string;
  audience: string;
  level: "seed" | "planned" | "available";
}

const path: LearningPath = {
  name: "Agentic AI for Architecture",
  audience: "Architecture practitioners",
  level: "seed",
};

console.log(path);
