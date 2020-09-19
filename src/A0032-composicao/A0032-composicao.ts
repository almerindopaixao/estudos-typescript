export class Carro {
  private readonly _motor: Motor = new Motor();

  get motor(): Motor {
    return this._motor;
  }

  set motor(motor: Motor) {
    this.motor = motor;
  }

  ligar(): void {
    this.motor.ligar();
  }

  desligar(): void {
    this.motor.desligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado....');
  }

  desligar(): void {
    console.log('Motor está desligado....');
  }

  acelerar(): void {
    console.log('Motor está acelerando....');
  }

  parar(): void {
    console.log('Motor está parando');
  }
}

const carro = new Carro();

carro.parar();
