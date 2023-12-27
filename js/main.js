let tg = window.Telegram.WebApp;
let buy = document.getElementById("buy");
tg.expand();

buy.addEventListener("click", () => {
    let id = 1;
    tg.sendData(id);
    tg.close();
});

but.oneclick = function() {
    tg.sendData(1);
    tg.close();
}
    