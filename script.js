// === QUIZ ===
const quiz = [
  {
    question: "Which language runs in a web browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    answers: ["Central Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    correct: "Cascading Style Sheets"
  }
];

let quizIndex = 0;

function loadQuestion() {
  const q = quiz[quizIndex];
  document.getElementById('question').innerText = q.question;
  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';
  q.answers.forEach(answer => {
    const btn = document.createElement('button');
    btn.innerText = answer;
    btn.onclick = () => alert(answer === q.correct ? '✅ Correct!' : '❌ Wrong!');
    answersDiv.appendChild(btn);
  });
}

function nextQuestion() {
  quizIndex = (quizIndex + 1) % quiz.length;
  loadQuestion();
}

loadQuestion();

// === CAROUSEL ===
const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1035/600/400",
  "https://picsum.photos/id/1040/600/400",
  "https://picsum.photos/id/1050/600/400"
];

let imgIndex = 0;

function updateImage() {
  document.getElementById('carousel-img').src = images[imgIndex];
}

function nextImage() {
  imgIndex = (imgIndex + 1) % images.length;
  updateImage();
}

function prevImage() {
  imgIndex = (imgIndex - 1 + images.length) % images.length;
  updateImage();
}

// === JOKE FETCH ===
async function getJoke() {
  const jokeDiv = document.getElementById("jokeDisplay");
  jokeDiv.innerText = "Loading... 😂";

  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    jokeDiv.innerHTML = `<p>${data.setup}</p><p><strong>${data.punchline}</strong></p>`;
  } catch (err) {
    jokeDiv.innerText = "😢 Failed to load joke.";
  }
}

// === THEME TOGGLE ===
const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.innerText = document.body.classList.contains('dark')
    ? '🌞 Light Mode'
    : '🌙 Dark Mode';
});

// === BACKGROUND COLOR CYCLE WITH HEADER ===
const bgColors = [
  { body: '#e0f7fa', header: '#03a9f4' },   // Light Blue + Blue
  { body: '#d0f0c0', header: '#66bb6a' },   // Pista + Green
  { body: '#ffe4e1', header: '#ec407a' },   // Rose + Pink
  {body: '#fff3e0', header: '#ff9800' },   // Apricot + Orange
  { body: '#e1bee7', header: '#9c27b0' },   // Lavender + Purple
  { body: '#dcedc8', header: '#8bc34a' },   // Pale Green + Lime
  { body: '#c5cae9', header: '#3f51b5' },   // Light Indigo + Indigo
    { body: '#fbe9e7', header: '#ff7043' },   // Peach + Deep Orange
];

let currentColorIndex = 0;

setInterval(() => {
  if (!document.body.classList.contains('dark')) {
    const color = bgColors[currentColorIndex];
    document.body.style.backgroundColor = color.body;
    document.querySelector('header').style.backgroundColor = color.header;
    currentColorIndex = (currentColorIndex + 1) % bgColors.length;
  }
}, 3000);
