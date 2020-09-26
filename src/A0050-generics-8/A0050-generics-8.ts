// Tipo Record
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
  [key: string]: unknown;
};

// Required
type PessoaRequired = Required<PessoaProtocol>;

// Partial
type PessoaPartial = Partial<PessoaRequired>;

// Readonly
type PessoaReadonly = Readonly<PessoaPartial>;

// Pick
type PessoaPick = Pick<PessoaReadonly, 'nome' | 'sobrenome'>;

const objeto2: PessoaPick = {
  nome: 'Almerindo',
  sobrenome: 'Paixão',
};

console.log(objeto2);

// Extract e Exclue
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
/* eslint-disable @typescript-eslint/no-unused-vars */
type TipoExlude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'dsafdasfsfs',
  nome: 'Almerindo',
  idade: 19,
  sobrenome: 'Paixão',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

// Module mode
export default 1;
