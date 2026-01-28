//Tipado de funciones
const suma: (a: number, b: number) => void = (num: number, num1: number) => {
    return num + num1
}

console.log(suma(2, 3))

const concatValues = (a: string, b?: string) => {
    if (b) {
        return a + b
    }
    return a
}

const concatWithDefault = (a: string, b: string = "default") => {
    return a + b
}

cosecutivo: 1


console.log(concatValues("hola ", "mundo"))
console.log(concatWithDefault("hola ", "mundo"))

