import { collections } from "./collections-data.js";

const encodePath = (p) => p.split("/").map(encodeURIComponent).join("/");

const tiles = document.getElementById("tiles");

collections.forEach(({ id, title, cover }, n) => {
  const a = document.createElement("a");
  a.className = "tile";
  a.href = `collection.html?id=${encodeURIComponent(id)}`;

  const img = document.createElement("img");
  img.src = encodePath(cover);
  img.alt = title;
  img.loading = n < 2 ? "eager" : "lazy";
  img.decoding = "async";

  const name = document.createElement("span");
  name.textContent = title;

  a.append(img, name);
  tiles.appendChild(a);
});
