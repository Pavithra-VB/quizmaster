const QUESTIONS = {
  general: [
    { q: "What is the capital of Australia?", opts: ["Sydney", "Melbourne", "Canberra", "Brisbane"], ans: 2 },
    { q: "How many continents are there on Earth?", opts: ["5", "6", "7", "8"], ans: 2 },
    { q: "Which planet is known as the Red Planet?", opts: ["Venus", "Jupiter", "Saturn", "Mars"], ans: 3 },
    { q: "What is the largest ocean on Earth?", opts: ["Atlantic", "Indian", "Arctic", "Pacific"], ans: 3 },
    { q: "Which country is the largest by area?", opts: ["China", "USA", "Russia", "Canada"], ans: 2 },
    { q: "How many sides does a hexagon have?", opts: ["5", "6", "7", "8"], ans: 1 },
    { q: "What gas do plants absorb from the atmosphere?", opts: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], ans: 2 },
    { q: "Which is the longest river in the world?", opts: ["Amazon", "Nile", "Yangtze", "Mississippi"], ans: 1 },
    { q: "What is the smallest country in the world?", opts: ["Monaco", "Nauru", "Vatican City", "San Marino"], ans: 2 },
    { q: "How many bones does an adult human body have?", opts: ["196", "206", "216", "226"], ans: 1 },
  ],
  science: [
    { q: "What is the chemical symbol for Gold?", opts: ["Go", "Gd", "Au", "Ag"], ans: 2 },
    { q: "What is the approximate speed of light?", opts: ["200,000 km/s", "300,000 km/s", "400,000 km/s", "500,000 km/s"], ans: 1 },
    { q: "Which particle has a negative charge?", opts: ["Proton", "Neutron", "Photon", "Electron"], ans: 3 },
    { q: "What is H2O commonly known as?", opts: ["Salt", "Water", "Oxygen", "Hydrogen"], ans: 1 },
    { q: "Which organ produces insulin?", opts: ["Liver", "Kidney", "Pancreas", "Heart"], ans: 2 },
    { q: "What is the hardest natural substance?", opts: ["Gold", "Iron", "Diamond", "Quartz"], ans: 2 },
    { q: "How many chromosomes do humans have?", opts: ["23", "44", "46", "48"], ans: 2 },
    { q: "What force keeps planets in orbit?", opts: ["Magnetism", "Friction", "Gravity", "Nuclear force"], ans: 2 },
    { q: "Most abundant gas in Earth's atmosphere?", opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], ans: 2 },
    { q: "What is the powerhouse of the cell?", opts: ["Nucleus", "Ribosome", "Mitochondria", "Vacuole"], ans: 2 },
  ],
  tech: [
    { q: "What does CPU stand for?", opts: ["Central Process Unit", "Central Processing Unit", "Computer Processing Unit", "Core Processing Unit"], ans: 1 },
    { q: "Which language is used for web styling?", opts: ["HTML", "JavaScript", "CSS", "Python"], ans: 2 },
    { q: "What does HTTP stand for?", opts: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transmission Protocol", "High Text Transfer Protocol"], ans: 0 },
    { q: "Who created the Git version control system?", opts: ["Microsoft", "Google", "Linus Torvalds", "GitHub"], ans: 2 },
    { q: "What does RAM stand for?", opts: ["Random Access Memory", "Read Access Memory", "Rapid Application Memory", "Random Application Module"], ans: 0 },
    { q: "What is Docker used for?", opts: ["Database management", "Containerization", "Version control", "Code editing"], ans: 1 },
    { q: "Which of these is a NoSQL database?", opts: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"], ans: 3 },
    { q: "What does CI/CD stand for?", opts: ["Code Integration/Code Delivery", "Continuous Integration/Continuous Deployment", "Code Integration/Continuous Deployment", "Continuous Improvement/Code Development"], ans: 1 },
    { q: "What does API stand for?", opts: ["Application Programming Interface", "Applied Program Interface", "Application Process Integration", "Automated Program Interface"], ans: 0 },
    { q: "What is GitHub primarily used for?", opts: ["Cloud storage", "Web hosting", "Code repository and collaboration", "Task management"], ans: 2 },
  ],
  history: [
    { q: "In which year did World War II end?", opts: ["1943", "1944", "1945", "1946"], ans: 2 },
    { q: "Who was the first President of the United States?", opts: ["Abraham Lincoln", "Thomas Jefferson", "John Adams", "George Washington"], ans: 3 },
    { q: "Which empire built the Colosseum?", opts: ["Greek", "Ottoman", "Roman", "Byzantine"], ans: 2 },
    { q: "In which year did India gain independence?", opts: ["1945", "1946", "1947", "1948"], ans: 2 },
    { q: "Who invented the telephone?", opts: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"], ans: 1 },
    { q: "Which civilization built the pyramids at Giza?", opts: ["Roman", "Greek", "Mesopotamian", "Ancient Egyptian"], ans: 3 },
    { q: "In which year did the Berlin Wall fall?", opts: ["1987", "1988", "1989", "1990"], ans: 2 },
    { q: "First human to walk on the Moon?", opts: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Alan Shepard"], ans: 2 },
    { q: "First country to grant women the right to vote?", opts: ["USA", "UK", "New Zealand", "Australia"], ans: 2 },
    { q: "Who painted the Mona Lisa?", opts: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"], ans: 2 },
  ]
};

let selectedCat = "general";
let questions = [];
let current = 0;
let score = 0;
let correctCount = 0;
let timerInterval = null;
let timeLeft = 15;
const TOTAL = 10;
const TIME = 15;
const CIRCUMFERENCE = 113.1;

const startScreen  = document.getElementById("start-screen");
const quizScreen   = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedCat = btn.dataset.cat;
  });
});

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("retry-btn").addEventListener("click", startQuiz);
document.getElementById("home-btn").addEventListener("click", goHome);

