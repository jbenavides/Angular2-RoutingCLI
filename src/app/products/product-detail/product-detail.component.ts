import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../product.service';
import { IProduct } from '../product';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // let id = +this.route.snapshot.params['id'];
    // this.getProduct(id);
    this.product = this.route.snapshot.data['product'];
  }

  /*getProduct(id: number) {
      this.productService.getProduct(id).subscribe(
          product => this.product = product,
          error => this.errorMessage = <any>error);
  }*/

}
