"use strict";
//Expreciones condiciones
Object.defineProperty(exports, "__esModule", { value: true });
const numero = 11;
const mensaje = numero > 10 ? 'Es mayor que 10' : 'es menor que 10';
console.log(mensaje);
//Coalescentes nulo
function comprobarSiEsNuloIndefinido(a) {
    const valor = a ?? 'indifinido o nulo';
    console.log('a es: ' + valor);
}
comprobarSiEsNuloIndefinido('Hola');
comprobarSiEsNuloIndefinido(null);
comprobarSiEsNuloIndefinido(undefined);
//No es recomendable usarla solo cuando se trata de migrar algun proyecto o utilizar una libreria ->
//hecha con ts
let random = 1;
console.log(random);
random = 'texto';
//# sourceMappingURL=condiciones.js.map