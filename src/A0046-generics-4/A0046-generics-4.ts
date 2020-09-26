interface ObterChaveFn {
  <O, K extends keyof O>(objeto: O, chave: K): O[K];
}

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  nome: 'Tótó',
  cor: 'Preto',
  vacinas: ['Vacina1', 'Vacina 2'],
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');
console.log(vacinas, cor);
console.table(animal);
