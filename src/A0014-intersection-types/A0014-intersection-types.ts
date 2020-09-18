type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';

type intersection = AB & AC & AD;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Almerindo',
  sobrenome: 'Paixão',
};

console.log(pessoa);

export { pessoa };
