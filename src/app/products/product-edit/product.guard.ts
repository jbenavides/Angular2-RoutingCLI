import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProductEditComponent } from 'app/products/product-edit/product-edit.component';

@Injectable()
export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {

  canDeactivate(component: ProductEditComponent): boolean {

    if (component.isDirty) {
      let productName = component.product.productName || 'New Product';
      return confirm('Navigate away and lose all changes to ' + productName);
    }
    return true;
  }


}
