import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";
import { LocalStorageModule } from 'angular-2-local-storage';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductService } from "./products/product.service";
import { ProductPageComponent } from './products/product-page/product-page.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RatingModule } from "ng2-rating";
import { ReviewService } from "./reviews/review.service";
import { ReviewItemComponent } from './reviews/review-item/review-item.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AuthService } from "./auth/auth.service";
import { OrderByDatePipe } from './common/order-by-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductPageComponent,
    ReviewsComponent,
    ReviewItemComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    OrderByDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    RatingModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    })
  ],
  providers: [
    ProductService,
    ReviewService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
