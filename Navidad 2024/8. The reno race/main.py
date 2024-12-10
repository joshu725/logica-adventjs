def draw_race(indices, length):
    # Declaramos las variables a usar
    shifted = len(indices) - 1
    raceTrack = ""

    # Bucle principal que recorre cada reno
    for i in range(0, len(indices)):
        # Se suman los espacios de cada linea para que sea una vista isométrica
        raceTrack += " " * shifted
        # Bucle para recorrer cada caracter de la linea
        for n in range(0, length):
            # Comprobación para los numeros negativos
            if (indices[i] < 0):
                indices[i] += length

            # Comprobaciones para verificar que caracter es camino y cual es reno
            if (n == 0):
                raceTrack += "~"
            elif (n == indices[i]):
                raceTrack += "r"
            else:
                raceTrack += "~"

        # Ajustes finales al camino
        raceTrack += f" /{i + 1}"
        raceTrack += "\n"
        shifted -= 1
    return raceTrack[:-1]


print(draw_race([0, 5, -3], 10))
print(draw_race([2, -1, 0, 5], 8))
print(draw_race([3, 7, -2], 12))
