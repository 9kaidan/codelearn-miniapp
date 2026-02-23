let current = 0;
let score = 0;

const questions = [
  {
    question: "Как вывести текст в Python?",
    options: ["echo()", "print()", "cout<<", "Console.WriteLine()"],
    correct: 1
  },
  {
    question: "Какой тип у 3.14?",
    options: ["int", "float", "str", "bool"],
    correct: 1
  }
];

export function startQuiz(lang) {
    current = 0;
    score = 0;
    renderQuestion(lang);
}

function renderQuestion(lang) {
    const content = document.getElementById("content");

    if (current >= questions.length) {
        content.innerHTML = `
            <h2>Результат: ${score}/${questions.length}</h2>
            <button onclick="location.reload()">В меню</button>
        `;
        return;
    }

    const q = questions[current];

    content.innerHTML = `
        <h2>${lang}</h2>
        <p>${q.question}</p>
        <div id="answers"></div>
        <div class="progress-bar">
            <div class="progress-fill" style="width:${(current/questions.length)*100}%"></div>
        </div>
    `;

    const answers = document.getElementById("answers");

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index, lang);
        answers.appendChild(btn);
    });
}

function checkAnswer(index, lang) {
    if (index === questions[current].correct) {
        score++;
    }
    current++;
    renderQuestion(lang);
}
