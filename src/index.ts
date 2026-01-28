let text: string = 'hola'; //inferir explicito
let text2 = 'mundo'; //inferir no explicito

function printCoord(pt: { x: number; y: number; }) {
    console.log('el valor de la cordenada x es:' + pt.x)
    console.log('el valor de la cordenada y es:' + pt.y)

}

printCoord({ x: 2, y: 4 })
printCoord({ x: 2, y: 4 })
