import { Injectable } from '@angular/core';
import { Foodrecipe } from './foodrecipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  readonly key='recipe';
  baseUrl:string ='/assets/card.jpeg';
  foodRecipe:Foodrecipe[]=[];
  constructor(){
    const data=localStorage.getItem(this.key);
    if(data){
      this.foodRecipe=JSON.parse(data) as Foodrecipe[];
     
    }
    else{
      
      this.foodRecipe=[
     
        {
          id: 1,
          description: "A zesty lemon-infused chicken delight",
          ingredients: "Chicken breasts, Lemons, Olive oil, Garlic, Salt, Pepper",
          name: "Lemon Chicken",
          instructions: "Preheat your oven to 375°F (190°C). Place chicken breasts in a baking dish. In a small bowl, combine the juice of two lemons, minced garlic, olive oil, salt, and pepper. Pour the lemon mixture over the chicken, ensuring it's evenly coated. Cover the baking dish with foil and bake for 25-30 minutes, or until the chicken is cooked through. Remove the foil and broil for an additional 2-3 minutes to get a golden brown color on top. Serve hot, garnished with fresh lemon slices and chopped parsley if desired.",
          category: "Meat"
        },
          {
            id: 2,
            description: 'A savory garlic shrimp dish',
            ingredients: 'Shrimp, Garlic, Butter, Parsley, Lemon Juice',
            name: 'Garlic Shrimp',
            instructions: 'Peel and devein the shrimp. Melt butter in a skillet over medium heat. Add minced garlic and cook until fragrant. Add shrimp to the skillet and cook until pink and opaque. Sprinkle with chopped parsley and lemon juice before serving.',
            category: 'Seafood',
          },
          {
            id: 3,
            description: 'A classic beef stew with hearty vegetables',
            ingredients: 'Beef Stew Meat, Carrots, Potatoes, Onion, Beef Broth, Tomato Paste, Garlic, Bay Leaves, Thyme, Salt, Pepper',
            name: 'Beef Stew',
            instructions: 'Brown the beef stew meat in a large pot. Add chopped onions and garlic, cooking until softened. Stir in tomato paste, beef broth, bay leaves, and thyme. Add chopped carrots and potatoes, simmer until vegetables are tender. Season with salt and pepper to taste before serving.',
            category: 'Stew',
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
updateRecipe(id:number,newRecipe:Foodrecipe){
  const index=this.foodRecipe.findIndex((food)=>food.id===id);
  if(index !==-1){
    this.foodRecipe[index]=newRecipe;
    this.saveToLocalStorage();
  }
}
addRecipe(newRecipe:Foodrecipe){
  this.foodRecipe.push(newRecipe);
  this.saveToLocalStorage();
}
saveToLocalStorage(){
  localStorage.setItem(this.key,JSON.stringify(this.foodRecipe));
}
}
