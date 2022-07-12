import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

//retorna uma promise do tipo negociacao
// repara no NegociacoesDoDia ele esta tipando com a interface
export class NegociacoesService {
  public obterNegocicoesDoDia(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((res: NegociacoesDoDia[]) => {
        return res.map((dados) => {
          return new Negociacao(new Date(), dados.vezes, dados.montante);
        });
      });
  }
}
