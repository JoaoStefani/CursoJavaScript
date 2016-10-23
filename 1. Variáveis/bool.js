var string = "Hello Wor...É HORA DO SHOW P*&$%@";
console.log(string);

string = string + ' Aspas "Simples"';
console.log(string);

function strings(textbox) {
    textbox.value = !!textbox.value;
}

function numbers(textbox) {
    textbox.value = !!parseInt(textbox.value);
}

function objetos(textbox) {
    textbox.value = !!{} + ' - Um objeto sempre é true';
}

function arrays(textbox) {
    textbox.value = !![] + ' - Um array sempre é true';
}

function functions(textbox) {
    function qualquer_coisa_so_pra_ver_se_e_true_ou_false(){

    }

    textbox.value = !!qualquer_coisa_so_pra_ver_se_e_true_ou_false + ' - Uma function sempre é true';
}

function nulls(textbox) {
    textbox.value = !!null + 'null sempre é false';
}

function undefineds(textbox) {
    textbox.value = !!undefined + 'undefined sempre é false';
}

function operadores(textbox1, textbox2, textbox3, operador) {
    switch(operador){
        case 1:
            textbox3.value = textbox1.value == textbox2.value;
        break;
        case 2:
            textbox3.value = parseInt(textbox1.value) === textbox2.value.toString();
        break;
        case 3:
            textbox3.value = parseInt(textbox1.value) > parseInt(textbox2.value);
        break;
        case 4:
            textbox3.value = parseInt(textbox1.value) >= parseInt(textbox2.value);
        break;
        case 5:
            textbox3.value = parseInt(textbox1.value) < parseInt(textbox2.value);
        break;
        default:
            textbox3.value = parseInt(textbox1.value) <= parseInt(textbox2.value);
        break;
    }
}


