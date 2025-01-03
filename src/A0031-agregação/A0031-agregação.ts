export class CarrinhoDeCompras{
  private readonly produtos: Produto[] = []

  inserirProdutos(...produtos: Produto[]): void{
    for(const produto of produtos){
      this.produtos.push(produto)
    }
  }
  quantidadeProdutos(): number{
    return this.produtos.length
  }
  valorTotal(): number{
    return this.produtos.reduce((soma, produto)=>soma+ produto.preco, 0)
  }
}

export class Produto{
  constructor(public nome: string, public preco: number){

  }
}

const produto1 = new Produto('camiseta', 50)
const produto2 = new Produto('caneca', 20)
const produto3 = new Produto('caneta', 40)
const carrinhoDeCompras = new CarrinhoDeCompras()
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3)
console.log(carrinhoDeCompras.quantidadeProdutos())