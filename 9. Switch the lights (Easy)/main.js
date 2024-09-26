function adjustLights(lights) {
    // Variables auxiliares para contar los cambios
    let n = 0;
    let a = 0;
    // Se copia el arreglo
    let backupLights = [...lights];

    // Bucle para recorrer el arreglo de izquierda a derecha
    for (let i = 0; i < lights.length - 1; i++) {
        if (lights[i] === "🟢") {
            if (lights[i + 1] !== "🔴") {
                lights[i + 1] = "🔴";
                n++;
            }
        } else {
            if (lights[i + 1] !== "🟢") {
                lights[i + 1] = "🟢";
                n++;
            }
        }
    }

    // Bucle para recorrer el arreglo de derecha a izquierda
    for (let i = backupLights.length - 1; i > 0; i--) {
        if (backupLights[i] === "🟢") {
            if (backupLights[i - 1] !== "🔴") {
                backupLights[i - 1] = "🔴";
                a++;
            }
        } else {
            if (backupLights[i - 1] !== "🟢") {
                backupLights[i - 1] = "🟢";
                a++;
            }
        }
    }

    return Math.min(n, a);
}

// Pruebas
console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])); // 1
console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])); // 2
console.log(adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"])); // 1
console.log(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])); // 0
console.log(adjustLights(["🔴", "🔴", "🔴"])); // 1
