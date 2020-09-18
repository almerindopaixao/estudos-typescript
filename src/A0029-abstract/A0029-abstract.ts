export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forçaAtaque: number): void {
    this.vida -= forçaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida...`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  constructor(ataque: number, vida: number) {
    super('Guerreira', ataque, vida);
  }

  bordao(): void {
    console.log(this.emoji + ' ' + 'Guerreira ao Ataqueeee');
  }
}

export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  constructor(ataque: number, vida: number) {
    super('Monstro', ataque, vida);
  }

  bordao(): void {
    console.log(this.emoji + ' ' + 'MONSTRO ZANGAAAAAAAAAADO');
  }
}

const guerreira = new Guerreira(100, 1000);
const monstro = new Monstro(87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
