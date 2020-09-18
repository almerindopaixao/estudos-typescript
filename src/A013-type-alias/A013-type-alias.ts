type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

type CorRgb = 'Vermelho' | 'Verde' | 'Azul';

type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type CorPreferida = CorRgb | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Almerindo',
  idade: 19,
  salario: 100_000,
  corPreferida: 'Verde',
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Amarelo'));
