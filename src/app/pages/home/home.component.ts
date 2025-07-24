import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { CarruselComponent } from "../../component/carrusel/carrusel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CarruselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
