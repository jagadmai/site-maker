let step = 1;
const questions = document.querySelectorAll(".question");
const nextBtn = document.getElementById("nextBtn");

document.querySelectorAll(".other").forEach(btn => {
  btn.onclick = () => btn.classList.toggle("active");
});

nextBtn.onclick = () => {
  questions[step - 1].classList.add("hidden");
  step++;
  if (step <= questions.length) {
    questions[step - 1].classList.remove("hidden");
  } else {
    document.getElementById("builder").classList.add("hidden");
    startLoading();
  }
};

function startLoading() {
  const loading = document.getElementById("loading");
  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");
    document.getElementById("website").classList.remove("hidden");
    revealOnScroll();
  }, 3500);
}

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.2 });

  reveals.forEach(r => observer.observe(r));
}

document.querySelectorAll(".templateBtn").forEach(btn => {
  btn.onclick = () => {
    document.querySelector(".hero h1").innerText =
      btn.innerText + " Website";
  };
});
