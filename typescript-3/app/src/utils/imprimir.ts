import { Imprimivel } from "./imprimivel.js";

// repara no rest operator
// referencia que o tipo do Array é Imprimivel que garante que as classes que são passadas tenham extendido Imprimivel
export function imprimir(...objetos: Array<Imprimivel>) {
  for (let objeto of objetos) {
    console.log(objeto.paraTexto());
  }
}
