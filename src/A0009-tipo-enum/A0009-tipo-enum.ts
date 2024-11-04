enum Cores {
  vermelho,
  azul,
  amarelo,
  roxo = 'Roxo',
  rosa = '4',
}
enum Cores {
  verde = 5,
  laranja,
}

// console.log(Cores.amarelo);
// console.log(Cores[0]);
// console.log(Cores);

function escolhaACor(cor: Cores): void{
  console.log(Cores[cor])
}
escolhaACor(Cores.amarelo)