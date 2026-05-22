let currentIdx = 0;
const slider = document.getElementById("pSlider");
const dots = document.querySelectorAll(".dot");
const tips = [
  "Całka oznaczona to pole pod wykresem funkcji.",
  "Liczba Pi ma nieskończenie wiele rozwinięć.",
  "Suma kątów w trójkącie to zawsze 180°.",
];
let tipIdx = 0;

function changeSlide(dir) {
  currentIdx = (currentIdx + dir + 3) % 3;
  slider.style.transform = `translateY(-${currentIdx * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIdx));
}

function nextTip() {
  const tipEl = document.getElementById("tipText");
  tipEl.style.opacity = 0;
  setTimeout(() => {
    tipIdx = (tipIdx + 1) % tips.length;
    tipEl.innerText = tips[tipIdx];
    tipEl.style.opacity = 1;
  }, 150);
}

function startMatchmaking() {
  document.getElementById("home-screen").classList.add("hidden");
  document.getElementById("loading-screen").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("hidden");
    document.getElementById("match-screen").classList.remove("hidden");

    runTimer();
  }, 1500);
}

function runTimer() {
  let timeLeft = 10;
  const timerEl = document.getElementById("match-timer");
  const searchingEl = document.getElementById("enemy-searching");
  const foundEl = document.getElementById("enemy-found");

  searchingEl.classList.remove("hidden");
  foundEl.classList.add("hidden");

  const interval = setInterval(() => {
    timeLeft--;
    timerEl.innerText = timeLeft + "s";

    if (timeLeft === 3) {
      searchingEl.classList.add("hidden");
      foundEl.classList.remove("hidden");
      foundEl.style.animation = "scaleUp 0.3s ease-out";
    }

    if (timeLeft <= 0) {
      clearInterval(interval);
      timerEl.innerText = "START!";
      timerEl.style.color = "#fff";
    }
  }, 1000);
}
