// Lesson 09: Interfaces as Contracts

interface ArchitectureArtefact {
  title: string;
  owner: string;
  purpose: string;
  status: "draft" | "review" | "approved";
}

const artefact: ArchitectureArtefact = {
  title: "VAF Decision Card",
  owner: "Architecture Team",
  purpose: "Capture a clear decision with value, risk, and confidence",
  status: "review",
};

function describeArtefact(item: ArchitectureArtefact): string {
  return `${item.title} is owned by ${item.owner} and is currently ${item.status}.`;
}

console.log(describeArtefact(artefact));

export {};
