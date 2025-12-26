const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));
// Button interactions
document.getElementById("startBtn")?.addEventListener("click", () => {
  document.getElementById("start")?.scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("howBtn")?.addEventListener("click", () => {
  document.getElementById("how")?.scrollIntoView({
    behavior: "smooth"
  });
});

// Make CTA button reusable
document.querySelectorAll(".primary-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("start")?.scrollIntoView({
      behavior: "smooth"
    });
  });
});
