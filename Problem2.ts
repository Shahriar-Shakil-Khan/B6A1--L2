// If the input is a string → return the number of characters.
// If the input is an array → return the number of elements.

import promptSync from "prompt-sync";
const prompt = promptSync();
function getLength(value: string | any[] ){

    if (typeof value === "string") {
        return value.length;
    } 
    else {
        return value.length;
    }
}

const value = prompt('Enter a string or array as you wish :');
const result = value.includes(",") ? value.split(",") : value;
console.log("Length:", getLength(result));