const questions = [
  {
    text: "What is this website for?",
    options: [
      "Business",
      "Portfolio",
      "Startup",
      "Event",
      "Blog",
      "Online Store",
      "Personal"
    ]
  },
  {
    text: "What is the topic or industry?",
    options: [
      "Technology",
      "Gaming",
      "Education",
      "Fashion",
      "Fitness",
      "Food",
      "Finance"
    ],
    allowText: true
  },
  {
    text: "How should it feel?",
    options: [
      "Minimal",
      "Bold",
      "Futuristic",
      "Elegant",
      "Playful",
      "Professional"
    ]
  },
  {
    text: "Who is this website for?",
    options: [
      "Kids",
      "Teens",
      "Professionals",
      "Everyone"
    ]
  },
  {
    text: "What is the main goal of this website?",
    allowText: true
  }
];

let currentStep = 0;
const answers = {};

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const textInput = document.getElementById("textInput");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");

function renderStep() {
  const step = questions[currentStep];

  // Update question
  questionEl.textContent = step.text;

  // Reset UI
  optionsEl.innerHTML = "";
  textInput.value = "";
  textInput.classList.add("hidden");
  nextBtn.classList.add("hidden");

  // Progress bar
  const progress = ((currentStep + 1) / questions.length) * 100;
  progressBar.style.width = progress + "%";

  // Options
  if (step.options) {
    step.options.forEach(option => {
      const div = document.createElement("div");
      div.className = "option";
      div.textContent = option;

      div.onclick = () => {
        answers[step.text] = option;
        next();
      };

      optionsEl.appendChild(div);
    });
  }

  // Text input
  if (step.allowText) {
    textInput.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  }
}

function next() {
  if (questions[currentStep].allowText) {
    if (!textInput.value.trim()) return;
    answers[questions[currentStep].text] = textInput.value.trim();
  }

  currentStep++;

  if (currentStep < questions.length) {
    renderStep();
  } else {
    generateWebsite();
  }
}

nextBtn.onclick = next;

function generateWebsite() {
  questionEl.textContent = "Creating your website…";
  optionsEl.innerHTML = "";
  textInput.classList.add("hidden");
  nextBtn.classList.add("hidden");
  progressBar.style.width = "100%";

  const messages = [
    "Designing layout…",
    "Choosing colors…",
    "Adding sections…",
    "Applying animations…",
    "Finalizing website…"
  ];

  let i = 0;
  const interval = setInterval(() => {
    questionEl.textContent = messages[i];
    i++;

    if (i === messages.length) {
      clearInterval(interval);
      setTimeout(() => {
        showResult();
      }, 600);
    }
  }, 600);
}

function showResult() {
  questionEl.textContent = "Your AI-generated website is ready 🚀";
  optionsEl.innerHTML = `
    <div class="option">🎨 Customize Theme</div>
    <div class="option">✨ Animations</div>
    <div class="option">🧩 Sections</div>
    <div class="option">🚀 Publish</div>
  `;
}

// INIT
renderStep();
