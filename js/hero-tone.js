// Home hero: keep the text over the video readable as the footage changes.
// Every few frames we look at the pixels behind each [data-adapt] element and set
// data-tone="dark" (near-black text on a bright shot) or "light" (white text on a dark shot).
// CSS eases the colour between the two, so the change is subtle instead of a flash.
const video = document.getElementById("hero-video");
const hero = document.querySelector(".hero");
const items = [...document.querySelectorAll("[data-adapt]")];

if (video && hero && items.length) {
  const SCALE = 6; // sample at 1/6 size: plenty to judge brightness, cheap to draw
  const TO_DARK = 0.62; // average brightness above this -> dark text
  const TO_LIGHT = 0.5; // below this -> white text (the gap stops flicker)
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  let timer = 0;

  const luma = (d, i) =>
    (0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2]) / 255;

  function sample() {
    if (!ctx || video.readyState < 2 || video.videoWidth === 0) return;
    const box = hero.getBoundingClientRect();
    if (box.bottom <= 0 || box.top >= innerHeight) return;
    const w = Math.max(1, Math.round(box.width / SCALE));
    const h = Math.max(1, Math.round(box.height / SCALE));
    canvas.width = w;
    canvas.height = h;
    // object-fit: cover
    const k = Math.max(w / video.videoWidth, h / video.videoHeight);
    const dw = video.videoWidth * k;
    const dh = video.videoHeight * k;
    try {
      ctx.drawImage(video, (w - dw) / 2, (h - dh) / 2, dw, dh);
      for (const el of items) {
        const r = el.getBoundingClientRect();
        const x0 = Math.max(0, Math.floor((r.left - box.left) / SCALE));
        const y0 = Math.max(0, Math.floor((r.top - box.top) / SCALE));
        const x1 = Math.min(w, Math.ceil((r.right - box.left) / SCALE));
        const y1 = Math.min(h, Math.ceil((r.bottom - box.top) / SCALE));
        if (x1 <= x0 || y1 <= y0) continue;
        const d = ctx.getImageData(x0, y0, x1 - x0, y1 - y0).data;
        let sum = 0;
        for (let i = 0; i < d.length; i += 4) sum += luma(d, i);
        const avg = sum / (d.length / 4);
        const dark = el.dataset.tone === "dark";
        el.dataset.tone = dark
          ? avg < TO_LIGHT
            ? "light"
            : "dark"
          : avg > TO_DARK
            ? "dark"
            : "light";
      }
    } catch {
      stop(); // the browser refused to read the video: leave the default (white) text
    }
  }

  function start() {
    if (!timer) timer = setInterval(sample, 250);
  }
  function stop() {
    clearInterval(timer);
    timer = 0;
  }

  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    video.addEventListener("playing", start);
    video.addEventListener("pause", stop);
    if (!video.paused) start();
  }
  sample();
}
