"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Tipado de funciones
const suma = (num, num1) => {
    return num + num1;
};
console.log(suma(2, 3));
const concatValues = (a, b) => {
    if (b) {
        return a + b;
    }
    return a;
};
const concatWithDefault = (a, b = "default") => {
    return a + b;
};
cosecutivo: 1;
console.log(concatValues("hola ", "mundo"));
console.log(concatWithDefault("hola ", "mundo"));
//# sourceMappingURL=funciones.js.map