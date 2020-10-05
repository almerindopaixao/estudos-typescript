/* eslint-disable @typescript-eslint/no-namespace */
var MeuNamespace;
(function (MeuNamespace) {
    MeuNamespace.nomeDoNamespace = 'Luiz';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoaDoNamespace = new PessoaDoNamespace(MeuNamespace.nomeDoNamespace);
    console.log(pessoaDoNamespace);
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace = 'Nome do outro namespace';
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
var pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Almerindo');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/module.ts" />
console.log(MeuNamespace.nomeDoNamespace);
