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
  button:string="Add";
recipe=new FormGroup({
  id:new FormControl(),
  name:new FormControl(''),
  description:new FormControl(''),
  ingredients:new FormControl(''),
  instructions:new FormControl(''),
  category:new FormControl('')
})

recipeService:RecipeService=inject(RecipeService);
constructor(private route:ActivatedRoute){
  this.id=Number(this.route.snapshot.params['id']);
  if(this.id){
   this.isNew=false;
   this.button="Update";
   const food=this.recipeService.getIdRecipe(this.id) as Foodrecipe;
    this.recipe.setValue({
      id: food.id,
    name: food.name, 
    description: food.description,
    ingredients: food.ingredients,
    category:food.category,
    instructions:food.instructions
});
    console.log(this.recipe);

  }
  else{
    console.log("This is add");
  }
}
onSubmit(){
 
  const newId=parseInt(this.recipe.get('id')?.value);
  console.log(typeof(newId));
  
  const food = {
    id: newId,
    name: this.recipe.get('name')?.value,  // Access other form control values
    description: this.recipe.get('description')?.value,
    ingredients: this.recipe.get('ingredients')?.value,
    instructions: this.recipe.get('instructions')?.value,
    category: this.recipe.get('category')?.value,
  };
console.log(typeof(food.id));
if(this.isNew){
  this.recipeService.addRecipe(food as Foodrecipe);
  window.alert("Recipe Successfull Added");
 }
 else{
  this.recipeService.updateRecipe(this.id,food as Foodrecipe)
  window.alert("Recipe Successfull Updated");
 }
}
}