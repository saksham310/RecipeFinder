import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Foodrecipe } from '../foodrecipe';
import { RecipeService } from '../recipe.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
  id:number;
  isNew:boolean=true;
recipe=new FormGroup({
  id:new FormControl(),
  name:new FormControl(''),
  description:new FormControl(''),
  ingredient:new FormControl(''),
  instruction:new FormControl(''),
  category:new FormControl('')
})

recipeService:RecipeService=inject(RecipeService);
constructor(private route:ActivatedRoute){
  this.id=Number(this.route.snapshot.params['id']);
  if(this.id){
   this.isNew=false;
   const food=this.recipeService.getIdRecipe(this.id) as Foodrecipe;
    this.recipe.setValue({
      id: food.id,
    name: food.name, 
    description: food.description,
    ingredient: food.ingredients,
    category:food.category,
    instruction:food.instructions
});
    console.log(this.recipe);

  }
  else{
    console.log("This is add");
  }
}
onSubmit(){
 if(this.isNew){
  this.recipeService.addRecipe(this.recipe.value as Foodrecipe)
  this.recipe.reset;
  window.alert("Recipe Successfull Added");
 }
 else{
  this.recipeService.updateRecipe(this.id,this.recipe.value as Foodrecipe)
 }
}
}