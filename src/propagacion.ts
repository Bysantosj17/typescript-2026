let obj1: object = { id: 2, name: 'juan' }

let obj2: object = { lastname: 'Uribe' }

//la propagacion puede sobreescribir las propiedades ya declaradas de un objeto

let obj3: object = {edad: 1, ...obj1, ...obj2 }

console.log(obj3)

console.log("obj3: " + JSON.stringify(obj3))

//Las tuplas nos sirven para tipar un arreglo con mayor rigidez

let arreglo1: number[] = [1, 2, 3]
let arreglo2: number[] = [4, 5, 6]

console.log([...arreglo1, ...arreglo2])

let arreglo3: [string, number] = ["", 2]

//destructuracion de objetos

let objetoCpmpleto = {
    name: "Uriel",
    age: 24,
    subscrito: true
}

let { name, age, subscrito } = objetoCpmpleto

age = age + 20

console.log(name, age, subscrito, objetoCpmpleto)

//Calback

const miCallback = function (texto: string) {
    console.log("impresion desde callback " + texto )
}

const funcionConCallback = function (texto: string, callback: (texto: string) => void) {
    console.log("impresion desde funcion " + texto)
    callback(texto)
}

funcionConCallback("hola", miCallback)