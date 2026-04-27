function getUniqueValues(
    array1: (string | number)[],
    array2: (string | number)[]
): (string | number)[] {

    const result: (string | number)[] = [];

    const combined = [...array1, ...array2];

    for (let i = 0; i < combined.length; i++) {

        let found = false;

        for (let j = 0; j < result.length; j++) {
            if (combined[i] === result[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            result.push(combined[i]);
        }
    }

    return result;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));