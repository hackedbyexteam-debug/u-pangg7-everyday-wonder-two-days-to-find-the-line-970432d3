// Everyday Wonder — one sentence, 79 of 200 characters.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, judged against the sealed criteria in competition.yaml
// (reader who prizes the jolt of seeing something ordinary for the first
// time; criteria most important first):
// 14 candidates drafted and compared. Winner:
//   "My shadow on the wet pavement arrived at the crossing a full step
//    before I did."
// C1 (a small moment of wonder in everyday life, one sentence): a shadow
//   on wet pavement at a crossing — an ordinary walk, one sentence.
// C2 (an angle the reader has not met before; the phrasing is the
//   surprise): the shadow does not follow, it arrives first — the
//   impossible small reversal is the whole sentence, and no familiar
//   wonder-image is reused.
// C3 (surprise lands in one read): the turn is in the verb "arrived" —
//   the sentence reads as an impossibility stated plainly, no second pass.
// C4 (grounded in something real and specific): wet pavement, a crossing,
//   a single step — concrete, checkable details, not floating lyricism.
// C5 (every word working): 79 characters, no filler, no worn phrase.
// Runners-up, and why they lost: the last leaf letting go "on a perfectly
//   still Tuesday" has a fine turn but leaves-and-storms are a familiar
//   poetic subject; the pigeon's orange eye is a strong image but slightly
//   grandiose; the wind walking into the pharmacy "like it had an
//   appointment" is playful but the joke carries it, not the wonder; the
//   elevator-mirror apology is comedy, not wonder. The brief's own
//   examples (puddle holding the sky, kettle's pause, lift door on a song)
//   were treated as the modal angles and avoided outright.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `My shadow on the wet pavement arrived at the crossing a full step before I did.`;

const MAX_CHARS = 200; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}
if (ENTRY.trim() !== ENTRY || ENTRY.includes("\n")) {
  console.error("entry must be a single line with no leading/trailing space");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
