import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent ,title:"My Recipes"},
    { path: '', component: LandingPageComponent ,title:"RecipeFinder-One Stop for all the recipe"},
    { path: 'detail/:id', component: DetailPageComponent },
];
