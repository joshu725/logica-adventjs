function manufacture(gifts, materials) {
    let doGifts = [];
    let seen = [];

    for (let gift of gifts) {
        for (let i = 0; i < gift.length; i++) {
            for (let charMaterials of materials) {
                if (charMaterials === gift[i]) {
                    if (seen.includes(i) === false) {
                        seen.push(i);
                    }
                }
            }
        }

        if (seen.length === gift.length) {
            doGifts.push(gift);
        }

        seen = [];
    }

    return doGifts;
}

console.log(manufacture(['patineta', 'robot', 'libro'], 'nopor')) // []
console.log(manufacture(['tren', 'oso', 'pelota'], 'tronesa')) // ['tren', 'oso']