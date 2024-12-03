function organizeInventory(inventory) {
    // Inicializamos el diccionario principal
    let organized = {};

    // Recorremos en bucle cada elemento con sus claves
    inventory.forEach(({ name, quantity, category }) => {
        // Se crea la categoria en caso de que no esté
        if (!organized[category]) {
            organized[category] = {};
        }
        // Si el diccionario de cada categoria SI tiene al juguete, entonces se suma la cantidad
        if (organized[category][name]) {
            organized[category][name] += quantity;
        // Sino se crea desde 0
        } else {
            organized[category][name] = quantity;
        }
    });

    return organized;
}

const inventary = [
    { name: "doll", quantity: 5, category: "toys" },
    { name: "car", quantity: 3, category: "toys" },
    { name: "ball", quantity: 2, category: "sports" },
    { name: "car", quantity: 2, category: "toys" },
    { name: "racket", quantity: 4, category: "sports" },
];

console.log(organizeInventory(inventary));
