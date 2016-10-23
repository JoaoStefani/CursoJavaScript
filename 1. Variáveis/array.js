var array = [];

function length(textbox1) {
    textbox1.value = array.length;
}

function push(textbox) {
    array.push(textbox.value);
    console.clear();
    console.log(array);
}

function pop(textbox) {
    textbox.value = array.pop();
    console.clear();
    console.log(array);
}

function unshift(textbox) {
    array.unshift(textbox.value);
    console.clear();
    console.log(array);
}

function shift(textbox) {
    textbox.value = array.shift();
    console.clear();
    console.log(array);
}

function splice(textbox1, textbox2) {
    console.clear();
    console.log(array);
    array.splice(parseInt(textbox1.value), parseInt(textbox2.value));
    console.log(array);
}

function concat(textbox) {
    console.clear();
    console.log(array);
    array = array.concat(textbox.value.split(','));
    console.log(array);
    textbox.value = array.toString();
}

function slice(textbox1, textbox2) {
    console.clear();
    console.log(array);
    console.log(array.slice(parseInt(textbox1.value), parseInt(textbox2.value)));
}

function loop(textbox) {
    for(var i = 0; i < array.length; i++){
        array[i] = array[i] + array[i]; 
    }

    console.clear();
    console.log(array);
}
