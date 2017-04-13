import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import 'rxjs/Rx';
import {Observable} from "rxjs";

import { Product } from './product';

@Injectable()
export class ProductService {
  products: Product[] = [];
  public baseUrl: string = 'http://smktesting.herokuapp.com/api/';

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    return this.http.get( this.baseUrl+'products/' )
      .map((response: Response) => <Product[]> response.json())
      .do(data => this.products = data)
      .catch(this.handleError);
  }

  getProduct(id: number): Observable<Product> {
    return this.getProducts()
      .map((products: Product[]) => products.find(product => product.id == id));
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
