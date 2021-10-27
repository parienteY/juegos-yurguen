import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: Usuario[] = [{
      id:'789456123',
      nombre:'Yurguen Enrique',
      apellido:'Pariente Ulloa',
      email:'yurguen@gmail.com',
      password:'123456'
  }]
  
  constructor() { }

  buscarUsuario(id : string): Usuario{
    return this.usuario.find(user => user.id === id)!;
  }

  login(email:string, password:string):string{
    const usuario = this.usuario.find(user => user.email === email);
    if(!usuario){
      return 'No existe el email';
    }else if(password !== usuario.password){
      return 'La contrasena no coincide';
    }else{
      localStorage.setItem('id', usuario.id);
      return '';
    }
  }

  register(nombre:string, apellido:string, email:string, password:string){
    const id = (Math.random()*(20000-10000)+10000).toString();
    const newUser = { nombre, apellido, email, password, id};
    localStorage.setItem('id', id);
    this.usuario.push(newUser);
  }
}
