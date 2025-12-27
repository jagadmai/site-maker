/* =====================================================
   BUILDLY — FULL UI SCRIPT (STABLE + SMOOTH)
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- AUDIO ---------- */
  const clickSound = document.getElementById("clickSound");
  const whooshSound = document.getElementById("whooshSound");

  function play(sound) {
    if (!sound) return;
    sound.currentTime = 0;
    sound.volume = 0.35;
    sound.play().catch(() => {});
  }

  /* ---------- AUDIO UNLOCK (CRITICAL) ---------- */
  // Browsers block audio until first interaction
  document.body.addEventListener(
    "click",
    () => {
      if (clickSound) {
        clickSound.play().then(() => {
          clickSound.pause();
          clickSound.currentTime = 0;
        }).catch(() => {});
      }
    },
    { once: true }
  );

  /* ---------- HOVER + CLICK SOUNDS ---------- */
  function bindSounds() {
    document.querySelectorAll("button, .choice").forEach(el => {
      el.addEventListener("mouseenter", () => play(clickSound));
      el.addEventListener("click", () => play(clickSound));
    });

    document.querySelectorAll(".next, .start, .generate").forEach(el => {
      el.addEventListener("click", () => play(whooshSound));
    });
  }

  bindSounds();

  /* ---------- SCROLL REVEAL ---------- */
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  document.querySelectorAll(".reveal, .focus").forEach(el => {
    observer.observe(el);
  });

  /* ---------- SAFE RE-BIND (DYNAMIC CONTENT) ---------- */
  const mutationObserver = new MutationObserver(() => {
    bindSounds();
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

});
