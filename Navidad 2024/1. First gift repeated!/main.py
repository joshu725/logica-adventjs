def prepare_gifts(gifts):
    # Declaramos variables
    allGifts = []
    aux = 0
    n = len(gifts)

    # Bucle que hará el ordenamiento burbuja sencillo
    for i in range(n):
        for j in range(n - 1):
            if gifts[j] > gifts[j + 1]:
                aux = gifts[j]
                gifts[j] = gifts[j + 1]
                gifts[j + 1] = aux

        # Comprobación para agregar el elemento NO repetido al arreglo
        if gifts[i] not in allGifts:
            allGifts.append(gifts[i])

    return allGifts


print(prepare_gifts([]))
