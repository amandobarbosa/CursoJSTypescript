const objeto1: Record<string, string | number> = {
  nome: 'Amando',
  sobrenome: 'Barbosa',
  idade: 22,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

type PessoaRequired = Required<PessoaProtocol>;
const objeto2: PessoaRequired = {
  nome: 'Amando',
  sobrenome: 'Barbosa',
  idade: 22,
};
console.log(objeto2);

type PessoaPick = Pick<PessoaProtocol, 'nome' | 'sobrenome'>;

//extract e exclude

type ABC = "A" | "B" | "C"
type CDE = "C" | "D" | "E"

type TipoExclude = Exclude<ABC, CDE>
type TipoExtract = Extract<ABC, CDE>

type AccountMongo = {
  _id: string,
  nome: string,
  idade: number
}
type AccountApi = {
  id: string,
  nome: string,
  idade: number
}

const accountMongo: AccountMongo = {
  _id: "5415ds1651d",
  nome: "Amando",
  idade: 22
}

function mapAccount(accountMongo: AccountMongo): AccountApi{
  const {_id, ...accountData} = accountMongo
  return {...accountData, id: _id}

}
const accountApi = mapAccount(accountMongo)
console.log('API');
console.log(accountApi)