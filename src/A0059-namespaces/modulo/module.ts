/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nomeDoNamespace = 'Luiz';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace(nomeDoNamespace);
  console.log(pessoaDoNamespace);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Nome do outro namespace';
  }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Almerindo');

console.log(pessoaDoNamespace);
