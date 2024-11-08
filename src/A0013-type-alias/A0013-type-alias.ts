type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Verde';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'preto';

type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Amando',
  idade: 22,
  salario: 200.0,
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return {...pessoa, corPreferida: cor}
}

console.log(setCorPreferida(pessoa, 'Ciano'))