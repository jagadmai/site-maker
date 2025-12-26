const hero = document.getElementById("hero");
const flow = document.getElementById("flow");
const preview = document.getElementById("preview");
const question = document.getElementById("question");
const options = document.getElementById("options");
const steps = document.querySelectorAll(".step");

let stepIndex = 0;

const flowData = [
  {
    q: "What is this website for?",
    o: ["Business", "Portfolio", "Blog", "Other"]
  },
  {
    q: "Choose a visual style",
    o: ["Clean", "Colorful", "Creative", "Other"]
  }
];

function startFlow() {
  hero.classList.add("hidden");
  flow.classList.remove("hidden");
  renderStep();
}

function renderStep() {
  steps.forEach((s, i) =>
    s.classList.toggle("active", i === stepIndex)
  );

  question.textContent = flowData[stepIndex].q;
  options.innerHTML = "";

  flowData[stepIndex].o.forEach(text => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = text;

    div.onclick = () => {
      stepIndex++;
      if (stepIndex < flowData.length) {
        renderStep();
      } else {
        flow.classList.add("hidden");
        preview.classList.remove("hidden");
      }
    };

    options.appendChild(div);
  });
}
