// decorator em propriedade
export function domInjector(seletor: string) {
  return function (target: any, propertyKey: string) {
    console.log(
      `Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`
    );
    // por questão de escopo do JS o valor do elemento permance em cache pois essa variavel foi definida aqui nessa função(não permance em cache se recarregar a pagina pois o JS é rodado novamente)
    let elemento: HTMLElement;
    const getter = function () {
      if (!elemento) {
        elemento = document.querySelector(seletor) as HTMLElement;
        console.log(
          `Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`
        );
      }

      return elemento;
    };
    // definindo as propriedas como getters
    // toda vez q a propridade que agora é getters for acessada ela ira executar a const getter que busca um elemento do DOM
    Object.defineProperty(target, propertyKey, {
      get: getter,
    });
  };
}
