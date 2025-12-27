/* ===============================
   BUILDLY UI SOUND + ANIMATION
   =============================== */

document.addEventListener("DOMContentLoaded", () => {

  const clickSound = document.getElementById("clickSound");
  const whooshSound = document.getElementById("whooshSound");

  function play(sound) {
    if (!sound) return;
    sound.currentTime = 0;
    sound.volume = 0.35;
    sound.play().catch(() => {});
  }

  /* ---------- HOVER + CLICK ---------- */
  document.querySelectorAll("button, .choice").forEach(el => {

    // Hover → click sound
    el.addEventListener("mouseenter", () => play(clickSound));

    // Click → click sound
    el.addEventListener("click", () => play(clickSound));
  });

  /* ---------- PAGE TRANSITION ---------- */
  document.querySelectorAll(".next, .start, .generate").forEach(btn => {
    btn.addEventListener("click", () => play(whooshSound));
  });

  /* ---------- SCROLL REVEAL ---------- */
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal, .focus").forEach(el => {
    observer.observe(el);
  });

});
