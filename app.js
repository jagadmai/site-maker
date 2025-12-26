// STEP 1: basic option selection logic

const options = document.querySelectorAll(".option");
const continueBtn = document.getElementById("continueBtn");

let selectedAnswer = null;

options.forEach(option => {
  option.addEventListener("click", () => {

    // remove active from all
    options.forEach(o => o.classList.remove("active"));

    // mark selected
    option.classList.add("active");
    selectedAnswer = option.innerText;

    // enable continue button
    continueBtn.disabled = false;
  });
});
