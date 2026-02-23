import { getQuizQuestion } from "./quiz.js"; // заглушка для викторины
import { DATA } from "./data.js";           // заглушка для данных

const app = document.getElementById("content");

let user = {
  language: null,
};

// Функция для создания кнопки с нужными стилями
function createButton(text, onClick) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.classList.add("button"); // гарантированно применяем CSS
  btn.onclick = onClick;
  return btn;
}

// Главная страница
export function showHome() {
  app.innerHTML = "";
  const btn = createButton("🚀 Начать обучение", showLanguageMenu);
  app.appendChild(btn);
}

// Меню выбора языка
function showLanguageMenu() {
  app.innerHTML = "";
  const languages = ["Python", "C++", "C#", "Dart", "SQL"];
  languages.forEach((lang) => {
    const btn = createButton(lang, () => chooseLanguage(lang));
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
    const btn = createButton(sec.name, sec.action);
    app.appendChild(btn);
  });

  const backBtn = createButton("⬅️ Назад к выбору языка", showLanguageMenu);
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
  const q = getQuizQuestion(user.language); // заглушка вопроса
  app.innerHTML = `<p>🧠 Викторина по ${user.language}</p>
                   <p>${q.question}</p>`;

  q.options.forEach((opt, idx) => {
    const btn = createButton(`${String.fromCharCode(65 + idx)}) ${opt}`, () => {
      alert(`Вы выбрали: ${opt} (правильный: ${q.options[q.correct]})`);
    });
    app.appendChild(btn);
  });

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
  const btn = createButton("⬅️ Назад в разделы", showSectionMenu);
  app.appendChild(btn);
}
