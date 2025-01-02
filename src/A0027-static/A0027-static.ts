export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000-000-000-00';
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}
  // static falaOi(): void {
  //   console.log('oi');
  // }
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    const person = new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
    return person;
  }
}
// const pessoa = new Pessoa('Amando', 'Barbosa', 22, '123.456.78-90');
// pessoa.cpf = '111111';
// console.log(pessoa.cpf);

// Pessoa.falaOi()
const pessoa1 = Pessoa.criaPessoa('joão', 'santos');
console.log(pessoa1);
