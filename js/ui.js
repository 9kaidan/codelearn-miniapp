import { getQuizQuestion } from "./quiz.js"; // Заглушка для викторины
import { DATA } from "./data.js";           // Заглушка для вопросов и статей

const app = document.getElementById("content");

let user = {
  language: null,
};

// Главная страница
export function showHome() {
  app.innerHTML = "";
  const btn = document.createElement("button");
  btn.textContent = "🚀 Начать обучение";
  btn.onclick = showLanguageMenu;
  app.appendChild(btn);
}

// Выбор языка
function showLanguageMenu() {
  app.innerHTML = "";
  const languages = ["Python", "C++", "C#", "Dart", "SQL"];
  languages.forEach((lang) => {
    const btn = document.createElement("button");
    btn.textContent = lang;
    btn.onclick = () => chooseLanguage(lang);
    app.appendChild(btn);
  });
}

// Выбор языка
function chooseLanguage(lang) {
  user.language = lang;
  showSectionMenu();
}

// Меню разделов
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

  const backBtn = document.createElement("button");
  backBtn.textContent = "⬅️ Назад к выбору языка";
  backBtn.onclick = showLanguageMenu;
  app.appendChild(backBtn);
}

// Разделы (пока заглушки)
function showTheory() {
  app.innerHTML = `<p>📘 Теория по ${user.language} — пока заглушка</p>`;
  addBackToSection();
}

function showPractice() {
  app.innerHTML = `<p>💻 Практика по ${user.language} — пока заглушка</p>`;
  addBackToSection();
}

function showQuiz() {
  app.innerHTML = `<p>🧠 Викторина по ${user.language} — пока заглушка</p>`;
  addBackToSection();
}

function showChallenge() {
  app.innerHTML = `<p>🔥 Челлендж по ${user.language} — пока заглушка</p>`;
  addBackToSection();
}

function showProgress() {
  app.innerHTML = `<p>📊 Прогресс по ${user.language} — пока заглушка</p>`;
  addBackToSection();
}

// Кнопка "Назад в меню разделов"
function addBackToSection() {
  const btn = document.createElement("button");
  btn.textContent = "⬅️ Назад в разделы";
  btn.onclick = showSectionMenu;
  app.appendChild(btn);
}
