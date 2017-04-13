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

  sendReview(rate:number, text: any){
    this.reviewService.sendReview(this.productId, rate, text );
  }

  getReviews(id: number) {
    this.reviewService.getReviews(id).subscribe(
      reviews => this.reviews = reviews,
      error => console.log(<any>error));
  }

  reload(){
    location.reload();
  }

  ngOnInit() {
    this.getReviews(this.productId);
  }
}
