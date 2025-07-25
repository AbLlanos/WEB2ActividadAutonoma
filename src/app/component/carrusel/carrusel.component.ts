import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  avanzar: number = 1;

  slides = [
    { imgUrl: 'https://colineal.com/cdn/shop/files/Sala-Sky_1600x1200_1.jpg?v=1752615387&width=1000' },
    { imgUrl: 'https://colineal.com/cdn/shop/collections/sala.jpg?v=1742413312&width=1400' },
    { imgUrl: 'https://colineal.com/cdn/shop/collections/sala-madison-1200x628.jpg?v=1706737262&width=1200' },
    
  ];

}
