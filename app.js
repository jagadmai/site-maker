const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("options");
const continueBtn = document.getElementById("continueBtn");
const otherInput = document.getElementById("otherInput");
const otherText = document.getElementById("otherText");
const aiThinking = document.getElementById("aiThinking");
const preview = document.querySelector(".preview");

let currentQuestion = 0;
let selectedValue = null;
const answers = {};

// ALL QUESTIONS (you can add more later)
const questions = [
  {
    text: "What type of website do you want to create?",
    options: ["Business", "Portfolio", "Startup", "Blog", "Other"]
  },
  {
    text: "What is the main purpose of your website?",
    options: ["Sell products", "Show work", "Grow audience", "Share info", "Other"]
  },
  {
    text: "Who is your target audience?",
    options: ["Students", "Professionals", "Creators", "Everyone", "Other"]
  },
  {
    text: "What style do you prefer?",
    options: ["Minimal", "Bold", "Creative", "Professional", "Other"]
  }
];

// INITIAL LOAD
renderQuestion();

// FUNCTIONS

function renderQuestion() {
  const q = questions[currentQuestion];

  // reset state
  selectedValue = null;
  continueBtn.disabled = true;
  otherInput.style.display = "none";
  otherText.value = "";

  // animate out
  questionText.style.opacity = 0;
  optionsContainer.style.opacity = 0;

  setTimeout(() => {
    // update text
    questionText.innerText = q.text;

    // rebuild options
    optionsContainer.innerHTML = "";
    q.options.forEach(opt => {
      const div = document.createElement("div");
      div.className = "option";
      div.innerText = opt;

      div.addEventListener("click", () => handleOptionClick(div, opt));
      optionsContainer.appendChild(div);
    });

    // animate in
    questionText.style.opacity = 1;
    optionsContainer.style.opacity = 1;
  }, 300);
}

function handleOptionClick(element, value) {
  document.querySelectorAll(".option").forEach(o => o.classList.remove("active"));
  element.classList.add("active");
  selectedValue = value;

  if (value === "Other") {
    otherInput.style.display = "block";
    continueBtn.disabled = true;
    otherText.focus();
  } else {
    otherInput.style.display = "none";
    continueBtn.disabled = false;
  }
}

otherText.addEventListener("input", () => {
  continueBtn.disabled = otherText.value.trim() === "";
});

continueBtn.addEventListener("click", () => {
  // save answer
  answers[currentQuestion] = selectedValue === "Other"
    ? otherText.value.trim()
    : selectedValue;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    startAIThinking();
  }
});

function startAIThinking() {
  optionsContainer.style.display = "none";
  continueBtn.style.display = "none";
  otherInput.style.display = "none";
  questionText.innerText = "Building your website with AI";
  aiThinking.style.display = "block";
}
