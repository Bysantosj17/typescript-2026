//Enum con  indices por defecto
enum DoorState{
    Open,
    Closed 
}

enum DoorStateSpecificValues{
    Open = 100,
    Closed = 200
}

function printDoorState(state: DoorState) {
    console.log('Valor del Enum ' + state)
    switch (state) {
        case DoorState.Open:
            console.log('La puerta esta abierta')
            break;
        case DoorState.Closed:
            console.log('La puerta esta cerrada')
            break;
    }
}

printDoorState(DoorState.Open)
printDoorState(DoorState.Closed)
