import { NgModule } from '@angular/core';

import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductGuard } from './product.guard';
import { ProductResolverService } from './product-resolver.service';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductEditTagsComponent,
    ProductEditInfoComponent,
    ProductFilterPipe
  ],
  providers: [
    ProductService,
    ProductGuard,
    ProductResolverService
  ]
})
export class ProductModule { }
