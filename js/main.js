let tg= window.Telegram.WebApp;
let buy = document.getElementById("buy");
let order = document.getElementById("order");

buy.addEventListener("click", () => {
    document.getElementById("main").style.display="none";
    document.getElementById("form").style.display="block";
    document.getElementById("user_name").value=tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name;
    });
order.addEventListener("click", () => {
    let name = document.getElementById("user_name").value;
    let email = document.getElementById("user_email").value;
    let phone = document.getElementById("user_phone").value;
    if(name.lenght <= 1) {
        document.getElementById("error").innerText = "Ismda xato";
        return;
    }
    if(email.lenght <= 6) {
        document.getElementById("error").innerText = "emailda xato";
        return;
    }
    if(phone.lenght < 8) {
        document.getElementById("error").innerTExt = "Raqamda xato";
        return;
    }

    tg.close()}
    );