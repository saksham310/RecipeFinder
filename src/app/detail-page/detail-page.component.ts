import { Component,inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { Foodrecipe } from '../foodrecipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})
export class DetailPageComponent {
recipe:Foodrecipe|undefined;
recipeService:RecipeService=inject(RecipeService);
router:ActivatedRoute=inject(ActivatedRoute);
 constructor(){
  const id=Number(this.router.snapshot.params['id']);
  this.recipe=this.recipeService.getIdRecipe(id);
 }

}
