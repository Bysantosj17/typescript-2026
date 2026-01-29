"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printUseT(item) {
    item.print();
}
printUseT({ print: () => console.log("Hola"), name: "hola", id: 1, description: "hola" });
const test = {
    id: 1,
    print: () => 1
};
const test2 = {
    name: "hola",
    print: () => console.log()
};
const ab = { a: "", c: false };
const record = { c: 1, d: 2 };
//# sourceMappingURL=genericos.js.map