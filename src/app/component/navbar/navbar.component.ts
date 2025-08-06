import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public authServicio: AutenticacionService, private router: Router) { }

  get logueado(): boolean {
    return this.authServicio.sessionInit();
  }

  logOut(): void {
    this.authServicio.logOut();
    this.router.navigate(['/login']);
  }
}
