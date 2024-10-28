const nome: string = 'Amando';
const idade: number = 22;

const arrayDeNumeros: Array<number> = [1, 2, 3];
const arrayDeNumeros2: number[] = [1, 2, 3];

const arrayDeStrings: Array<string> = 'OI';

const pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 22,
  nome: 'Amando',
};

function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
