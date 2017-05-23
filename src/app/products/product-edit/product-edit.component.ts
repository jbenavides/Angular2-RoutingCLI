import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'app/products/product';
import { ProductService } from 'app/products/product.service';
import { MessageService } from 'app/messages/message.service';

@Component({
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  pageTitle: string = 'Product Edit';
  errorMessage: string;

  private dataIsValid: { [key: string]: boolean } = {};
  private currentProduct: IProduct;
  private originalProduct: IProduct;

  get product(): IProduct{
      return this.currentProduct;
  }
  set product(value: IProduct) {
      this.currentProduct = value;
      // Clone the object to retain a copy.
      this.originalProduct = Object.assign({}, value);
  }

  get isDirty(): boolean {
      return JSON.stringify(this.currentProduct) !== JSON.stringify(this.originalProduct);
  }

  reset(): void {
      this.dataIsValid = null;
      this.currentProduct = null;
      this.originalProduct = null;
  }

  constructor(private productService: ProductService,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // let id = +this.route.snapshot.params['id'];
    // this.getProduct(id);
    /*this.route.params.subscribe(
        params => {
            let id = +params['id'];
            this.getProduct(id);
        }
    );*/
    // this.onProductRetrieved(this.route.snapshot.data['product']);
    this.route.data.subscribe(data => {
        this.onProductRetrieved(data['product']);
    });
  }

  /*getProduct(id: number): void {
        this.productService.getProduct(id)
            .subscribe(
                (product: IProduct) => this.onProductRetrieved(product),
                (error: any) => this.errorMessage = <any>error
            );
    }*/

    onProductRetrieved(product: IProduct): void {
        this.product = product;

        if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
        } else {
            this.pageTitle = `Edit Product: ${this.product.productName}`;
        }
    }

    deleteProduct(): void {
        if (this.product.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
       } else {
            if (confirm(`Really delete the product: ${this.product.productName}?`)) {
                this.productService.deleteProduct(this.product.id)
                    .subscribe(
                        () => this.onSaveComplete(`${this.product.productName} was deleted`),
                        (error: any) => this.errorMessage = <any>error
                    );
            }
        }
    }

    saveProduct(): void {
        if (this.isValid(null)) {
            this.productService.saveProduct(this.product)
                .subscribe(
                    () => this.onSaveComplete(`${this.product.productName} was saved`),
                    (error: any) => this.errorMessage = <any>error
                );
        } else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }

    onSaveComplete(message?: string): void {
        if (message) {
            this.messageService.addMessage(message);
        }
        this.reset();

        // Navigate back to the product list
        this.router.navigate(['/products']);
    }

    validate(): void {
        // Clear the validation object
        this.dataIsValid = {};

        // info tab
        if (this.product.productName &&
            this.product.productName.length >= 3 &&
            this.product.productCode) {
                this.dataIsValid['info'] = true;
            }else {
                this.dataIsValid['info'] = false;
            }

        // tags tab
        if (this.product.category &&
            this.product.category.length >= 3) {
                this.dataIsValid['tags'] = true;
            }else {
                this.dataIsValid['tags'] = false;
            }
    }

    isValid(path: string): boolean {
        this.validate();

        if (path) {
            return this.dataIsValid[path];
        }
        return (this.dataIsValid &&
                Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
    }

}
