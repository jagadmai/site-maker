const questionText = document.getElementById("questionText");
const optionsEl = document.getElementById("options");
const continueBtn = document.getElementById("continueBtn");
const otherInput = document.getElementById("otherInput");
const otherText = document.getElementById("otherText");
const aiThinking = document.getElementById("aiThinking");
const preview = document.getElementById("preview");

let step = 0;
let selected = null;
const answers = [];

const questions = [
  {
    q: "What type of website do you want to create?",
    o: ["Business", "Portfolio", "Startup", "Blog", "Other"]
  },
  {
    q: "What is the main goal?",
    o: ["Sell", "Show work", "Grow audience", "Inform", "Other"]
  },
  {
    q: "Preferred style?",
    o: ["Minimal", "Bold", "Creative", "Professional", "Other"]
  }
];

loadQuestion();

function loadQuestion() {
  const data = questions[step];
  questionText.textContent = data.q;
  optionsEl.innerHTML = "";
  continueBtn.disabled = true;
  otherInput.style.display = "none";
  otherText.value = "";

  data.o.forEach(opt => {
    const d = document.createElement("div");
    d.className = "option";
    d.textContent = opt;
    d.onclick = () => selectOption(d, opt);
    optionsEl.appendChild(d);
  });
}

function selectOption(el, value) {
  document.querySelectorAll(".option").forEach(o => o.classList.remove("active"));
  el.classList.add("active");
  selected = value;

  if (value === "Other") {
    otherInput.style.display = "block";
    continueBtn.disabled = true;
    otherText.focus();
  } else {
    otherInput.style.display = "none";
    continueBtn.disabled = false;
  }
}

otherText.oninput = () => {
  continueBtn.disabled = otherText.value.trim() === "";
};

continueBtn.onclick = () => {
  answers.push(selected === "Other" ? otherText.value : selected);
  applyPreview(selected);
  step++;

  if (step < questions.length) {
    loadQuestion();
  } else {
    finish();
  }
};

function applyPreview(value) {
  const v = value.toLowerCase();
  if (v.includes("minimal")) preview.classList.add("minimal");
  if (v.includes("bold")) preview.classList.add("bold");
  if (v.includes("creative")) preview.classList.add("creative");
  if (v.includes("business")) preview.classList.add("business");
  if (v.includes("portfolio")) preview.classList.add("portfolio");
  if (v.includes("blog")) preview.classList.add("blog");
}

function finish() {
  optionsEl.style.display = "none";
  continueBtn.style.display = "none";
  otherInput.style.display = "none";
  questionText.textContent = "Building your website with AI";
  aiThinking.style.display = "block";
}
