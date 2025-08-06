import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <-- importar FormsModule
import { Router } from '@angular/router';
import { AutenticacionService } from '../../../services/autenticacion.service';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-login-usuario',
  standalone: true,
  imports: [FormsModule, NavbarComponent, FooterComponent],  // <-- agregar aquí
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private authServicio: AutenticacionService, private router: Router) { }

  Login() {
    this.authServicio.LoginAuthenticacion(this.email, this.password).subscribe(sesionExitosa => {
      if (sesionExitosa) {
        const redireccion = localStorage.getItem("redirectUrl") || "/productos";
        localStorage.removeItem("redirectUrl");
        this.router.navigateByUrl(redireccion);
      } else {
        this.error = "Usuario o contraseña incorrectos.";
      }
    });
  }
}
