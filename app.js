/* ===============================
   SMOOTH SCROLL REVEAL (already there but improved)
================================ */
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

/* ===============================
   BUTTON SCROLL BEHAVIOR
================================ */
document.getElementById("startBtn")?.addEventListener("click", () => {
  document.getElementById("builder")?.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("howBtn")?.addEventListener("click", () => {
  document.getElementById("how")?.scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".primary-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("builder")?.scrollIntoView({ behavior: "smooth" });
  });
});

/* ===============================
   AI BUILDER FLOW
================================ */
const questions = [
  {
    text: "What is this website for?",
    options: ["Business", "Portfolio", "Blog", "Landing Page", "Other"]
  },
  {
    text: "Choose a visual style",
    options: ["Clean", "Colorful", "Creative", "Minimal", "Other"]
  },
  {
    text: "What vibe should it have?",
    options: ["Professional", "Playful", "Modern", "Elegant", "Other"]
  }
];

let currentStep = 0;
const answers = [];

/* ===============================
   CREATE BUILDER SECTION DYNAMICALLY
================================ */
const builderSection = document.createElement("section");
builderSection.id = "builder";
builderSection.className = "builder-section reveal";
builderSection.innerHTML = `
  <div class="builder-card">
    <div class="builder-progress"></div>
    <h2 id="builder-question"></h2>
    <div class="builder-options" id="builder-options"></div>
  </div>
`;
document.body.appendChild(builderSection);

observer.observe(builderSection);

/* ===============================
   RENDER QUESTION
================================ */
function renderQuestion() {
  const q = questions[currentStep];
  const questionEl = document.getElementById("builder-question");
  const optionsEl = document.getElementById("builder-options");
  const progressEl = document.querySelector(".builder-progress");

  questionEl.textContent = q.text;
  optionsEl.innerHTML = "";

  progressEl.style.width =
    ((currentStep + 1) / questions.length) * 100 + "%";

  q.options.forEach(opt => {
    const card = document.createElement("div");
    card.className = "builder-option";
    card.textContent = opt;

    card.onclick = () => {
      if (opt === "Other") {
        showOtherInput();
      } else {
        answers.push(opt);
        nextStep();
      }
    };

    optionsEl.appendChild(card);
  });
}

/* ===============================
   OTHER INPUT HANDLING
================================ */
function showOtherInput() {
  const optionsEl = document.getElementById("builder-options");
  optionsEl.innerHTML = "";

  const input = document.createElement("input");
  input.placeholder = "Type your answer...";
  input.className = "builder-input";

  const confirm = document.createElement("div");
  confirm.className = "builder-confirm";
  confirm.textContent = "Continue";

  confirm.onclick = () => {
    if (input.value.trim() !== "") {
      answers.push(input.value.trim());
      nextStep();
    }
  };

  optionsEl.appendChild(input);
  optionsEl.appendChild(confirm);
}

/* ===============================
   NEXT STEP
================================ */
function nextStep() {
  currentStep++;
  if (currentStep < questions.length) {
    renderQuestion();
  } else {
    showGenerating();
  }
}

/* ===============================
   GENERATING PHASE
================================ */
function showGenerating() {
  const card = document.querySelector(".builder-card");
  card.innerHTML = `
    <h2>Designing your website</h2>
    <p class="ai-thinking">
      Creating layout<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>
    </p>
  `;

  setTimeout(() => {
    showResult();
  }, 3000);
}

/* ===============================
   RESULT PHASE
================================ */
function showResult() {
  const card = document.querySelector(".builder-card");
  card.innerHTML = `
    <h2>Your website is ready</h2>
    <p>Based on your answers:</p>
    <ul>
      ${answers.map(a => `<li>${a}</li>`).join("")}
    </ul>
    <div class="primary-btn large">Customize Design</div>
  `;
}

/* ===============================
   INIT
================================ */
renderQuestion();
