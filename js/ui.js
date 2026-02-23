// ui.js
import { PYTHON_Q } from "../data/python_questions.js"; // аналогично остальные языки

const LANGUAGES = {
  Python: { q: PYTHON_Q },
  // C++, C#, Dart, SQL — аналогично
};

let user = {
  language: null,
  quiz_index: 0,
  score: {},
  read_articles: [],
};

const app = document.getElementById("content");

export function showHome() {
  app.innerHTML = "";
  const btn = document.createElement("button");
  btn.textContent = "🚀 Начать обучение";
  btn.onclick = showLanguageMenu;
  app.appendChild(btn);
}

function showLanguageMenu() {
  app.innerHTML = "";
  Object.keys(LANGUAGES).forEach((lang) => {
    const btn = document.createElement("button");
    btn.textContent = lang;
    btn.onclick = () => chooseLanguage(lang);
    app.appendChild(btn);
  });
}

function chooseLanguage(lang) {
  user.language = lang;
  user.quiz_index = 0;
  showSectionMenu();
}

function showSectionMenu() {
  app.innerHTML = "";

  const sections = [
    { name: "📘 Теория", action: showTheory },
    { name: "💻 Практика", action: showPractice },
    { name: "🧠 Викторина", action: showQuiz },
    { name: "🔥 Челлендж", action: showChallenge },
    { name: "📊 Прогресс", action: showProgress },
  ];

  sections.forEach((sec) => {
    const btn = document.createElement("button");
    btn.textContent = sec.name;
    btn.onclick = sec.action;
    app.appendChild(btn);
  });
}

// Примеры функций
function showTheory() {
  app.innerHTML = "<p>Список статей пока заглушка</p>";
}

function showPractice() {
  app.innerHTML = "<p>Практические задания пока заглушка</p>";
}

function showQuiz() {
  app.innerHTML = "<p>Викторина пока заглушка</p>";
}

function showChallenge() {
  app.innerHTML = "<p>Челлендж пока заглушка</p>";
}

function showProgress() {
  app.innerHTML = "<p>Прогресс пользователя пока заглушка</p>";
}
