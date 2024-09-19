function cyberReindeer(road, time) {
    let roads = [];
    let roadArray = [];
    let sled = 0;
    let barrier = false;

    for (let i = 0; i < time; i++) {
        roads.push(road);
        sled = road.indexOf("S");
        roadArray = road.split("");

        if (i === 4) {
            for (let j = 0; j < road.length; j++) {
                if (roadArray[j] === "|") {
                    roadArray[j] = "*";
                }
            }
        }

        if (barrier === true) {
            roadArray[sled] = "*";
            roadArray[sled + 1] = "S";
            barrier = false;
            roadArray = roadArray.join("");
            road = roadArray;
            continue;
        }

        if (roadArray[sled + 1] === "." && barrier === false) {
            roadArray[sled] = ".";
            roadArray[sled + 1] = "S";
        } else if (roadArray[sled + 1] === "*" && barrier === false) {
            roadArray[sled] = ".";
            roadArray[sled + 1] = "S";
            barrier = true;
        }

        roadArray = roadArray.join("");
        road = roadArray;
    }

    return roads;
}

// Pruebas
console.log(cyberReindeer('S..|...|..', 10))
console.log(cyberReindeer('S.|.', 4))
console.log(cyberReindeer('S.|.|.', 7))
console.log(cyberReindeer('S.|..', 6))
console.log(cyberReindeer('S.|.|.|......|.||.........', 8))