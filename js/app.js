import { showHome } from "./ui.js";

const tg = window.Telegram.WebApp;

// Расширяем окно Telegram WebApp (если нужно)
tg.expand();
tg.ready();

// Показываем стартовое меню
showHome();
