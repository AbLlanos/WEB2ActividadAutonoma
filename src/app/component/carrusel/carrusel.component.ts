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
    { imgUrl: 'https://www.sportsbusinessjournal.com/Articles/2023/09/13/img-unveils-new-logo/' },
    { imgUrl: 'https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg' },
    { imgUrl: 'https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg' },
    { imgUrl: 'https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg' },
    { imgUrl: 'https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg' },
    { imgUrl: 'https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg' },
  ];

}
