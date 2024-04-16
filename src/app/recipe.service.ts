import { Injectable } from '@angular/core';
import { Foodrecipe } from './foodrecipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  baseUrl:string ='/assets/hero1.png';
  foodRecipe:Foodrecipe[]=[{
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
    instructions: "1. Peel and devein the shrimp. 2. Melt butter in a skillet over medium heat. 3. Add minced garlic and cook until fragrant. 4. Add shrimp to the skillet and cook until pink and opaque. 5. Sprinkle with chopped parsley and lemon juice before serving.",
    category: "Seafood",
    photo:`${this.baseUrl}`
  },{
    id: 3,
    description: "A classic beef stew with hearty vegetables",
    ingredients: ["Beef Stew Meat", "Carrots", "Potatoes", "Onion", "Beef Broth", "Tomato Paste", "Garlic", "Bay Leaves", "Thyme", "Salt", "Pepper"],
    name: "Beef Stew",
    instructions: "1. Brown the beef stew meat in a large pot. 2. Add chopped onions and garlic, cooking until softened. 3. Stir in tomato paste, beef broth, bay leaves, and thyme. 4. Add chopped carrots and potatoes, simmer until vegetables are tender. 5. Season with salt and pepper to taste before serving.",
    category: "Stew",
    photo:`${this.baseUrl}`
  }
  
  ];
getAllRecipe():Foodrecipe[]{
  return this.foodRecipe;
}
getIdRecipe(id:number):Foodrecipe|undefined{
  return this.foodRecipe.find((food)=>food.id===id);
}

}
