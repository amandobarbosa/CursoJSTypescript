export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}
  // setCpf(valor: string): void {
  //   this.cpf = valor;
  // }
  // getCpf(): string {
  //   return this.cpf.replace(/\D/g, '');
  // }
  set cpf(cpf: string) {
    console.log("Setter chamado")
    this._cpf = cpf;
  }
  get cpf(): string {
    console.log("Getter chamado")
    return this._cpf.replace(/\D/g, '');
  }
}
const pessoa = new Pessoa('Amando', 'Barbosa', 22, '123.456.78-90');
// pessoa.setCpf('111111')
pessoa.cpf = '111111';
console.log(pessoa.cpf);
