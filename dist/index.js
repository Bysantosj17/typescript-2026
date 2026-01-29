"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let text = 'hola'; //inferir explicito
let text2 = 'mundo'; //inferir no explicito
function printCoord(pt) {
    console.log('el valor de la cordenada x es:' + pt.x);
    console.log('el valor de la cordenada y es:' + pt.y);
}
printCoord({ x: 2, y: 4 });
printCoord({ x: 2, y: 4 });
//# sourceMappingURL=index.js.map