// Write a Program to reverse a string in JavaScript

function reverseString(str) {
    let reversed = '';

    for(let i = str.length-1; i >= 0; i--){
        reversed += str[i];
    }
    console.log(reversed);
}

reverseString("Hello");