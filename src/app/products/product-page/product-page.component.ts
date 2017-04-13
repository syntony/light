import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

import { Review } from '../../reviews/review';

import {Subscription} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  product: Product;
  reviews: Review[] = [];
  productId: number;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.productId = params['id'];
        this.getProduct(this.productId);
      }
    );
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => console.log(<any>error));
  }

  isAuth() {
    return this.authService.isAuth();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
