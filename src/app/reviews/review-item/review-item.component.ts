import {Component, Input, OnInit} from '@angular/core';

import {Review} from "../review";

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit{
  @Input() review: Review;
  @Input() reviewId: number;
  user: string;

  ngOnInit() {
    let array = JSON.stringify(this.review.created_by);
    let current_user = '';
    JSON.parse(array, function(k, v) {
      if (k == 'username') {
         current_user = v;
      }
    });
    this.user = current_user;
  }
}
