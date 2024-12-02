function createFrame(names) {
    let max = 0;
    let lines = [];
    let frame = "";

    for (let i = 0; i < names.length; i++) {
        if (names[i].length > max) {
            max = names[i].length;
        }
        lines.push(names[i]);
    }

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].length < max) {
            lines[i] = lines[i] + " ".repeat(max - lines[i].length);
        }
        lines[i] = "* " + lines[i] + " *\n";
    }

    max += 4;

    frame = lines.join("");
    frame = "*".repeat(max) + "\n" + frame + "*".repeat(max);

    return frame;
}

console.log(createFrame(["midu", "madeval", "educalvolpz"]));
console.log(createFrame(["midu"]));
console.log(createFrame(["a", "bb", "ccc"]));