function showScreen(el) {
  [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove("active"));
  el.classList.add("active");
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  questions = shuffle(QUESTIONS[selectedCat]).slice(0, TOTAL);
  current = 0; score = 0; correctCount = 0;
  showScreen(quizScreen);
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timerInterval);
  const q = questions[current];
  document.getElementById("q-label").textContent = "Question " + (current + 1) + " of " + TOTAL;
  document.getElementById("q-tag").textContent = "Q" + (current + 1);
  document.getElementById("question-text").textContent = q.q;
  document.getElementById("live-score").textContent = score;
  document.getElementById("progress-fill").style.width = ((current / TOTAL) * 100) + "%";
  const list = document.getElementById("options-list");
  list.innerHTML = "";
  const labels = ["A", "B", "C", "D"];
  q.opts.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = '<span class="opt-tag">' + labels[i] + '</span>' + opt;
    btn.addEventListener("click", () => handleAnswer(i, btn));
    list.appendChild(btn);
  });
  startTimer();
}

function startTimer() {
  timeLeft = TIME;
  updateTimerUI();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerUI();
    if (timeLeft <= 0) { clearInterval(timerInterval); handleTimeout(); }
  }, 1000);
}

function updateTimerUI() {
  const circle = document.getElementById("timer-circle");
  const text = document.getElementById("timer-num");
  circle.style.strokeDashoffset = CIRCUMFERENCE * (1 - timeLeft / TIME);
  circle.style.stroke = timeLeft <= 5 ? "#dc3545" : timeLeft <= 9 ? "#fd7e14" : "#3a86ff";
  text.textContent = timeLeft;
  text.style.color = timeLeft <= 5 ? "#dc3545" : "#222";
}

function handleAnswer(idx, clickedBtn) {
  clearInterval(timerInterval);
  const q = questions[current];
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(b => b.disabled = true);
  if (idx === q.ans) { clickedBtn.classList.add("correct"); score += Math.max(10, timeLeft * 7); correctCount++; }
  else { clickedBtn.classList.add("wrong"); allBtns[q.ans].classList.add("correct"); }
  document.getElementById("live-score").textContent = score;
  setTimeout(nextQuestion, 1200);
}

function handleTimeout() {
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(b => b.disabled = true);
  allBtns[questions[current].ans].classList.add("correct");
  setTimeout(nextQuestion, 1200);
}

function nextQuestion() {
  current++;
  if (current >= TOTAL) showResult();
  else loadQuestion();
}

function showResult() {
  showScreen(resultScreen);
  document.getElementById("progress-fill").style.width = "100%";
  const pct = Math.round((correctCount / TOTAL) * 100);
  document.getElementById("score-num").textContent = correctCount;
  document.getElementById("stat-c").textContent = correctCount;
  document.getElementById("stat-w").textContent = TOTAL - correctCount;
  document.getElementById("stat-a").textContent = pct + "%";
  const data =
    correctCount === TOTAL ? ["🏆","Perfect Score!","You got every question right!"] :
    correctCount >= 8      ? ["🎯","Brilliant!","Outstanding result. Almost perfect!"] :
    correctCount >= 6      ? ["👍","Good Job!","Solid performance. Keep practising!"] :
    correctCount >= 4      ? ["📖","Not Bad!","A fair attempt. Try again to improve!"] :
                             ["💡","Keep Going!","Every attempt makes you better!"];
  document.getElementById("result-icon").textContent = data[0];
  document.getElementById("result-heading").textContent = data[1];
  document.getElementById("result-sub").textContent = data[2];
}

function goHome() { showScreen(startScreen); }