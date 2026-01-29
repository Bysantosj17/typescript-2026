"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    //id: number | undefined;
    id;
    constructor(id) {
        this.id = id;
    }
    print() {
        console.log("imprimiendo " + this.id);
    }
}
class Gerente {
    print() {
        console.log("Gerente esta imprimiendo...");
    }
}
const persona = new Persona(10);
//persona.id = 1
persona.print();
function imprimir(obj) {
    obj.print();
}
const gerente = new Gerente();
imprimir(persona);
imprimir(gerente);
//# sourceMappingURL=clases.js.map