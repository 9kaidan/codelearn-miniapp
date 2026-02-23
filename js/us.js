import { languages } from "./data.js";
import { startQuiz } from "./quiz.js";

const content = document.getElementById("content");

export function showHome() {
    content.innerHTML = "";

    languages.forEach(lang => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${lang.icon} ${lang.name}</h3>
            <p>Начни изучение прямо сейчас</p>
        `;
        card.onclick = () => startQuiz(lang.name);
        content.appendChild(card);
    });
}
