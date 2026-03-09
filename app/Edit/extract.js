import { readFile, writeFile } from "fs/promises";

const inputFile = "./biologytestdocx.js";

const text = await readFile(inputFile, "utf8");

// regex patterns
const diagramRegex = /diagramId:\s*['"]([^'"]+)['"]/g;
const experimentRegex = /experimentId:\s*['"]([^'"]+)['"]/g;

let match;
let diagramIds = [];
let experimentIds = [];

// extract diagram IDs
while ((match = diagramRegex.exec(text)) !== null) {
    diagramIds.push(match[1]);
}

// extract experiment IDs
while ((match = experimentRegex.exec(text)) !== null) {
    experimentIds.push(match[1]);
}

// remove duplicates
const uniqueDiagramIds = [...new Set(diagramIds)];
const uniqueExperimentIds = [...new Set(experimentIds)];

// save files
await writeFile("diagramIDs.txt", uniqueDiagramIds.join("\n"));
await writeFile("experimentIDs.txt", uniqueExperimentIds.join("\n"));

console.log(`Saved ${uniqueDiagramIds.length} diagram IDs to diagramIDs.txt`);
console.log(`Saved ${uniqueExperimentIds.length} experiment IDs to experimentIDs.txt`);
