import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private productService: ProductService) { }

  getProduct(id: number) {
      this.productService.getProduct(id).subscribe(
          product => this.product = product,
          error => this.errorMessage = <any>error);
  }

}
