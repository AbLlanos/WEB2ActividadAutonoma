import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { CarruselComponent } from "../../component/carrusel/carrusel.component";
import { HeroComponent } from "../../component/hero/hero.component";
import { ServicesComponent } from "../../component/services/services.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { PreguntaComponent } from "../../component/pregunta/pregunta.component";
import { PatrocinadoresComponent } from "../../component/patrocinadores/patrocinadores.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CarruselComponent, HeroComponent, ServicesComponent, FooterComponent, PreguntaComponent, PatrocinadoresComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
