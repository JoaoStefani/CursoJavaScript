var objeto = {};

function add(textbox1, textbox2) {
    objeto[textbox1.value] = textbox2.value;
    console.clear();
    console.log(objeto);
}

function get(textbox) {
    textbox.value = objeto[textbox.value];
}

function del(textbox) {
    delete objeto[textbox.value];
    console.clear();
    console.log(objeto);
}

function keys(textbox){
    textbox.value = Object.keys(objeto);
}
