import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
// se o codigo pode vir em algum momento nulo voce tem q especificar pois o strictNullChecks esta ligado
const form: HTMLInputElement | null = document.querySelector(".form");
// o TS consegue verificar q o erro esta sendo tratado
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw Error("erro");
}
