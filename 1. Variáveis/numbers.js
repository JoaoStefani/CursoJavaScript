function convertToInt(textbox) {
    var number = parseInt(textbox.value);
    textbox.value = number;

    console.log(textbox.value);
    console.log(number);
}

function convertToFloat(textbox) {
    var number = parseFloat(textbox.value);
    textbox.value = number;

    console.log(textbox.value);
    console.log(number);
}

function convertToString(textbox) {
    var number = parseInt(textbox.value);
    
    console.log(number);
    console.log(number.toString());
}

function nanInfinity(textbox) {
    var nan = 10 * "a";
    var infinity = 10 / 0;

    textbox.value = nan + " | " + infinity;
}

function toFixed(textbox) {
    var number = parseFloat(textbox.value);
    textbox.value = number.toFixed(2);
}

function toPrecision(textbox) {
    var number = parseFloat(textbox.value);
    textbox.value = number.toPrecision(3);
}

function MAX_VALUE(textbox) {
    textbox.value = Number.MAX_VALUE;
}

function MIN_VALUE(textbox) {
    textbox.value = Number.MIN_VALUE;
}
