import { Routes } from '@angular/router';
import { HomeComponent } from './displa/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { HeroPageComponent } from './hero-page/hero-page.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent ,title:"My Recipes"},
    { path: '', component: HeroPageComponent ,title:"RecipeFinder-One Stop for all the recipe"},
    { path: 'detail/:id', component: DetailPageComponent },
];
