import { collections } from "./collections-data.js";

const encodePath = (p) =>
  p.split("/").map(encodeURIComponent).join("/");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const collection = collections.find((c) => c.id === id);

if (!collection) {
  window.location.href = "collections.html";
}

document.title = `${collection.title} - Isabel Yeow`;
document.querySelector(".collection-title").textContent = collection.title;
document.querySelector(".collection-description").textContent =
  collection.description;

const grid = document.querySelector(".collection-grid");
collection.photos.forEach((src) => {
  const item = document.createElement("div");
  item.className = "masonry-item";
  item.innerHTML = `<img src="${encodePath(src)}" alt="${collection.title}" />`;
  grid.appendChild(item);
});

// Lightbox
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

grid.addEventListener("click", (e) => {
  const img = e.target.closest("img");
  if (!img) return;
  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt;
  lightbox.classList.add("active");
});

lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("active");
});
