export class Empresa {
  //   public readonly nome: string = 'Amando';
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adcionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}
export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '123456789');
  }
  popColaborador(): Colaborador | null{
    const colaborador = this.colaboradores.pop()
    if(colaborador) return colaborador
    return null
  }
}
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Amando', 'Barbosa');
const colaborador2 = new Colaborador('Maria', 'Santos');
const colaborador3 = new Colaborador('João', 'Silva');
empresa1.adcionaColaborador(colaborador1);
empresa1.adcionaColaborador(colaborador2);
empresa1.adcionaColaborador(colaborador3);
const colaboradorRemovido = empresa1.popColaborador()
console.log(colaboradorRemovido)
console.log(empresa1);
