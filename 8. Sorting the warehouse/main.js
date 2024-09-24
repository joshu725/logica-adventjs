function organizeGifts(gifts) {
    // Variables
    let result = "";
    let i = 0;

    // Bucle principal
    while (i < gifts.length) {
        // Numeros de regalos para cada tipo
        let numGifts = "";

        // Bucle en el que se obtienen los numeros de un mismo tipo
        while (gifts[i] >= "0" && gifts[i] <= "9") {
            numGifts += gifts[i];
            i++;
        }

        // Se obtiene el tipo de los regalos
        let typeGift = gifts[i];
        i++;

        // Se convierte el numero de regalos a un contador en entero
        let countGifts = parseInt(numGifts);

        // Una vez teniendo en entero los regalos, podemos trabajar con ellos

        // Se obtiene la cantidad de pallets (contiene 50 regalos)
        const pallets = Math.floor(countGifts / 50);
        // Cantidad sobrante despues de los pallets
        const remainingAfterPallets = countGifts % 50;
        // Se obtiene la cantidad de cajas (contiene 10 regalos)
        const boxes = Math.floor(remainingAfterPallets / 10);
        // Cantidad sobrante despues de las cajas
        const remainingAfterBoxes = remainingAfterPallets % 10;

        // Se añaden los pallets al resultado
        for (let j = 0; j < pallets; j++) {
            result += `[${typeGift}]`;
        }

        // Se añaden las cajas al resultado
        for (let j = 0; j < boxes; j++) {
            result += `{${typeGift}}`;
        }

        // Se añaden los regalos restantes en una bolsa
        if (remainingAfterBoxes > 0) {
            result += `(${typeGift.repeat(remainingAfterBoxes)})`;
        }
    }

    return result;
}

// Pruebas
console.log(organizeGifts("76a11b")); // "[a]{a}{a}(aaaaaa){b}(b)"
console.log(organizeGifts("20a")); // "{a}{a}"
console.log(organizeGifts("70b120a4c")); // "[b]{b}{b}[a][a]{a}{a}(cccc)"
console.log(organizeGifts("9c")); // "(ccccccccc)"
console.log(organizeGifts("19d51e")); // "{d}(ddddddddd)[e](e)"
