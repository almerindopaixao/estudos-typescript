export class Empresa {
  readonly nome: string;
  private readonly colaboradores: Array<Colaborador> = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  setColaboradores(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  getColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const empresa1 = new Empresa('Klabin', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Almerindo', 'Paixão');
const colaborador2 = new Colaborador('Maria', 'Joaquina');
const colaborador3 = new Colaborador('Jõao', 'Santos');

empresa1.setColaboradores(colaborador1);
empresa1.setColaboradores(colaborador2);
empresa1.setColaboradores(colaborador3);
empresa1.setColaboradores({
  nome: 'Almerindo',
  sobrenome: 'Junior',
});
