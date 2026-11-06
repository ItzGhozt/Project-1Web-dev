import { collections } from "./collections-data.js";

const encodePath = (p) => p.split("/").map(encodeURIComponent).join("/");

const list = document.getElementById("cats");
const preview = document.getElementById("preview");

collections.forEach(({ id, title, cover, photos }) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `collection.html?id=${encodeURIComponent(id)}`;
  a.textContent = title;
  const count = document.createElement("sup");
  count.textContent = String(photos.length);
  a.appendChild(count);

  a.addEventListener("mouseenter", () => {
    preview.src = encodePath(cover);
    preview.classList.add("show");
  });
  a.addEventListener("mouseleave", () => preview.classList.remove("show"));

  li.appendChild(a);
  list.appendChild(li);
});
