import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {  
  product: Product = {
    id: 0,
    nome: '',
    categoria: '',
    valor: 0,
    dataVencimento: new Date(),
    quantidadeEstoque: 0,
    produtoPerecivel: false
  };
  
  isNew = true;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.isNew = !this.route.snapshot.paramMap.has('id');
    if (!this.isNew) {
      const idParam = this.route.snapshot.paramMap.get('id');
      const id = idParam ? +idParam : 0;
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id)
      .subscribe(product => {
        this.product = product;
        this.product.dataVencimento = new Date(this.product.dataVencimento);
      });
  }

  submitForm(): void {
    if (this.isNew) {
      this.createProduct();
    } else {
      this.updateProduct();
    }
  }

  createProduct(): void {
    this.productService.createProduct(this.product)
      .subscribe(() => this.router.navigate(['/products']));
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product.id, this.product)
      .subscribe(() => this.router.navigate(['/products']));
  }

  formatDate(date: Date): string {
    const formattedDate = new Date(date);
    return formattedDate.toISOString().split('T')[0];
  }

  updateDate(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.product.dataVencimento = new Date(inputValue);
  }
}
