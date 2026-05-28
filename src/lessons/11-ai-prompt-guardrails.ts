// Lesson 11: AI Prompt Guardrails

type PromptRequest = {
  task: string;
  contextProvided: boolean;
  hasSuccessCriteria: boolean;
  riskLevel: "low" | "medium" | "high";
};

function assessPrompt(request: PromptRequest): string {
  if (!request.contextProvided) return "Add more context before using AI.";
  if (!request.hasSuccessCriteria) return "Define success criteria first.";
  if (request.riskLevel === "high") return "Human review required.";
  return "Prompt is ready to use.";
}

const request: PromptRequest = {
  task: "Generate a VAF decision artefact",
  contextProvided: true,
  hasSuccessCriteria: true,
  riskLevel: "medium",
};

console.log("Prompt request:", request);
console.log("Assessment:", assessPrompt(request));

export {};
