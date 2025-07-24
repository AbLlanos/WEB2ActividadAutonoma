import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { GaleryComponent } from "../../component/galery/galery.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NavbarComponent, GaleryComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
