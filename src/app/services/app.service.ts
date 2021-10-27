import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  
  constructor(private authService:AuthService) { }


  obtenerUsuario(): Usuario{
    const id = localStorage.getItem('id');
    return this.authService.buscarUsuario(id!);
  }

}
