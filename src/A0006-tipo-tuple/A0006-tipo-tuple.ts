const dadosCliente1: [number, string] = [1, 'Amando'];
const dadosCliente2: [number, string, number?] = [1, 'Amando', 22];
const dadosCliente3: readonly [number, string, ...string[]] = [1, 'Amando', '22'];

dadosCliente1[0] = 100;
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
