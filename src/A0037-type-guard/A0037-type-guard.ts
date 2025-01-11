
export function add(a: unknown, b: unknown): string | number {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}, ${b}`;
}

type Pessoa = {
  nome: string;
};
type Animal = {
  cor: string
}

type PessoaOuAnimal = Pessoa | Animal

export class Aluno implements Pessoa{
  constructor(public nome: string){}
}

function mostraNome(obj: PessoaOuAnimal): void{
  // if('nome' in obj) console.log(obj.nome)
  if(obj instanceof Aluno) console.log(obj.nome)
}

mostraNome(new Aluno('joão'))