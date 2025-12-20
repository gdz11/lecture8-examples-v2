import { inject, Injectable } from '@angular/core';
import { EnvConfigService } from './env-config';
import { HttpClient } from '@angular/common/http';
import { Product } from './shared/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  envConfigService = inject(EnvConfigService);
  http = inject(HttpClient);

  

  get productsApiUrl(){
    return `${this.envConfigService.apiBaseUrl}/products`;
  }

  getProducts(){
    return this.http.get<Product[]>(this.productsApiUrl);
  }
}
