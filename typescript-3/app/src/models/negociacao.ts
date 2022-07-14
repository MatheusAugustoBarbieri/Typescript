import { Modelo } from "../interfaces/modelo.js";
import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements Modelo<Negociacao> {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {
    // Não precisou do super pois extendeu a interface e não a classe
    // se voce esta herdadando qualquer classe voce precisa chamar o super() que chama o construtor da classe herdada
    // super();
  }
  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }
  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public paraTexto(): string {
    return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
  }
  // se remover o metodo ele vai reclamar pq voce é obrigado a usar devido a interface
  // generics na interface, por exemplo se eu passar o tipo como string ele vai dar erro pq a interface comparavel espera o tipo q foi passado la em cima no caso <Negociacao>
  public ehIgual(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() === negociacao.data.getDate() &&
      this.data.getMonth() === negociacao.data.getMonth() &&
      this.data.getFullYear() === negociacao.data.getFullYear()
    );
  }
}
// estou tendo erro compilação? NÃO
// porque Negociacao é imprimivel
const o: Imprimivel = new Negociacao(new Date(), 1, 100);
