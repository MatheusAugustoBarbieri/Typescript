import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
  // Intl.DateTimeFormat() formata a data pelo local padrao do navegador
  // recebe negociacoes como tipo
  protected template(model: Negociacoes): string {
    return `
        <table class="table table-hover table-bordered">
            <thead>
            <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            </tr>
            </thead>   
            <tbody>
              ${model
                .lista()
                .map((negociacao) => {
                  return `
                <tr>               
                <td>${this.formatar(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
                </tr>
                `;
                })
                .join("")}
            </tbody>    
        </table>
        `;
  }

  private formatar(data: Date) {
    return new Intl.DateTimeFormat().format(data);
  }
}
