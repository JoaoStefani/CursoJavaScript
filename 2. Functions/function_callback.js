function exemplo1(textbox) {
    escreveBatata(textbox, function () {
        textbox.style.color = "red";
    });
}

function escreveBatata(textbox, callback) {
    setTimeout(function () {
        textbox.value = "Batata";

        if (typeof callback == "function")
            callback();
    }, 2000);
}
