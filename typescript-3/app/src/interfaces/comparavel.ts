// interface com generics ele força a voce usar o tipo que foi passado na generic
export interface Comparavel<t> {
  ehIgual(objeto: t): boolean;
}
