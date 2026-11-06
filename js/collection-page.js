import { collections } from "./collections-data.js";
import { initLightbox } from "./lightbox.js";

const encodePath = (p) => p.split("/").map(encodeURIComponent).join("/");

const id = new URLSearchParams(window.location.search).get("id");
const collection = collections.find((c) => c.id === id);

if (!collection) {
  window.location.replace("collections.html");
} else {
  document.title = `${collection.title} — Isabel Yeow`;
  document.getElementById("title").textContent = collection.title;
  document.getElementById("desc").textContent = collection.description;

  const grid = document.getElementById("grid");
  collection.photos.forEach((src, n) => {
    const btn = document.createElement("button");
    btn.type = "button";
    const img = document.createElement("img");
    img.src = encodePath(src);
    img.alt = `${collection.title} ${n + 1}`;
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("load", () => img.classList.add("loaded"));
    btn.appendChild(img);
    grid.appendChild(btn);
  });
  initLightbox(grid);
}
