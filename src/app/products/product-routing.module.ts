import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from 'app/products/product-list/product-list.component';
import { ProductDetailComponent } from 'app/products/product-detail/product-detail.component';
import { ProductEditComponent } from 'app/products/product-edit/product-edit.component';
import { ProductResolver } from './product-resolver.service';
import { ProductEditInfoComponent } from 'app/products/product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from 'app/products/product-edit/product-edit-tags.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent, resolve: { product: ProductResolver } },
  { path: 'products/:id/edit', component: ProductEditComponent,
                               resolve: { product: ProductResolver },
                               children: [
                                            { path: '', redirectTo: 'info', pathMatch: 'full' },
                                            { path: 'info', component: ProductEditInfoComponent },
                                            { path: 'tags', component: ProductEditTagsComponent }
                                         ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
