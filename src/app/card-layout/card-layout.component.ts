import {Input, Component } from '@angular/core';
import { Foodrecipe } from '../foodrecipe';

@Component({
  selector: 'app-card-layout',
  standalone: true,
  imports: [],
  templateUrl: './card-layout.component.html',
  styleUrl: './card-layout.component.css'
})
export class CardLayoutComponent {
@Input() foodList!:Foodrecipe;
}
