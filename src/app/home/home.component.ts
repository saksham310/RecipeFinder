import { Component ,inject} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { Foodrecipe } from '../foodrecipe';
import { CardLayoutComponent } from '../card-layout/card-layout.component';
import { RecipeService } from '../recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CardLayoutComponent,CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  view:boolean=false;
  foodRecipe:Foodrecipe[]=[];
  filteredFoodRecipe:Foodrecipe[]=[];
  recipeService:RecipeService=inject(RecipeService);
  constructor(){
    this.foodRecipe=this.recipeService.getAllRecipe();
    this.filteredFoodRecipe=this.foodRecipe;
  }
  filter(text:String){
    if(text.trim() === ''){
      this.filteredFoodRecipe=this.recipeService.getAllRecipe();
      return;
    }
    this.filteredFoodRecipe=this.foodRecipe.filter((food)=>food?.name.toLowerCase().includes(text.toLowerCase())||food?.category.toLowerCase().includes(text.toLowerCase()))
  }
  toggle(){
    this.view=!this.view
return this.view
  }
  sortRecipe(event:any){
    const sortOrder=event.target.value;
    if(sortOrder==="asc"){
      this.filteredFoodRecipe.sort((a,b)=>(a.name>b.name)?1:-1);
    }else{
      this.filteredFoodRecipe.sort((a,b)=>(a.name<b.name)?1:-1);
    }

  }
}