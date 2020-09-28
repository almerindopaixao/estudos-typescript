type Constructor = new (...args: any[]) => any;

function inverteNomeECor(param1: string, param2: string) {
  // Closure
  return function (target: Constructor): Constructor {
    console.log('Sou o decorador e recebi', target);
    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

function OutroDecorador(param2: string) {
  return function (target: Constructor): Constructor {
    console.log('Sou o segundo decorador' + ' ' + param2);
    return target;
  };
}

@OutroDecorador('Outro valor') // 2
@inverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Cachorro', 'black');
console.log(animal);
