import {Input, Component,inject } from '@angular/core';
import { Foodrecipe } from '../foodrecipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-card-layout',
  standalone: true,
  imports: [],
  templateUrl: './card-layout.component.html',
  styleUrl: './card-layout.component.css'
})
export class CardLayoutComponent {
@Input() foodList!:Foodrecipe;
recipeService:RecipeService=inject(RecipeService);

delete(event:MouseEvent,id:number):void{
  event.preventDefault();
  this.recipeService.deleteRecipe(id);
  this.recipeService.saveToLocalStorage();
}
}
