interface PessoaProtocol<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}
// interface PessoaProtocol<T = string, U = number> {
//   nome: T;
//   sobrenome: T;
//   idade: U;
// }

const aluno1: PessoaProtocol<string, number> = {
  idade: 22,
  nome: 'Amando',
  sobrenome: 'Barbosa',
};

console.log(aluno1);
