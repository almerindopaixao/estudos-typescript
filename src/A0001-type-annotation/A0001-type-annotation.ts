/* eslint-disable */

// Tipos básico (aqui ocorre inferência de tipos)
let nome = 'Almerindo';
let idade: number = 19; // 10, 1.57, -5.55, 0xf00d
let adulto: boolean = true;
let simbolo: symbol  = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Arrays

let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];

let arrayDeStrings: Array<string> = ['1', '2', '3'];
let arrayDeStirngs2: string[] = ['1', '2', '3'];

// Objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Almerindo',
  idade: 19
};

// Funções

function soma(x: number, y: number): number {
  return x * y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
