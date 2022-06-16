import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  // tem que tipar a propriedade e o Array
  // ANTES
  // private negociacoes: Array<Negociacao> = [];
  // DEPOIS
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // ReadonlyArray<Negociacao>
  // mesma coisa que readonly Negociacao[]

  lista(): readonly Negociacao[] {
    // retornando assim ele tem acesso e pode manipular os dados pois isso é uma referencia
    // return this.negociacoes;
    // assim resolve mas TS tem algo melhor com ReadOnly somente leitura
    // return [...this.negociacoes];

    return this.negociacoes;
  }
}
