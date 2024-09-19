function findFirstRepeated(gifts) {
    let minorIndex = gifts.length - 1;
    let flag = false;

    for (let i = 0; i < gifts.length; i++) {
        for (let j = i + 1; j < gifts.length; j++) {
            if (gifts[i] === gifts[j]) {
                if (j <= minorIndex) {
                    minorIndex = j;
                    flag = true;
                }
                break;
            }
        }
    }

    if (flag === true) {
        return gifts[minorIndex];
    }

    return -1;
}

console.log(findFirstRepeated([2, 1, 3, 5, 3, 2])); // 3
console.log(findFirstRepeated([2, 3, 4, 5])); // -1
console.log(findFirstRepeated([2, 3, 2, 5])); // 2
console.log(findFirstRepeated([2, 2])); // 2
console.log(findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])); // 1
