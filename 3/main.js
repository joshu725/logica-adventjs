function findNaughtyStep(original, modified) {
    let aux = "";

    if (original.length >= modified.length) {
        aux = original;
        for (let i = 0; i < original.length; i++) {
            if (original[i] !== modified[i]) {
                return aux[i];
            }
        }
    } else {
        aux = modified;
        for (let i = 0; i < modified.length; i++) {
            if (original[i] !== modified[i]) {
                return aux[i];
            }
        }
    }

    return "";
}

console.log(findNaughtyStep('abcd', 'abcde')); // e
console.log(findNaughtyStep('abcde', 'abcd')); // e
console.log(findNaughtyStep('xxxx', 'xxoxx')); // o
console.log(findNaughtyStep('stepfor', 'stepor')); // f
console.log(findNaughtyStep('iiiii', 'iiiii')); // ""
