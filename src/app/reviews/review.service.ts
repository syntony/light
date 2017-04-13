import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { contentHeaders } from "../common/headers";

import 'rxjs/Rx';
import {Observable} from "rxjs";

import { Review } from './review';

@Injectable()
export class ReviewService {
  reviews: Review[] = [];
  public baseUrl: string = 'http://smktesting.herokuapp.com/api/reviews/';

  constructor(private http: Http) { }

  getReviews(id: number): Observable<Review[]> {
    return this.http.get( this.baseUrl+id )
      .map((response: Response) => <Review[]> response.json())
      .do(data => this.reviews = data)
      .catch(this.handleError);
  }

  sendReview(id: number, rate: number, text: any) {
    let body = JSON.stringify({
                                rate,
                                text
                              });

    this.http.post( this.baseUrl+id, body, { headers: contentHeaders }).subscribe(
      response => {
        console.log(response.json().review_id);
      },
      error => {
        alert(error.text());
        console.log(error.details);
      }
    );
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
