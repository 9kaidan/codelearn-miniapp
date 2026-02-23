import { showHome } from "./ui.js";

// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();
tg.ready();

showHome();
