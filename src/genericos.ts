interface PrintId{
    id: number;
    print: () => void;
}

interface PrintName{
    name: string;
    print: () => void;
}

interface print extends PrintId, PrintName {
    description: String;
}

function printUseT<T extends PrintId | PrintName>(item: T) {
    item.print();

}

printUseT({ print: () => console.log("Hola"), name: "hola", id: 1, description: "hola"})

const test: PrintId = {
    id: 1,
    print: () => 1
}

type RequiredT<T> = {
    [K in keyof T]?: T[K];
}

interface Name {
    name: string;
}

const test2: Readonly<PrintName> = {
    name: "hola",
    print: () => console.log()
}

// test2.name = " " nos dara error ya que solo se permite lectura de los datos

interface ABC {
    a: string;
    b: number;
    c: boolean;
}

type AB = Pick<ABC, "a" | "c"> 

const ab: AB = {a: "", c: false }

type RecordCD = Record<"c" | "d", number>

interface Test{
    c: number;
}

const record: RecordCD = {c: 1,d: 2}