import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private usuariosUrl = 'assets/baseDatos.json';


  constructor(private http: HttpClient) { }


  LoginAuthenticacion(usuario: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.usuariosUrl).pipe(
      map(usuariosJson => {
        const usuariosLocales = JSON.parse(localStorage.getItem("usuariosExtras") || "[]");

        const todosUsuarios = [...usuariosJson, ...usuariosLocales];

        const encontrado = todosUsuarios.find(u => u.email === usuario && u.password === password);

        if (encontrado) {
          localStorage.setItem("user", usuario);
          return true;
        }
        return false;
      })
    );
  }

  sessionInit(): boolean {
    return localStorage.getItem("user") !== null;
  }

  logOut(): void {
    localStorage.removeItem("user");
  }
}