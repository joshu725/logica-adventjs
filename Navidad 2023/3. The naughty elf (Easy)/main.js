function findNaughtyStep(original, modified) {
    let aux = "";
    let stepLength = 0;

    if (original.length >= modified.length) {
        aux = original;
        stepLength = original.length;
    } else {
        aux = modified;
        stepLength = modified.length;
    }

    for (let i = 0; i < stepLength; i++) {
        if (original[i] !== modified[i]) {
            return aux[i];
        }
    }

    return "";
}

console.log(findNaughtyStep("abcd", "abcde")); // e
console.log(findNaughtyStep("abcde", "abcd")); // e
console.log(findNaughtyStep("xxxx", "xxoxx")); // o
console.log(findNaughtyStep("stepfor", "stepor")); // f
console.log(findNaughtyStep("iiiii", "iiiii")); // ""
