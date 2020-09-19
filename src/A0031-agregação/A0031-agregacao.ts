export class CarrinhoDeCompras {
  private readonly produtos: Array<Produto> = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((ac, produto) => ac + produto.preco, 0);
  }
}

export class Produto {
  public readonly nome: string;
  public readonly preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Calça', 50.1);
const produto3 = new Produto('Sapato', 30);
const carrinhoDeCompras = new CarrinhoDeCompras();

carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);
console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeProdutos());
