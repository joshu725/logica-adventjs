function createXmasTree(height, ornament) {
    // Declaramos variables
    let tree = "";
    let aux = 0;

    // Bucle principal para las hojas del arbol
    for (let i = 0; i < height; i++) {
        if (i === 0) {
            tree += "_".repeat(height - i - 1) + ornament + "_".repeat(height - i - 1) + "\n";
        } else {
            tree += "_".repeat(height - i - 1) + ornament.repeat(i + 1 + aux) + "_".repeat(height - i - 1) + "\n";
        }

        // Auxiliar para determinar correctamente la cantidad de _
        aux++;
    }

    // Tronco del arbol
    tree += "_".repeat(height - 1) + "#" + "_".repeat(height - 1) + "\n";
    tree += "_".repeat(height - 1) + "#" + "_".repeat(height - 1);

    return tree;
}

console.log(createXmasTree(5, "*"));
console.log(createXmasTree(3, "+"));
console.log(createXmasTree(6, "@"));
