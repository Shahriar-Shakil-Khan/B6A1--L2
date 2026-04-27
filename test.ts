import promptSync from "prompt-sync";
const prompt = promptSync();

function formatValue(): string | number | boolean {
    const value = prompt('Enter a value string or number or boolean as you wish :');

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