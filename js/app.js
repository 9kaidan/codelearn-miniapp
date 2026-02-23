import { showHome } from "./ui.js";

const tg = window.Telegram.WebApp;

tg.expand();
tg.ready();

showHome();
