import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao extends Imprimivel {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {
    // se voce esta herdadando qualquer classe voce precisa chamar o super() que chama o construtor da classe herdada
    super();
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
}
// estou tendo erro compilação? NÃO
// porque Negociacao é imprimivel
const o: Imprimivel = new Negociacao(new Date(), 1, 100);
