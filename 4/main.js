function decode(message) {
    let reversed = "";
    let word = "";
    let wordAux = "";
    let flag = false;

    for (let i = 0; i < message.length; i++) {
        if (message[i] === "(") {
            if (flag === true) {
                wordAux = decode(
                    message.substring(i, message.indexOf(")", i) + 1)
                );
                word += wordAux;
                i += wordAux.length + 1;
            } else {
                flag = true;
            }
            continue;
        }

        if (message[i] === ")") {
            flag = false;
            word = word.split("").reverse().join("");
            reversed += word;
            word = "";
            continue;
        }

        if (flag === true) {
            word += message[i];
        } else {
            reversed += message[i];
        }
    }

    return reversed;
}

console.log(decode('hola (odnum)')) // "hola mundo"
console.log(decode('(olleh) (dlrow)!')) // "hello world!"
console.log(decode('sa(u(cla)atn)s')) // "santaclaus"
console.log(decode('((nta)(sa))')) // "santa"