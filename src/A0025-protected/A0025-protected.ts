export class Empresa {
  readonly nome: string;
  protected readonly colaboradores: Array<Colaborador> = [];
  private readonly cnpj: string;

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

export class Klabin extends Empresa {
  constructor() {
    super('Klabin', '11.111.111/0001-1');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const empresa1 = new Klabin();
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
console.log(empresa1);
