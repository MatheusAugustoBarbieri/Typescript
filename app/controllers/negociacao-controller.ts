import { Negociacao } from "../models/negociacao.js";

// Uma das vantagens do typescript é exibir os metodos e propriedades dos elementos pois ele sabe o tipo
export class NegociacaoController {
  // tipagem de DOM

  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }
  // SEMPRE DEIXAR CLARO O RETORNO DOS METODOS
  adiciona(): void {
    const negociacao = this.criaNegociacao();
    console.log(negociacao);
    this.limparFormulario();
  }
  criaNegociacao(): Negociacao {
    // todo retorno do DOM vem como string entao temos que converter antes de passar
    // pega todo lugar q tem hifen
    const exp = /-/g;
    // substitui por virgula porque
    const date = new Date(this.inputData.value.replace(exp, ","));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);

    return new Negociacao(date, quantidade, valor);
  }
  limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }
}
