export abstract class Imprimivel {
  // garante que todo mundo que herdar essa classe tenha que aplicar o metodo paraTexto
  public abstract paraTexto(): string;
}
