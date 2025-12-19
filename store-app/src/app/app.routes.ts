import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'products',
        loadComponent: () => import('./product-list/product-list').then(c => c.ProductList)
    }
];
