// Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Flow logic
const start = document.getElementById("startFlow");
const flow = document.getElementById("flow");
const choices = document.querySelectorAll(".choice");
const otherInput = document.getElementById("otherInput");
const cont = document.getElementById("continue");
const thinking = document.getElementById("thinking");
const result = document.getElementById("result");

start.onclick = () => {
  flow.classList.remove("hidden");
  flow.scrollIntoView({ behavior: "smooth" });
};

choices.forEach(c => {
  c.onclick = () => {
    if (c.classList.contains("other")) {
      otherInput.classList.remove("hidden");
    } else {
      otherInput.classList.add("hidden");
    }
    cont.classList.remove("hidden");
  };
});

cont.onclick = () => {
  flow.classList.add("hidden");
  thinking.classList.remove("hidden");

  setTimeout(() => {
    thinking.classList.add("hidden");
    result.classList.remove("hidden");
    result.scrollIntoView({ behavior: "smooth" });
  }, 2800);
};
