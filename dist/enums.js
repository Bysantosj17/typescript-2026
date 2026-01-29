"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Enum con  indices por defecto
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));
var DoorStateSpecificValues;
(function (DoorStateSpecificValues) {
    DoorStateSpecificValues[DoorStateSpecificValues["Open"] = 100] = "Open";
    DoorStateSpecificValues[DoorStateSpecificValues["Closed"] = 200] = "Closed";
})(DoorStateSpecificValues || (DoorStateSpecificValues = {}));
function printDoorState(state) {
    console.log('Valor del Enum ' + state);
    switch (state) {
        case DoorState.Open:
            console.log('La puerta esta abierta');
            break;
        case DoorState.Closed:
            console.log('La puerta esta cerrada');
            break;
    }
}
printDoorState(DoorState.Open);
printDoorState(DoorState.Closed);
//# sourceMappingURL=enums.js.map