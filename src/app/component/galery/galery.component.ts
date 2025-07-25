import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Producto[]>('assets/productos.json').subscribe(data => {
      this.productos = data;
      console.log(this.productos);
    });
  }

  comprar(producto: Producto): void {
    if (producto.cantidad > 0) {
      producto.cantidad--;
    } else {
      alert('No hay más unidades disponibles');
    }
  }
  
}
