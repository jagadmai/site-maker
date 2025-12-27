const startBtns = document.querySelectorAll("#startBtn, #startBtn2");
const flow = document.getElementById("flow");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("nextBtn");
const thinking = document.getElementById("thinking");
const result = document.getElementById("result");
const visionText = document.getElementById("visionText");

const answers = [];

const questions = [
  {
    q: "What are you building?",
    options: ["Personal brand", "Startup", "Community", "Project"]
  },
  {
    q: "Who should like it most?",
    options: ["Gen Alpha", "Gen Z", "Everyone"]
  },
  {
    q: "What matters more?",
    options: ["Looks", "Clarity", "Both"]
  },
  {
    q: "Pick the vibe",
    options: ["Bold", "Minimal", "Creative"]
  }
];

let step = 0;

function renderQuestion() {
  nextBtn.classList.add("hidden");
  questionEl.textContent = questions[step].q;
  choicesEl.innerHTML = "";

  questions[step].options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "choice";
    div.textContent = opt;
    div.onclick = () => {
      answers[step] = opt;
      nextBtn.classList.remove("hidden");
    };
    choicesEl.appendChild(div);
  });
}

startBtns.forEach(btn => {
  btn.onclick = () => {
    flow.classList.remove("hidden");
    renderQuestion();
    flow.scrollIntoView({ behavior: "smooth" });
  };
});

nextBtn.onclick = () => {
  step++;
  if (step < questions.length) {
    renderQuestion();
  } else {
    flow.classList.add("hidden");
    thinking.classList.remove("hidden");

    setTimeout(() => {
      thinking.classList.add("hidden");
      result.classList.remove("hidden");
      visionText.textContent =
        `A ${answers[3]} site for ${answers[1]} that balances ${answers[2]}.`;
      result.scrollIntoView({ behavior: "smooth" });
    }, 2500);
  }
};

// reveal animation
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));
