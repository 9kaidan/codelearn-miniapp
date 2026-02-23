async function sendDataToBot(data) {
    Telegram.WebApp.sendData(JSON.stringify(data));
}
