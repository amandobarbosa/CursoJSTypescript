type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'o texto',
};

//apenas pra null ou undefined
console.log(documento.data?.toDateString() ?? "Não existe data")
// console.log(undefined ?? "Não existe data")
