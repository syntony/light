import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { routing } from "./app.routing";
import { LocalStorageModule } from 'angular-2-local-storage';

import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';

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

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

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
    AuthGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
