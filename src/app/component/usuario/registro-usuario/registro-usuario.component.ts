import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { AutenticacionService } from '../../../services/autenticacion.service';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent implements OnInit {

  enviado: boolean = false;

  usuarioService = inject(AutenticacionService);

  usuariosRegistrados: any[] = [];

  fb = inject(FormBuilder);

  registroForm: FormGroup = this.fb.group({
    nombre: ["", Validators.required],
    profesion: ["", Validators.required],
    telefono: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  camposSinLlenar = () => {
    return !this.enviado && Object.values(this.registroForm).some(valor => valor.trim?.() !== "");
  }

  registrar() {
    if (this.registroForm.valid) {
      this.enviado = true;
      const nuevoUsuario = this.registroForm.value;

      this.usuarioService.RegistrarUsuario(nuevoUsuario).subscribe(() => {
        alert("Registrado exitosamente.");
        this.registroForm.reset();
        this.cargarUsuarios();
        this.router.navigateByUrl("/login");
      });
    } else {
      this.registroForm.markAllAsTouched();
      console.log("Formulario no válido");
    }
  }

  cargarUsuarios() {
    this.usuarioService.obtenerUsuarios().subscribe(data => {
      this.usuariosRegistrados = data;
    });
  }
}
