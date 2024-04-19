import { Injectable } from '@angular/core';
import { Foodrecipe } from './foodrecipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  readonly key='recipe';
  baseUrl:string ='/assets/hero1.png';
  foodRecipe:Foodrecipe[]=[];
  constructor(){
    const data=localStorage.getItem(this.key);
    if(data){
      this.foodRecipe=JSON.parse(data) as Foodrecipe[];
     
    }
    else{
      
      this.foodRecipe=[{
        id: 1,
        description:'A delicious lemon chicken',
        ingredients:['Lemon','Chicken'],
        name: 'Lemon Chicken',
        instructions:'Cook nicely.Cook cool',
        category:'Meat',
        photo:`${this.baseUrl}`
      },{
        id: 2,
        description: "A savory garlic shrimp dish",
        ingredients: ["Shrimp", "Garlic", "Butter", "Parsley", "Lemon Juice"],
        name: "Garlic Shrimp",
        instructions: "Peel and devein the shrimp.Melt butter in a skillet over medium heat.Add minced garlic and cook until fragrant.Add shrimp to the skillet and cook until pink and opaque.Sprinkle with chopped parsley and lemon juice before serving.",
        category: "Seafood",
        photo:`${this.baseUrl}`
      },{
        id: 3,
        description: "A classic beef stew with hearty vegetables",
        ingredients: ["Beef Stew Meat", "Carrots", "Potatoes", "Onion", "Beef Broth", "Tomato Paste", "Garlic", "Bay Leaves", "Thyme", "Salt", "Pepper"],
        name: "Beef Stew",
        instructions: "Brown the beef stew meat in a large pot.Add chopped onions and garlic, cooking until softened.Stir in tomato paste, beef broth, bay leaves, and thyme.Add chopped carrots and potatoes, simmer until vegetables are tender.Season with salt and pepper to taste before serving.",
        category: "Stew",
        photo:`${this.baseUrl}`
      }
      
      ];
      this.saveToLocalStorage();

    }
  }
  
getAllRecipe():Foodrecipe[]{
  return this.foodRecipe;
}
getIdRecipe(id:number):Foodrecipe|undefined{
  return this.foodRecipe.find((food)=>food.id===id);
}

deleteRecipe(id:number):void{
  const recipe=this.foodRecipe.findIndex((food)=>food.id===id);
  this.foodRecipe.splice(recipe,1);
}
saveToLocalStorage(){
  localStorage.setItem(this.key,JSON.stringify(this.foodRecipe));
}
}
