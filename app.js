// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// Elements
const startHero = document.getElementById("startHero");
const startNav = document.getElementById("startNav");
const questions = document.getElementById("questions");
const options = document.querySelectorAll(".option");
const otherInput = document.getElementById("otherInput");
const generate = document.getElementById("generate");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

// Start buttons
startHero.onclick = startNav.onclick = () => {
  questions.classList.remove("hidden");
  questions.scrollIntoView({ behavior: "smooth" });
};

// Option click
options.forEach(btn => {
  btn.onclick = () => {
    if (btn.classList.contains("other")) {
      otherInput.classList.remove("hidden");
    } else {
      otherInput.classList.add("hidden");
    }
    generate.classList.remove("hidden");
  };
});

// Generate
generate.onclick = () => {
  questions.classList.add("hidden");
  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");
    result.classList.remove("hidden");
    result.scrollIntoView({ behavior: "smooth" });
  }, 2800);
};
