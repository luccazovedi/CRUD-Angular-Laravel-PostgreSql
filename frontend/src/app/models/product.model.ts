export class Product {
  id: number;
  nome: string;
  categoria: string;
  valor: number;
  dataVencimento: Date;
  quantidadeEstoque: number;
  produtoPerecivel: boolean;

  constructor(
    id: number,
    nome: string,
    categoria: string,
    valor: number,
    quantidadeEstoque: number,
    produtoPerecivel: boolean,
    dataVencimento?: Date // Optional parameter
  ) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.valor = valor;
    this.quantidadeEstoque = quantidadeEstoque;
    this.produtoPerecivel = produtoPerecivel;
    this.dataVencimento = dataVencimento || new Date(); // Assigning default value if not provided
  }
}
