import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private usuariosUrl = 'http://localhost:3000/usuarios';


  constructor(private http: HttpClient) { }

  LoginAuthenticacion(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.usuariosUrl}?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          localStorage.setItem('user', JSON.stringify(users[0]));
          return true;
        }
        return false;
      })
    );
  }

  RegistrarUsuario(nuevoUsuario: any): Observable<any> {
    return this.http.post(this.usuariosUrl, nuevoUsuario);
  }


  obtenerUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.usuariosUrl);
  }


  sessionInit(): boolean {
    return localStorage.getItem("user") !== null;
  }

  logOut(): void {
    localStorage.removeItem("user");
  }
}