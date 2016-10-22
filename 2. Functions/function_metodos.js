function exemplo1(textbox) {
    textbox.value = removeAcentos(textbox.value);
}

function exemplo2(textbox) {
    textbox.value = removeAcentos(textbox.value);
    textbox.value = inverteString(textbox.value);
}

// -----------------------------------------------------

function removeAcentos(value) {
    if (!value) return "";

    var retorno = "";
    for (var i = 0; i < value.length; i++) {
        var index = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ".indexOf(value[i]);
        retorno += index >= 0 ? "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC"[index] : value[i];
    }

    return retorno;
}

function inverteString(value) {
    var retorno = "";

    for (var i = value.length - 1; i >= 0; i--)
        retorno += value[i];

    return retorno;
}
