function exemplo1(textbox) {
    textbox.value = Soma(5, 5, 2, 3, 4, 5, 10, 535623, 122, "batata", 2);
}

function Soma(numero1, numero2) {
    return numero1 + numero2;

    //Utilizando arguments
    var total = 0;
    for (var i = 0; i < arguments.length; i++)
        total += parseInt(arguments[i]) || 0;

    return total;
}

// -----------------------------------------------

function exemplo2(textbox) {
    textbox.value = Concatenar("Nome", "Batata", "Sobrenome");
}

function Concatenar(palavra1, palavra2) {
    return palavra1 + " " + palavra2;

    //Utilizando arguments
    var total = "";
    for (var i = 0; i < arguments.length; i++)
        total += arguments[i] + " ";

    return total.trim();
}
