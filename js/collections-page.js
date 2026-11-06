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

  const show = () => {
    previews.forEach((p, i) => p && p.classList.toggle("active", i === n));
    preview.classList.add("show");
  };
  a.addEventListener("mouseenter", show);
  a.addEventListener("focus", show);
});

// Hide only when the pointer leaves the whole list, not between rows.
const hide = () => {
  preview.classList.remove("show");
  previews.forEach((p) => p && p.classList.remove("active"));
};
list.addEventListener("mouseleave", hide);
list.addEventListener("focusout", (e) => {
  if (!list.contains(e.relatedTarget)) hide();
});
