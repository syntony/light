import {Routes, RouterModule} from "@angular/router";

import { ProductListComponent } from "./products/product-list/product-list.component";
import { ProductPageComponent } from './products/product-page/product-page.component';
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LogoutComponent } from "./auth/logout/logout.component";
import { AuthGuard } from './auth/auth.guard';


const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductPageComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

