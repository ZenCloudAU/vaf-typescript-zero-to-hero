// Lesson 06: Status Types

type ModuleStatus = "idea" | "planned" | "ready" | "archived";

type CourseModule = {
  id: number;
  name: string;
  status: ModuleStatus;
};

const courseModule: CourseModule = {
  id: 6,
  name: "Status Types",
  status: "ready",
};

function explainStatus(status: ModuleStatus): string {
  if (status === "idea") return "This module is only an idea.";
  if (status === "planned") return "This module is planned.";
  if (status === "ready") return "This module is ready to run.";
  return "This module is no longer active.";
}

console.log("Module:", courseModule.name);
console.log("Status:", courseModule.status);
console.log(explainStatus(courseModule.status));

export {};
