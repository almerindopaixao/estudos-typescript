export class Pessoa {
  public nome: string;
  public sobrenome: string;
  private idade: number;
  private _cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  public getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Almerindo', 'Paixão', 19, '123.456.789-75');
pessoa.cpf = '123.456.789-78';
console.log(pessoa.cpf);
