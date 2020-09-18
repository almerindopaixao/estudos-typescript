enum Cores {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 1000,
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

console.log(Cores.VERMELHO);
console.log(Cores[10]);
console.log(Cores.ROXO);
console.log(Cores[202]);

export function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.AMARELO);
