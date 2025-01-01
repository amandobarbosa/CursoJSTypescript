export class Pessoa {
  // public readonly nome: string;
  // constructor(nome: string){
  //   this.nome = nome
  // }
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}
  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  sala: string;
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    sala: string,
    // public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }

  getNomeCompleto(): string {
    console.log('Fazendo algo antes');
    const result = super.getNomeCompleto();
    return result + ' heyyyy';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Vem do cliente ' + this.nome + ' ' + this.sobrenome;
  }
}
const aluno = new Aluno('Amando', 'Barbosa', 22, '123456', "0001");
// const cliente = new Cliente('Amando', 'Barbosa', 22, '123456');

console.log(aluno);
