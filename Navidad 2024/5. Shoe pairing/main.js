function organizeShoes(shoes) {
    // Declaramos variables
    let pairs = [];
    let flags = [];

    // Bucle para llenar la lista de banderas de cada zapato
    for (let n of shoes) {
        flags.push("o");
    }

    // Bucle principal para recorrer cada zapato y compararlo con los demás zapatos
    for (let i = 0; i < shoes.length; i++) {
        for (let j = 0; j < shoes.length; j++) {
            // Si el zapato principal que se está comparando, ya tiene pareja, entonces se cancela su comparacion
            if (flags[i] === "x") {
                break;
            }

            // Si el par analizado ya tiene pareja, no se analiza y se compara con el siguiente
            if (flags[j] === "x") {
                continue;
            }

            // Se comprueba que ambos zapatos sean del mismo tamaño
            if (shoes[i].size === shoes[j].size) {
                // Se comprueba que ambos zapatos sean par
                if (shoes[i].type === "I") {
                    if (shoes[j].type === "R") {
                        flags[i] = "x";
                        flags[j] = "x";
                        pairs.push(shoes[i].size);
                        break;
                    }
                } else if (shoes[i].type === "R") {
                    if (shoes[j].type === "I") {
                        flags[i] = "x";
                        flags[j] = "x";
                        pairs.push(shoes[i].size);
                        break;
                    }
                }
            }
        }
    }

    return pairs;
}

const shoes = [
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 42 },
];

console.log(organizeShoes(shoes));
// [38, 42]

const shoes2 = [
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "I", size: 38 },
    { type: "I", size: 38 },
    { type: "R", size: 38 },
];

console.log(organizeShoes(shoes2));
// [38, 38]

const shoes3 = [
    { type: "I", size: 38 },
    { type: "R", size: 36 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 43 },
];

console.log(organizeShoes(shoes3));
// []
