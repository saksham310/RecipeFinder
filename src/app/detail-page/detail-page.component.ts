import { Component,inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { Foodrecipe } from '../foodrecipe';
import { RecipeService } from '../recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})
export class DetailPageComponent {

box:string="ingredient";
recipe:Foodrecipe|undefined;
recipeService:RecipeService=inject(RecipeService);
router:ActivatedRoute=inject(ActivatedRoute);
 constructor(){
  const id=Number(this.router.snapshot.params['id']);
  this.recipe=this.recipeService.getIdRecipe(id);
  console.log(this.recipe?.ingredients);
 }
getInstruction(instructions:string|undefined){
  instructions = instructions?.trim().replace(/\.$/, "");
return instructions?.split(".");


}
getIngredients(ingredient:string|undefined){
  ingredient = ingredient?.trim().replace(/\.$/, "");
  return ingredient?.split(",");
}
toggle(text:string){
  this.box=text;
}

}
