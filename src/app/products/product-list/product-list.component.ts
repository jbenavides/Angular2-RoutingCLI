import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from 'app/products/product';
import { ProductService } from 'app/products/product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string;
  errorMessage: string;

  products: IProduct[];

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  toggleImage(): void {
      this.showImage = !this.showImage;
  }

  ngOnInit(): void {

      this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
      this.showImage = this.route.snapshot.queryParams['showImage'] === 'true';

      this.productService.getProducts()
              .subscribe(products => this.products = products,
                          error => this.errorMessage = <any>error);
  }

}
