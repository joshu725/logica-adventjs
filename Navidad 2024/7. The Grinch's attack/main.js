function fixPackages(packages) {
    // Declaramos la pila a utilizar
    const stack = [];
    // Bucle principal que recorre cada caracter del paquete
    for (const char of packages) {
        // Se comprueba que el caracter sea un cierre de paréntesis
        if (char === ")") {
            // Si encontramos un cierre de paréntesis creamos una cadena temporal donde darémos vuelta al texto
            let temp = "";
            // Bucle que se repite hasta encontrar una abertura de paréntesis
            while (stack.length && stack[stack.length - 1] !== "(") {
                // Tomamos los caracteres dentro de los paréntesis y los metemos por el orden de una pila (primero el ultimo)
                temp += stack.pop();
            }
            // Quitamos el '(' de la pila
            stack.pop();
            // Revertimos el contenido y lo añadimos de nuevo a la pila
            for (const reversedChar of temp) {
                stack.push(reversedChar);
            }
        } else {
            // Si no es un cierre, añadimos el carácter a la pila
            stack.push(char);
        }
    }
    // Convertimos la pila en un string final
    return stack.join("");
}

console.log(fixPackages("a(cb)de"));
console.log(fixPackages("a(bc(def)g)h"));
console.log(fixPackages("abc(def(gh)i)jk"));
console.log(fixPackages("a(b(c))e"));
