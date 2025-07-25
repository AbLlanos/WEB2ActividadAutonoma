import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { MisionComponent } from "../../component/mision/mision.component";
import { VisionComponent } from "../../component/vision/vision.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { ValoresComponent } from "../../component/valores/valores.component";
import { SomosComponent } from "../../component/somos/somos.component";
import { PatrocinadoresComponent } from "../../component/patrocinadores/patrocinadores.component";

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [NavbarComponent, MisionComponent, VisionComponent, FooterComponent, ValoresComponent, SomosComponent, PatrocinadoresComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
