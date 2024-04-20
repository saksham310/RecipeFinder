import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { HomeComponent } from '../displa/home.component';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [NavbarComponent,LandingPageComponent,HomeComponent],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

}
