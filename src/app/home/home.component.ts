import { Component ,inject} from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { Foodrecipe } from '../foodrecipe';
import { CardLayoutComponent } from '../card-layout/card-layout.component';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CardLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foodRecipe:Foodrecipe[]=[];
  recipeService:RecipeService=inject(RecipeService);
  constructor(){
    this.foodRecipe=this.recipeService.getAllRecipe();
  }
}