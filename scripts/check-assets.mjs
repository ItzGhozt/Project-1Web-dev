// Fails if any image referenced by js/collections-data.js (or the HTML/CSS)
// is missing or is a Git LFS pointer file instead of a real image.
import {
  readFileSync,
  existsSync,
  statSync,
  openSync,
  readSync,
  closeSync,
} from "node:fs";
import { collections } from "../js/collections-data.js";

const paths = new Set();
for (const c of collections) {
  if (c.cover) paths.add(c.cover);
  for (const p of c.photos ?? []) paths.add(p);
}
for (const f of [
  "index.html",
  "collections.html",
  "collection.html",
  "film.html",
]) {
  if (!existsSync(f)) continue;
  for (const m of readFileSync(f, "utf8").matchAll(
    /(?:src|poster)="(images\/[^"]+)"/g,
  ))
    paths.add(m[1]);
}

const problems = [];
for (const p of paths) {
  if (!existsSync(p)) {
    problems.push(`missing:      ${p}`);
    continue;
  }
  const fd = openSync(p, "r");
  const buf = Buffer.alloc(24);
  readSync(fd, buf, 0, 24, 0);
  closeSync(fd);
  if (buf.toString("utf8").startsWith("version https://git-lfs"))
    problems.push(`LFS pointer:  ${p}`);
  else if (statSync(p).size === 0) problems.push(`empty:        ${p}`);
}
console.log(`Checked ${paths.size} referenced images.`);
if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log("All images present and real.");
