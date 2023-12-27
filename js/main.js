let tg = window.Telegram.WebApp;
let buy = document.getElementById("buy");
let order = document.getElementById("order");
tg.expand();

buy.addEventListener("click", () => {
    let product_id = document.getElementById("product_id").value;
    tg.sendData(product_id);
    tg.close();
});
    