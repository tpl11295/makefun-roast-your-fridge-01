import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One Line, One Laugh: Roast Your Fridge entry: a single original one-line roast.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters (this line is 92).
const line =
  "My crisper drawer has kept one lettuce alive since March. It is not fresh. It is a hostage.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
if (readFileSync("/output/entry.txt", "utf8") !== line) {
  throw new Error("entry.txt does not match the roast line");
}
console.log(`wrote ${line.length} characters to /output/entry.txt`);
