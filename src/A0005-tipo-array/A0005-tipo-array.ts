// Array<T> - T[]

function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

function toUpeerCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);

const concatenacao = concatenaString('1', '2', '3');

const maiuscula = toUpeerCase('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(maiuscula);
