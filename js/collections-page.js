import { collections } from "./collections-data.js";

const encodePath = (p) => p.split("/").map(encodeURIComponent).join("/");

const list = document.getElementById("cats");
const preview = document.getElementById("preview");

// Hover previews only make sense with a mouse; skip the downloads on touch screens.
const canHover = matchMedia("(hover: hover)").matches;

const previews = [];

collections.forEach(({ id, title, cover, photos }, n) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `collection.html?id=${encodeURIComponent(id)}`;
  a.textContent = title;
  const count = document.createElement("sup");
  count.textContent = String(photos.length);
  a.appendChild(count);
  li.appendChild(a);
  list.appendChild(li);

  if (!canHover) return;

  // One stacked image per collection: switching rows is a crossfade,
  // never a src swap (which flashed the previous picture while loading).
  const img = document.createElement("img");
  img.src = encodePath(cover);
  img.alt = "";
  img.decoding = "async";
  preview.appendChild(img);
  previews[n] = img;
});

// ── Active row (replaces CSS :hover) ─────────────────────────────────
// A row stays highlighted until the pointer is clearly inside another row.
// Without this buffer, a cursor resting on the line between two names flips
// between them on every pixel of jitter and the italic swap flickers.
const rows = [...list.children];
const links = rows.map((li) => li.querySelector("a"));
const BUFFER = 14; // px of "stickiness" past a row's edge
let current = -1;

function setActive(n) {
  if (n === current) return;
  current = n;
  list.classList.toggle("has-active", n >= 0);
  links.forEach((a, i) => a.classList.toggle("is-active", i === n));
  previews.forEach((p, i) => p && p.classList.toggle("active", i === n));
  preview.classList.toggle("show", n >= 0 && canHover);
}

function rowAt(y) {
  return rows.findIndex((li) => {
    const r = li.getBoundingClientRect();
    return y >= r.top && y < r.bottom;
  });
}

if (canHover) {
  list.addEventListener("pointermove", (e) => {
    if (current >= 0) {
      const r = rows[current].getBoundingClientRect();
      if (e.clientY >= r.top - BUFFER && e.clientY < r.bottom + BUFFER) return;
    }
    setActive(rowAt(e.clientY));
  });
  list.addEventListener("pointerleave", () => setActive(-1));
}

// Keyboard focus gets the same treatment.
links.forEach((a, i) => a.addEventListener("focus", () => setActive(i)));
list.addEventListener("focusout", (e) => {
  if (!list.contains(e.relatedTarget)) setActive(-1);
});
