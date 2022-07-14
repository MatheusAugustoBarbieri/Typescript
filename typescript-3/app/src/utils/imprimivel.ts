// transformou em interface
// Se voce quer garantir um comportamento e não quer herda nenhuma classe abstrata, crie interface
export interface Imprimivel {
  paraTexto(): string;
}

// export abstract class Imprimivel {
//   // garante que todo mundo que herdar essa classe tenha que aplicar o metodo paraTexto
//   public abstract paraTexto(): string;
// }
