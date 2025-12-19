import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../product-service';
import { Product } from '../shared/product';
import { take } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  productService = inject(ProductService);

  products = signal<Product[]>([]);

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products.set(products);
      console.log(products);
    });
  }

}
