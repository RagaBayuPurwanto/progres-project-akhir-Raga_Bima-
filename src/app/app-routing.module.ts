import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';

const router: Routes = [
    { path: 'accomodation', component: AccomodationComponent },
    { path: 'celebrations', component: CelebrationsComponent },
    { path: 'food-and-beverage', component: FoodAndBeverageComponent },
    { path: 'foodandbeverage',
        redirectTo: 'food-and-beverage',
        pathMatch: 'full' },
    { path: 'lifestyle', component: LifestyleComponent },
    { path: 'offers', component: OffersComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', component: HomeComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
