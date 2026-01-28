//Interfaces

interface IdName {
    id: number,
    name: string
}

const usuario: IdName = {
    id: 1,
    name: "Uriel"
}

const usuario2: IdName = {
    id: 2,
    name: "Karla"    
}

const usuarios: IdName[] = [
    usuario,
    usuario2,
    {
        id: 3,
        name: "Santos"
    }
]

console.log(usuarios)

interface OptionalName {
    id: number,
    name?: string
}

const opcional: OptionalName = {
    id: 1
}