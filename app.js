// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

reveals.forEach(r => observer.observe(r));

// Logic
const startBtn = document.getElementById("startBtn");
const questions = document.getElementById("questions");
const options = document.querySelectorAll(".option");
const input = document.getElementById("customInput");
const generateBtn = document.getElementById("generateBtn");
const loading = document.getElementById("loading");
const generated = document.getElementById("generated");

startBtn.onclick = () => {
  questions.classList.remove("hidden");
  questions.scrollIntoView({ behavior: "smooth" });
};

options.forEach(opt => {
  opt.onclick = () => {
    if (opt.classList.contains("other")) {
      input.classList.remove("hidden");
    } else {
      input.classList.add("hidden");
    }
    generateBtn.classList.remove("hidden");
  };
});

generateBtn.onclick = () => {
  questions.classList.add("hidden");
  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");
    generated.classList.remove("hidden");
    generated.scrollIntoView({ behavior: "smooth" });
  }, 3000);
};
