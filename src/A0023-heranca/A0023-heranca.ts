export class Pessoa {
  // public readonly nome: string;
  // constructor(nome: string){
  //   this.nome = nome
  // }
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {

  }
  getIdade(): number{
    return this.idade
  }
  getCpf(): string{
    return this.cpf
  }
  getNomeCompleto(): string{
    return this.nome + " " + this.sobrenome
  }
}

export class Aluno extends Pessoa{
  getNomeCompleto(): string{
    return "Vem do aluno " + this.nome + " " + this.sobrenome
  }
}
export class Cliente extends Pessoa{
  getNomeCompleto(): string{
    return "Vem do cliente " + this.nome + " " + this.sobrenome
  }
}
const pessoa = new Pessoa("Amando", "Barbosa", 22, "123456")
const aluno = new Aluno("Amando", "Barbosa", 22, "123456")
const cliente = new Cliente("Amando", "Barbosa", 22, "123456")
console.log(pessoa);
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
