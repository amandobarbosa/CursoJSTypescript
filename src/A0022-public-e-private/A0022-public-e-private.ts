export class Empresa {
  //   public readonly nome: string = 'Amando';
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adcionaColaborador(colaborador: Colaborador): void{
    this.colaboradores.push(colaborador)
  }
  mostrarColaboradores(): void{
    for(const colaborador of this.colaboradores){
        console.log(colaborador);
        
    }
  }
}
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '123456789');
// empresa1.nome = "Udemy"
const colaborador1 = new Colaborador('Amando', 'Barbosa');
const colaborador2 = new Colaborador('Maria', 'Santos');
const colaborador3 = new Colaborador('João', 'Silva');
empresa1.adcionaColaborador(colaborador1)
empresa1.adcionaColaborador(colaborador2)
empresa1.adcionaColaborador(colaborador3)
console.log(empresa1);
empresa1.mostrarColaboradores()
