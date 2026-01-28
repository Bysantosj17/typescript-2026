interface IdName {
    id: number,
    name: string
}

interface DescrValue {
    descr: string,
    value: number
}

function getDescrOrName(obj: IdName | DescrValue): string {
    if ("id" in obj) {
        return obj.name       
    }

    return obj.descr
}

console.log(getDescrOrName({id: 1,  name: "Santos"}))
console.log(getDescrOrName({ value: 1, descr: "Uriel" }))

type propiedadNombreOId = keyof IdName

function getProperty(key: propiedadNombreOId, obj: IdName) {
    console.log(`${key}: ${obj[key]}`)    
}

getProperty("id", {id: 1, name: "Santos"})
getProperty("name", {id: 1, name: "Santos"})