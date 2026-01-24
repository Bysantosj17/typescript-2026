let obj1: object = { id: 2, name: 'juan' }

let obj2: object = { lastname: 'Uribe' }

//la propagacion puede sobreescribir las propiedades ya declaradas de un objeto

let obj3: object = {edad: 1, ...obj1, ...obj2 }

console.log(obj3)