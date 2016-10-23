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









var variavelGlobal = 'eu sou vista em todas as funções'

function escopoFuncao1(){
    var variavel1 = 'eu sou vista somente dentro desse escopo';

    function escopoFuncao2(){
        //EU CONSIGO VER A variavel1 por que estou dentro do escopo da função 1
        var variavel2 = 'eu sou vista somente dentro do escopo da função 2';
    }

    //EU NÃO CONSIGO VER A variavel2
}

function escopoFuncao3(){
    //EU NÃO VEJO NEM A variavel1 NEM A variavel2
}

