// If the input is a string → return the string in uppercase
// If the input is a number → return the number multiplied by 10
// If the input is a boolean → return the opposite value

import promptSync from "prompt-sync";
const prompt = promptSync();
const value = prompt('Enter a value string or number or boolean as you wish :');

function formatValue(): string | number | boolean {
    

    if (value === "true") {
        return false;
    } 
    else if (value === "false") {
        return true;
    } 
    else if (!isNaN(Number(value)) && value !== '') {
        return Number(value) * 10;
    } 
    else {
        return value.toUpperCase();
    }
}
const answer = formatValue();
console.log('Answer:', answer);