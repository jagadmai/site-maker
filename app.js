// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// Flow logic
const startBtns = document.querySelectorAll("#startBtn, #startBtn2");
const flow = document.getElementById("flow");
const choices = document.querySelectorAll(".choice");
const otherInput = document.getElementById("otherInput");
const continueBtn = document.getElementById("continueBtn");
const thinking = document.getElementById("thinking");
const result = document.getElementById("result");

startBtns.forEach(btn => {
  btn.onclick = () => {
    flow.classList.remove("hidden");
    flow.scrollIntoView({ behavior: "smooth" });
  };
});

choices.forEach(choice => {
  choice.onclick = () => {
    if (choice.classList.contains("other")) {
      otherInput.classList.remove("hidden");
    } else {
      otherInput.classList.add("hidden");
    }
    continueBtn.classList.remove("hidden");
  };
});

continueBtn.onclick = () => {
  flow.classList.add("hidden");
  thinking.classList.remove("hidden");

  setTimeout(() => {
    thinking.classList.add("hidden");
    result.classList.remove("hidden");
    result.scrollIntoView({ behavior: "smooth" });
  }, 2500);
};
