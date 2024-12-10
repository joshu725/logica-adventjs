from typing import List, Literal

def move_train(board: List[str], mov: Literal['U', 'D', 'R', 'L']) -> Literal['none', 'crash', 'eat']:
    # Declaramos las variables
    engine = []
    fruit = []
    carriages = []
    
    # Bucle para identificar donde se encuentran los puntos relevantes en el tablero
    for i in range(0, len(board)):
        for n in range(0, len(board[i])):
            if board[i][n] == "@":
                engine = [i, n]
            elif board[i][n] == "*":
                fruit = [i, n]
            elif board[i][n] == "o":
                carriages.append([i, n])

    # Comprobaciones para mover el engine del tren
    if mov == "U":
        engine[0] -= 1
    elif mov == "D":
        engine[0] += 1
    elif mov == "R":
        engine[1] += 1
    elif mov == "L":
        engine[1] -= 1

    # Comprobaciones para verificar si el engine llegó a una fruta o una pared
    if engine == fruit:
        return "eat"
    elif engine[0] < 0 or engine[0] > len(board[0]) or engine[1] < 0 or engine[1] > len(board):
        return "crash"

    # Bucle para identificar si el tren se chocó con el mismo
    for j in range(0, len(carriages)):
        if (engine == carriages[j]):
            return "crash"

    return "none"

board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]

print(move_train(board, 'U'))
print(move_train(board, 'D'))
print(move_train(board, 'L'))
print(move_train(board, 'R'))
