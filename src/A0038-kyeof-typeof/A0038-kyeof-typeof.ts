type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function traduzirCores(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCores('azul', coresObj));
