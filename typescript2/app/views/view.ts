// Generics - <t> define um tipo pra classe para conseguir utilizar dois metodos iguais que tem tipos diferentes
export abstract class View<T> {
  // uma classe abstrata voce nao pode instanciar so pode ser herdada
  // protected permite que as classes filhas tenham acesso e ninguem mais
  protected elemento: HTMLElement;
  private escapar = false;
  // ? parametro opcional "tem que ser sempre os ultimos"
  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error("erro");
    }
    if (escapar) {
      this.escapar = escapar;
    }
  }
  // metodo abstrato é um metodo "OBRIGATORIO" que deve ser implementado somente na classe filha
  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);
    // segurança contra html injection
    // remove toda a tag script
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.elemento.innerHTML = template;
  }
}
