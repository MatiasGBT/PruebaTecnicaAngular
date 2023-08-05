import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public usuario: Usuario = {} as Usuario;
  public usuarioEstaLogueado: boolean = false;

  constructor() { }

  public iniciarSesion(): void {
    const usuarioLocalStorage = JSON.parse(localStorage.getItem('usuario') || '[]');
    if (usuarioLocalStorage) {
      this.usuario = usuarioLocalStorage;
      this.usuarioEstaLogueado = true;
    }    
  }

  public registrarse(usuario: Usuario): void {
    this.usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuarioEstaLogueado = true;
  }

  public cerrarSesion(): void {
    if (localStorage.getItem('usuario')) {
      this.usuario = {} as Usuario;
      localStorage.removeItem('usuario');
      this.usuarioEstaLogueado = false;
    }
  }
}
