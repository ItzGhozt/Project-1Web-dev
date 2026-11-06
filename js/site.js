// Home intro: name fades in, then slides away. Plays on every visit to the home page.
const intro = document.getElementById("intro");

if (intro) {
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    intro.classList.add("done");
    document.body.style.overflow = "";
  }, 1800);
  intro.addEventListener("transitionend", () => intro.remove());
}
