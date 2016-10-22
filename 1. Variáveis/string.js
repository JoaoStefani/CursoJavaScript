var string = "Hello Wor...É HORA DO SHOW P*&$%@";
console.log(string);

string = string + ' Aspas "Simples"';
console.log(string);

function length(textbox) {
    textbox.value = textbox.value.length;
}

function toUpperCase(textbox) {
    textbox.value = textbox.value.toUpperCase();
}

function toLowerCase(textbox) {
    textbox.value = textbox.value.toLowerCase();
}

function replace(textbox) {
    textbox.value = textbox.value.replace("a", "");
}

function replaceAll(textbox) {
    textbox.value = textbox.value.replace(/[a]+/g, "");
}

function trim(textbox) {
    textbox.value = textbox.value.trim();
}

function split(textbox) {
    var textboxSplit = textbox.value.split(" ");
    console.log(textboxSplit);
}

function startsWith(textbox) {
    textbox.value = textbox.value.startsWith("Ba");
}

function endsWith(textbox) {
    textbox.value = textbox.value.endsWith("Ba");
}

function repeat(textbox) {
    textbox.value = textbox.value.repeat(3);
}

function substring(textbox) {
    textbox.value = textbox.value.substring(2, 4);
    //textbox.value = textbox.value.substring(textbox.value.length / 2, textbox.value.length);
}

function substr(textbox) {
    textbox.value = textbox.value.substr(0, textbox.value.length / 2);
}
