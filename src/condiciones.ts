//Expreciones condiciones

const numero: number = 11
const mensaje: string = numero > 10 ? 'Es mayor que 10' : 'es menor que 10'
console.log(mensaje)

//Coalescentes nulo

function comprobarSiEsNuloIndefinido(a: string | null | undefined) {
    const valor = a ?? 'indifinido o nulo'
    console.log('a es: ' + valor)
}

comprobarSiEsNuloIndefinido('Hola')
comprobarSiEsNuloIndefinido(null)
comprobarSiEsNuloIndefinido(undefined)

//No es recomendable usarla solo cuando se trata de migrar algun proyecto o utilizar una libreria ->
//hecha con ts

let random: any = 1

console.log(random)

random = 'texto'