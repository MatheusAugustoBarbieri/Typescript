export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
    }
  }
  // quando não existir uma função isolando o decorator voce nao precisa executar nada
  // so precisa ter a função se eu quiser passar um parametro pro decorator
  // @inspect
  // @logarTempoDeExecucao(true)
  public update(model: T): void {
    let template = this.template(model);

    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
