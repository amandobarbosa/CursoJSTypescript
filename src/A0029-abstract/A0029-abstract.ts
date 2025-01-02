export abstract class Personagem {

  protected abstract emoji: string
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }
  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida...`);
  }
  abstract bordao(): void 
}

class Guerreira extends Personagem {
  protected emoji = 'aaaa'
  bordao(): void {
    console.log('guerreira ao ataque')
  }
}
class Monstro extends Personagem {
  protected emoji = 'bbbb '
  bordao(): void {
    console.log(this.emoji + 'monstro ao ataque')
  }
}

const guerreira = new Guerreira('guerreira', 300, 1000);
const monsto = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monsto);
guerreira.atacar(monsto);
monsto.atacar(guerreira);
