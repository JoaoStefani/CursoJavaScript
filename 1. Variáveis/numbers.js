var string = "Hello Wor...É HORA DO SHOW P*&$%@";
console.log(string);

string = string + ' Aspas "Simples"';
console.log(string);

function convertToInt(textbox) {
    let number = parseInt(textbox.value);
    textbox.value = number;

    console.log(textbox.value);
    console.log(number);
}

function convertToFloat(textbox) {
    let number = parseFloat(textbox.value);
    textbox.value = number;

    console.log(textbox.value);
    console.log(number);
}

function toString(textbox) {
    let number = parseInt(textbox.value);
    
    console.log(number);
    console.log(number.toString());
}

function toExponential(textbox) {
    let number = parseInt(textbox.value);
    textbox.value = Number(number.toExponential(2));
}

function toFixed(textbox) {
    let number = parseFloat(textbox.value);
    textbox.value = number.toFixed(2);
}

function MAX_VALUE(textbox) {
    textbox.value = Number.MAX_VALUE;
}

function MIN_VALUE(textbox) {
    textbox.value = Number.MIN_VALUE;
}
