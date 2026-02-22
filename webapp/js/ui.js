const content = document.getElementById("content");

function showMainMenu() {
    content.innerHTML = `
        <button onclick="showLanguages()">Выбрать язык</button>
        <button onclick="showProgress()">Прогресс</button>
        <button onclick="closeApp()">Закрыть</button>
    `;
}

function showLanguages() {
    content.innerHTML = `
        <button onclick="selectLang('Python')">Python</button>
        <button onclick="selectLang('C++')">C++</button>
        <button onclick="selectLang('C#')">C#</button>
        <button onclick="selectLang('Dart')">Dart</button>
        <button onclick="selectLang('SQL')">SQL</button>
        <button onclick="showMainMenu()">Назад</button>
    `;
}

function selectLang(lang) {
    content.innerHTML = `
        <h2>${lang}</h2>
        <button onclick="startQuiz('${lang}')">Начать тест</button>
        <button onclick="showMainMenu()">Назад</button>
    `;
}

function startQuiz(lang) {
    content.innerHTML = `
        <h2>Тест по ${lang}</h2>
        <p>Здесь будет логика тестирования</p>
        <button onclick="showMainMenu()">В меню</button>
    `;
}

function showProgress() {
    content.innerHTML = `
        <h2>Твой прогресс</h2>
        <p>Здесь будет статистика</p>
        <button onclick="showMainMenu()">Назад</button>
    `;
}

function closeApp() {
    Telegram.WebApp.close();
}

showMainMenu();