import { Routes } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

export const routes: Routes = [
    { path: 'update/:id', component: RecipeFormComponent ,title:"My Recipes"},
    { path: '', component: HeroPageComponent ,title:"RecipeFinder-One Stop for all the recipe"},
    { path: 'detail/:id', component: DetailPageComponent },
    { path: 'home', component: HeroPageComponent ,title:"RecipeFinder-One Stop for all the recipe"},
    { path: 'create', component: RecipeFormComponent ,title:"My Recipes"}

];
