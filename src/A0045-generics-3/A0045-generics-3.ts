interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Almerindo',
  sobrenome: 'Paixão',
  idade: 19,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 19,
};

const aluno3: PessoaProtocolo2 = {
  nome: 'Almerindo',
  sobrenome: 'Paixão',
  idade: 19,
};

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
