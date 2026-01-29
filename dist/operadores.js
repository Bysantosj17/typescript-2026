"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDescrOrName(obj) {
    if ("id" in obj) {
        return obj.name;
    }
    return obj.descr;
}
console.log(getDescrOrName({ id: 1, name: "Santos" }));
console.log(getDescrOrName({ value: 1, descr: "Uriel" }));
function getProperty(key, obj) {
    console.log(`${key}: ${obj[key]}`);
}
getProperty("id", { id: 1, name: "Santos" });
getProperty("name", { id: 1, name: "Santos" });
//# sourceMappingURL=operadores.js.map