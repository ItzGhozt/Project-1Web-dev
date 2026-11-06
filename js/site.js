// Home intro: name fades in, then slides away. Shown once per session.
const intro = document.getElementById("intro");

if (intro) {
  let seen = false;
  try {
    seen = sessionStorage.getItem("intro-seen") === "1";
    sessionStorage.setItem("intro-seen", "1");
  } catch {
    /* storage unavailable — just play it */
  }

  if (seen) {
    intro.remove();
  } else {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      intro.classList.add("done");
      document.body.style.overflow = "";
    }, 1800);
    intro.addEventListener("transitionend", () => intro.remove());
  }
}
