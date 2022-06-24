export class Negociacao {
  // ANTES
  // # significa que ninguem fora da classe consegue alterar o atributo
  // private _data: Date;
  // private _quantidade: number;
  // private _valor: number;

  // constructor(data: Date, quantidade: number, valor: number) {
  //   this._data = data;
  //   this._quantidade = quantidade;
  //   this._valor = valor;
  // }

  // DEPOIS
  constructor(
    private _data: Date,
    public readonly _quantidade: number,
    public readonly _valor: number
  ) {}
  //  public readonly _data: Date,
  // inves de colocar só getters voce pode colocar" public readonly" nas propriedades assim ninguem vai poder modificar mas poderão ver "MAS TEM BRECHAS"

  // programação defensiva,No Date do js existem metodos que alteram a data por isso a propriedade nao pode ser public readonly
  // solução
  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  // get quantidade(): number {
  //   return this._quantidade;
  // }

  // get valor(): number {
  //   return this._valor;
  // }
  get volume(): number {
    return this._quantidade * this._valor;
  }
}
