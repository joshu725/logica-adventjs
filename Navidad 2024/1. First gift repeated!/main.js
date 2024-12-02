function prepareGifts(gifts) {
    let allGifts = [];
    let aux = 0;

    for (let i = 0; i < gifts.length; i++) {
        if (!allGifts.includes(gifts[i])) {
            allGifts.push(gifts[i]);
        } else {
            continue;
        }
    }

    for (let i = 0; i < allGifts.length; i++) {
        for (let j = 0; j < allGifts.length; j++) {
            if (allGifts[j] > allGifts[j + 1]) {
                aux = allGifts[j];
                allGifts[j] = allGifts[j + 1];
                allGifts[j + 1] = aux;
            }
        }
    }

    return allGifts;
}
