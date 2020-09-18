export class Pessoa {
  public nome: string;
  public sobrenome: string;
  private idade: number;
  protected cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  public getIdade(): number {
    return this.idade;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }
  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    return super.getNomeCompleto();
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const aluno = new Aluno('Almerindo', 'Paixão', 19, '123.456.789-75', '00001');
const cliente = new Cliente('Almerindo', 'Paixão', 19, '123.456.789-75');
const pessoa = new Pessoa('Almerindo', 'Paixão', 19, '123.456.789-75');

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(pessoa.getNomeCompleto());

console.log(aluno);
