// Click any button>img inside a container to open a full-screen viewer.
export function initLightbox(container) {
  const lb = document.createElement("div");
  lb.className = "lb";
  lb.innerHTML = `
    <button class="lb-close" aria-label="Close">Close</button>
    <button class="lb-prev" aria-label="Previous">&larr;</button>
    <img alt="" />
    <button class="lb-next" aria-label="Next">&rarr;</button>
    <div class="lb-count"></div>`;
  document.body.appendChild(lb);

  const img = lb.querySelector("img");
  const count = lb.querySelector(".lb-count");
  let imgs = [];
  let i = 0;

  const show = (n) => {
    i = (n + imgs.length) % imgs.length;
    img.src = imgs[i].currentSrc || imgs[i].src;
    img.alt = imgs[i].alt;
    count.textContent = `${i + 1} / ${imgs.length}`;
  };
  const close = () => lb.classList.remove("open");

  container.addEventListener("click", (e) => {
    const target = e.target.closest("img");
    if (!target) return;
    imgs = [...container.querySelectorAll("img")];
    show(imgs.indexOf(target));
    lb.classList.add("open");
  });

  lb.addEventListener("click", (e) => {
    if (e.target.closest(".lb-prev")) show(i - 1);
    else if (e.target.closest(".lb-next")) show(i + 1);
    else if (e.target !== img) close();
  });

  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(i - 1);
    if (e.key === "ArrowRight") show(i + 1);
  });
}
