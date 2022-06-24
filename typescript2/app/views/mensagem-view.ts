import { View } from "./view";

export class MensagemView extends View<string> {
  // nao consegue colocar private pois o metodo ja é protected no pai, so pode deixar public ou manter protected
  protected template(model: string): string {
    return `
        <p class="alert alert-info">${model}</p>
    `;
  }
}
