/*eslint-disable @typescript-eslint/no-namespace*/
namespace MeuNamespace {

  export class PessoaDoNamespace{
    constructor(public nome: string){}
  }
  const pessoa = new PessoaDoNamespace('Amando')
  console.log(pessoa);

  export namespace OutroNamespace{
    export const nomeDoNamespace = "nomeDoNamespace"
  }
  
}

const pessoa = new MeuNamespace.PessoaDoNamespace('Amando')
console.log(pessoa);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);

