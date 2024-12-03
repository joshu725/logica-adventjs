def createFrame(names):
    # Declaramos las variables a usar
    max = 0
    lines = []
    frame = ""
    i = 0
    
    # Bucle para determinar el string con la mayor longitud
    for name in names:
        if len(name) > max:
            max = len(name)
        
        lines.append(name)
    
    # Bucle para modificar cada linea de los nombres y adaptarlo al cuadro
    while i < len(lines):
        if len(lines[i]) < max:
            lines[i] = lines[i] + (" " * (max - len(lines[i])))
        
        lines[i] = "* " + lines[i] + " *\n"
        
        i = i + 1
    
    # Ajustes para el frame
    max += 4
    frame = "".join(lines)
    frame = "*" * max + "\n" + frame + "*" * max
    
    return frame

print(createFrame(['midu', 'madeval', 'educalvolpz']))