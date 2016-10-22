function pintar(cor) {
    document.body.style.background = cor;
}

pintar("blue");

var colorir = (function _colorir(cor) {
    document.body.style.background = cor;

    return _colorir;
})("green");

function exemplo1(textbox) {
    colorir(textbox.value);
}
