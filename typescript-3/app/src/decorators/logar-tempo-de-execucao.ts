// valor padrao = false
export function logarTempoDeExecucao(emSegundos: Boolean = false) {
  return function (
    // target pode ser constructor ou prototype
    target: any,
    // propertyKey da o nome do metodo
    propertyKey: string,
    // descriptor tem tudo sobre o metodo
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    // ...args rest operator aceita todos os parametros
    descriptor.value = function (...args: any[]) {
      let divisor = 1;
      let unidade = "milisegundos";
      if (emSegundos) {
        divisor = 1000;
        unidade = "segundos";
      }

      const t1 = performance.now();
      //chama o metodo original
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(
        `${propertyKey}, tempo de excecução: ${(t2 - t1) / divisor} ${unidade}`
      );
      retorno;
    };
    return descriptor;
  };
}

// exemplos do metodo apply() para melhor compreensão

// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const person1 = {
//   firstName: "Mary",
//   lastName: "Doe"
// }

// // This will return "Mary Doe":
// person.fullName.apply(person1);

// com argumentos
// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }

// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }

// person.fullName.apply(person1, ["Oslo", "Norway"]);
