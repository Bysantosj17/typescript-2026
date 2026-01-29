"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let obj1 = { id: 2, name: 'juan' };
let obj2 = { lastname: 'Uribe' };
//la propagacion puede sobreescribir las propiedades ya declaradas de un objeto
let obj3 = { edad: 1, ...obj1, ...obj2 };
console.log(obj3);
console.log("obj3: " + JSON.stringify(obj3));
//Las tuplas nos sirven para tipar un arreglo con mayor rigidez
let arreglo1 = [1, 2, 3];
let arreglo2 = [4, 5, 6];
console.log([...arreglo1, ...arreglo2]);
let arreglo3 = ["", 2];
//destructuracion de objetos
let objetoCpmpleto = {
    name: "Uriel",
    age: 24,
    subscrito: true
};
let { name, age, subscrito } = objetoCpmpleto;
age = age + 20;
console.log(name, age, subscrito, objetoCpmpleto);
//Calback
const miCallback = function (texto) {
    console.log("impresion desde callback " + texto);
};
const funcionConCallback = function (texto, callback) {
    console.log("impresion desde funcion " + texto);
    callback(texto);
};
funcionConCallback("hola", miCallback);
//# sourceMappingURL=propagacion.js.map