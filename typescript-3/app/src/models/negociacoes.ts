import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

// para herda uma classe é extends
// porem para herdar de uma interface para que a classe seja obrigado a implementar os metodos da interface voce usa implements
// interface pode implementar mais de uma
// passando generic para interface forçar o uso do q tipo q foi passado aqui como generic
export class Negociacoes implements Modelo<Negociacoes> {
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }

  public ehIgual(negociacoes: Negociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes);
  }
}
