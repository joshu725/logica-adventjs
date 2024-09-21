function drawGift(size, symbol) {
    let gift = "";
    let line = "";
    let space = "";
    let border = "";
    let symbolRight = "";

    let centerPassed = false;
    let aux = 0;

    for (let i = 0; i < size + size - 1; i++) {
        // Reinicio de variables
        line = "";
        space = "";
        border = "";
        symbolRight = "";

        // Espacios
        if (size - (i + 1) > 0) {
            space = " ".repeat(size - (i + 1));
        }

        // Bordes
        if (i === 0) {
            // Inicio
            border = "#".repeat(size);
        } else if (i === size - 1) {
            // Centro
            border = "#".repeat(size + 1);

            if (size >= 2) {
                symbolRight = symbol.repeat(size - 2);
                centerPassed = true;
            }
        } else if (i === size + size - 2) {
            // Final
            border = "#".repeat(size);
        } else {
            border = "#".repeat(3);
            border = border
                .slice(0, 1)
                .concat(symbol.repeat(size - 2), border.slice(1));

            if (i > 1 && i < size + size - 3) {
                symbolRight = symbol.repeat(i - 1);
                if (centerPassed === true) {
                    aux += 2;
                    symbolRight = symbolRight.slice(
                        0,
                        symbolRight.length - aux
                    );
                }
            }
        }

        // Unión de variables
        line = space + border + "\n";

        line = line
            .slice(0, line.length - 2)
            .concat(symbolRight, line.slice(line.length - 2));

        gift += line;
    }

    return gift;
}

// Pruebas
console.log(drawGift(4, "+"));
console.log(drawGift(5, "*"));
console.log(drawGift(1, "^"));
console.log(drawGift(2, "&"));
console.log(drawGift(10, "%"));
