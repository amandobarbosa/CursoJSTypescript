type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'rosa',
  vacinas: ['vacina1', 'vacina2'],
};

const vacinas = obterChave(animal, "vacinas")

console.log(vacinas);
