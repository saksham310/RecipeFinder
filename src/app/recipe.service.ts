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
      },
        {
          id: 4,
          description: "Tangy and aromatic shrimp skewers marinated in lemon and garlic.",
          ingredients: ["Shrimp", "Garlic", "Lemon Zest", "Lemon Juice", "Olive Oil", "Dijon Mustard", "Honey", "Salt", "Black Pepper"],
          name: "Lemon Garlic Shrimp Skewers",
          instructions: "In a bowl, whisk together minced garlic, lemon zest, lemon juice, olive oil, Dijon mustard, honey, salt, and black pepper. Marinate shrimp in the mixture for 30 minutes. Thread onto skewers and grill until cooked through.",
          category: "Seafood",
          photo: `${this.baseUrl}`
        },
        {
          id: 5,
          description: "A gourmet pizza topped with garlic shrimp, spinach, and gooey mozzarella cheese.",
          ingredients: ["Pizza Dough", "Shrimp", "Garlic", "Olive Oil", "Spinach", "Mozzarella Cheese", "Red Pepper Flakes", "Parmesan Cheese"],
          name: "Garlic Shrimp and Spinach Pizza",
          instructions: "Preheat oven to 425°F (220°C). Roll out pizza dough and brush with olive oil. Spread minced garlic over the dough, then top with cooked shrimp, fresh spinach, mozzarella cheese, and a sprinkle of red pepper flakes and Parmesan cheese. Bake until crust is golden and cheese is bubbly.",
          category: "Pizza",
          photo: `${this.baseUrl}`
        },
        {
          id: 6,
          description: "Rich and creamy fettuccine Alfredo with succulent garlic shrimp.",
          ingredients: ["Shrimp", "Garlic", "Butter", "Heavy Cream", "Parmesan Cheese", "Fettuccine Pasta", "Salt", "Black Pepper", "Nutmeg", "Parsley"],
          name: "Garlic Shrimp Fettuccine Alfredo",
          instructions: "Cook fettuccine pasta according to package instructions. In a skillet, sauté minced garlic in butter until fragrant. Add shrimp and cook until pink. Stir in heavy cream, Parmesan cheese, salt, pepper, and a pinch of nutmeg. Toss with cooked pasta and garnish with chopped parsley.",
          category: "Pasta",
          photo: `${this.baseUrl}`
        },
        {
          id: 7,
          description: "Light and refreshing lettuce wraps filled with garlic shrimp and crunchy vegetables.",
          ingredients: ["Shrimp", "Garlic", "Butter", "Lettuce Leaves", "Carrots", "Cucumber", "Mint Leaves", "Rice Noodles", "Hoisin Sauce"],
          name: "Garlic Shrimp Lettuce Wraps",
          instructions: "Cook rice noodles according to package instructions. In a skillet, cook minced garlic in butter until golden. Add shrimp and cook until pink. Assemble lettuce wraps with shrimp, julienned carrots, sliced cucumber, mint leaves, and rice noodles. Drizzle with hoisin sauce before serving.",
          category: "Appetizer",
          photo: `${this.baseUrl}`
        },
        {
          id: 8,
          description: "A vibrant salad featuring garlic shrimp, creamy avocado, and tangy dressing.",
          ingredients: ["Shrimp", "Garlic", "Olive Oil", "Mixed Greens", "Avocado", "Cherry Tomatoes", "Red Onion", "Feta Cheese", "Balsamic Vinaigrette"],
          name: "Garlic Shrimp and Avocado Salad",
          instructions: "Sauté minced garlic in olive oil until fragrant. Add shrimp and cook until pink. Assemble mixed greens with sliced avocado, halved cherry tomatoes, thinly sliced red onion, crumbled feta cheese, and garlic shrimp. Drizzle with balsamic vinaigrette before serving.",
          category: "Salad",
          photo: `${this.baseUrl}`
        },
        {
          id: 9,
          description: "Creamy risotto studded with garlic shrimp and tender asparagus spears.",
          ingredients: ["Shrimp", "Garlic", "Arborio Rice", "White Wine", "Chicken Broth", "Asparagus", "Parmesan Cheese", "Butter", "Lemon Zest", "Fresh Thyme"],
          name: "Garlic Shrimp and Asparagus Risotto",
          instructions: "In a saucepan, simmer chicken broth. In a separate pot, sauté minced garlic in butter until golden. Add Arborio rice and cook until translucent. Deglaze with white wine, then gradually add hot chicken broth, stirring constantly until absorbed and rice is creamy. Stir in cooked shrimp, blanched asparagus, grated Parmesan cheese, lemon zest, and fresh thyme. Serve hot.",
          category: "Risotto",
          photo: `${this.baseUrl}`
        },
        {
          id: 10,
          description: "A delightful twist on classic garlic shrimp, featuring the zesty flavor of lemon and the kick of chili flakes.",
          ingredients: ["Shrimp", "Garlic", "Butter", "Lemon Zest", "Lemon Juice", "Chili Flakes", "Parsley", "Salt", "Black Pepper"],
          name: "Lemon Garlic Chili Shrimp",
          instructions: "Melt butter in a skillet over medium heat. Add minced garlic and cook until golden. Stir in shrimp and cook until pink. Add lemon zest, lemon juice, chili flakes, salt, and black pepper. Cook for an additional minute. Sprinkle with chopped parsley before serving.",
          category: "Seafood",
          photo: `${this.baseUrl}`
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
