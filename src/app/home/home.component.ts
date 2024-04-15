import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { Foodrecipe } from '../foodrecipe';
import { CardLayoutComponent } from '../card-layout/card-layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CardLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl='http://127.0.0.1:8000/media/items/default.jpeg';
  foodRecipe:Foodrecipe={
    id: 1,
    description:'A delicious lemon chicken',
    ingredients:['Lemon','Chicken'],
    name: 'Lemon Chicken',
    instructions:'Cook nicely.Cook cool',
    category:'Meat',
    photo:`${this.baseUrl}`,
  }

}
