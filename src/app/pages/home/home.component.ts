import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from 'src/app/interfaces/juego.interface';
import { PagesService } from '../services/pages.service';


interface Opcion {
  nombre:string;
  valor:string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  juegos:Juego[] = [];
  valorSeleccionado:string='todo';
  opciones:Opcion[] = [
    {
      nombre:'Todo',
      valor:'todo'
    },
    {
      nombre:'Fecha',
      valor:'release-date'
    },
    {
      nombre:'Popularidad',
      valor:'popularity'
    },
    {
      nombre:'Alfabeticamente',
      valor:'alphabetical '
    },
    {
      nombre:'Relevancia',
      valor:'relevance'
    }
  ]
  constructor(private pagesService: PagesService, private router:Router) { }
  termino:string = '';

  ngOnInit(): void {
    this.getJuegos();
  }

  getJuegos(){
    this.pagesService.obtenerJuegos()
    .subscribe(res => this.juegos = res);
  }

  ordenarJuegos(){
    if(this.valorSeleccionado!=='todo'){
      this.pagesService.ordenarJuegos(this.valorSeleccionado)
       .subscribe(res => this.juegos = res);
    }else{
      this.getJuegos();
    }
    }
  verJuego(id:number){
    this.router.navigateByUrl(`/main/${id}`)
  }

}

