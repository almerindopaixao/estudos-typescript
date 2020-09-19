// Declaration merging

interface Pessoa2 {
  nome: string;
}

interface Pessoa2 {
  readonly sobrenome: string;
}

interface Pessoa2 {
  readonly enderecos: readonly string[];
}

interface Pessoa2 {
  readonly idade?: number;
}

const pessoa: Pessoa2 = {
  nome: 'Almerindo',
  sobrenome: 'Paixão',
  enderecos: ['avenida', 'rua'],
  idade: 30,
};

console.log(pessoa);

export {};
