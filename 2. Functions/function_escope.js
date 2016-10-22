var agentesDaCia = [
    "James “Jim” Phelps",
    "Jason Bourne"
];

function quaisAgentesVoceConhece(textbox1, textbox2) {
    respostaDoAgenteK();
    respostaDoPresidenteDosEUA();
}

function respostaDoAgenteK(textbox1, textbox2) {
    textbox1.value = buscarNomeDosAgentes();

    function buscarNomeDosAgentes(){
        return "Eu, agente K e o agente J que é o Will Smith";
    }
}

function respostaDoPresidenteDosEUA(textbox1, textbox2) {
    textbox1.value = buscarNomeDosAgentes();
}