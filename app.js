const options = document.querySelectorAll(".option");
const continueBtn = document.getElementById("continueBtn");
const otherInput = document.getElementById("otherInput");
const otherText = document.getElementById("otherText");
const aiThinking = document.getElementById("aiThinking");

let selectedValue = null;

options.forEach(option => {
  option.addEventListener("click", () => {

    options.forEach(o => o.classList.remove("active"));
    option.classList.add("active");

    selectedValue = option.innerText;

    if (selectedValue === "Other") {
      otherInput.style.display = "block";
      otherText.focus();
      continueBtn.disabled = true;
    } else {
      otherInput.style.display = "none";
      continueBtn.disabled = false;
    }
  });
});

otherText.addEventListener("input", () => {
  continueBtn.disabled = otherText.value.trim() === "";
});

continueBtn.addEventListener("click", () => {

  aiThinking.style.display = "block";
  continueBtn.disabled = true;

  setTimeout(() => {
    aiThinking.style.display = "none";
    alert("AI finished generating a sample website ✨ (next step)");
  }, 5000);
});
