"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
setTimeout(imprimir, 3000);
function imprimir() {
    console.log("hola");
}
// fetch("/users").then(
//     (resp) => {
//         console.log(resp.body)
//     }
// ).catch(
//     (error) => console.error(error)
// )
async function getItems(url) {
    const response = await fetch(url);
    const items = await response;
    return items;
}
async function get() {
    return await Promise.all([getItems("/users"), getItems("/products")]);
}
// const [users, products] = get()
//# sourceMappingURL=promesas.js.map