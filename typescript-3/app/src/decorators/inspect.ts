//decorator rescreve o metodo original com as alterações
// se a função nao receber parametros não precisa passar ela e depois o decorator
export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;
  //sobrescreve o metodo original com as modificações
  descriptor.value = function (...args: Array<any>) {
    console.log("this é", this);
    console.log(`--- método ${propertyKey}`);
    console.log(`---- parametros: ${JSON.stringify(args)}`);
    const retorno = metodoOriginal.apply(this, args);
    console.log(`---- retorno: ${JSON.stringify(retorno)}`);
    return retorno;
  };
  return descriptor;
}
