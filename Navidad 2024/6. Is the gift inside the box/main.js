function inBox(box) {
    // Declaramos variables
    let inside = false;
    let leftBorder = false;
    let rightBorder = false;

    // Bucle principal que va a recorrer solamente las capas que pueden contener el regalo
    for (let i = 1; i < box.length - 1; i++) {
        //Reiniciamos las banderas de los bordes
        leftBorder = false;
        rightBorder = false;

        // Bucle para analizar la capa actual del regalo
        for (let j = 0; j < box[i].length; j++) {
            if (box[i][j] === "#" || box[i][j] === "*") {
                // Comprobación para determinar si el caracter es el borde izquierdo
                if (box[i][j] === "#" && leftBorder === false && rightBorder === false) {
                    leftBorder = true;
                    continue;
                }

                // Comprobación para determinar si el regalo está dentro de la caja
                if (box[i][j] === "*" && leftBorder === true && rightBorder === false) {
                    inside = true;
                    break;
                }

                // Comprobación para determinar si el caracter es el borde derecho
                if (box[i][j] === "#" && leftBorder === true) {
                    rightBorder = true;
                }
            }
        }

        // Si se determinó que el regalo está dentro ya no hace falta seguir el bucle
        if (inside === true) {
            break;
        }
    }

    return inside;
}

console.log(inBox(["###", "#*#", "###"]));
console.log(inBox(["####", "#* #", "#  #", "####"]));
console.log(inBox(["#####", "#   #", "#  #*", "#####"]));
console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"]));
