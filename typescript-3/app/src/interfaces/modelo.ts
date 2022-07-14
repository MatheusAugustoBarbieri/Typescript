import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";
// Inteface que extend uma ou mais interfaces (Interface para extender outra se usa extends nao implements)
// Comparavel esta utilizando a generics de Modelo
// Ou seja todo mundo que implementar a interface modelo tera obrigação de implementar imprimivel e comparavel
export interface Modelo<t> extends Imprimivel, Comparavel<t> {}
