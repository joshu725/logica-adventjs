function maxDistance(movements) {
    let distance = 0;
    let auxLeft = 0;
    let auxRight = 0;

    for (let i = 0; i < movements.length; i++) {
        if (movements[i] === "<") {
            distance -= 1;
        } else if (movements[i] === ">") {
            distance += 1;
        } else if (movements[i] === "*") {
            auxLeft -= 1;
            auxRight += 1;
        }
    }

    if (Math.abs(distance + auxLeft) > Math.abs(distance + auxRight)) {
        distance += auxLeft;
    } else {
        distance += auxRight;
    }

    return Math.abs(distance);
}

// Pruebas
console.log(maxDistance(">>*<")); // 2
console.log(maxDistance("<<<<<")); // 5
console.log(maxDistance(">***>")); // 5
console.log(maxDistance("**********")); // 10
console.log(maxDistance("<<**>>")); // 2
