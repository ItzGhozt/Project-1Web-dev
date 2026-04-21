import { collections } from "./collections-data.js";

const encodePath = (p) =>
  p.split("/").map(encodeURIComponent).join("/");

const grid = document.querySelector(".masonry-grid");

if (collections.length === 0) {
  grid.innerHTML =
    '<p style="text-align:center;color:#999;font-family:sans-serif;">No collections yet.</p>';
} else {
  collections.forEach(({ id, title, description, cover }) => {
    const item = document.createElement("div");
    item.className = "masonry-item";
    item.style.cursor = "pointer";
    item.innerHTML = `
      <img src="${encodePath(cover)}" alt="${title}" />
      <div class="masonry-overlay">
        <p class="masonry-title">${title}</p>
        <p class="masonry-description">${description}</p>
      </div>
    `;
    item.addEventListener("click", () => {
      window.location.href = `collection.html?id=${id}`;
    });
    grid.appendChild(item);
  });
}
