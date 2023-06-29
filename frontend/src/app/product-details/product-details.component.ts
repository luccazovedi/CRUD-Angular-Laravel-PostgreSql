import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const paramMap = this.route.snapshot.paramMap;
    if (paramMap.has('id')) {
      const id = +paramMap.get('id')!;
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }
}
