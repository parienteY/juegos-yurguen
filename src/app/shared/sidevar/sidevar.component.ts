import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-sidevar',
  templateUrl: './sidevar.component.html',
  styleUrls: ['./sidevar.component.css']
})
export class SidevarComponent implements OnInit {
  
usuario:Usuario = {
    nombre:'',
    apellido:'',
    email:'',
    password:'',
    id:''
}

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.usuario = this.appService.obtenerUsuario();
  }

}
