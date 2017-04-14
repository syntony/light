import {Component, Input,  OnInit} from '@angular/core';
import {Review} from "./review";
import {ReviewService} from "./review.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() productId: number;
  reviews: Review[] = [];
  starsCount: number;

  constructor(private reviewService: ReviewService) { }

  getReviews(id: number) {
    this.reviewService.getReviews(id).subscribe(
      reviews => this.reviews = reviews,
      error => console.log(<any>error));
  }

  sendReview(rate:number, text: any){
    this.reviews.unshift({
    'rate': rate,
    'text': text,
    'created_by': {'username': localStorage.getItem('current_user')},
    'created_at': Date.now().toString()
  });

    this.reviewService.sendReview(this.productId, rate, text );
  }

  ngOnInit() {
    this.getReviews(this.productId);
  }
}
