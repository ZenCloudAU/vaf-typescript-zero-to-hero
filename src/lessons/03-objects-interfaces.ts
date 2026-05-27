// Lesson 03: Objects and interfaces

interface ArchitectureDecision {
  id: string;
  title: string;
  businessValue: number;
  deliveryRisk: number;
  securityRisk: number;
}

const decision: ArchitectureDecision = {
  id: "ADR-001",
  title: "Adopt TypeScript for Academy learning tools",
  businessValue: 85,
  deliveryRisk: 30,
  securityRisk: 20,
};

function summariseDecision(item: ArchitectureDecision): string {
  return `${item.id}: ${item.title}`;
}

console.log(summariseDecision(decision));
