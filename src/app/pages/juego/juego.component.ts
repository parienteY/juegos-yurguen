import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap} from 'rxjs/operators'
import { PagesService } from '../services/pages.service';
import { Juego, Screenshot } from '../../interfaces/juego.interface';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private pagesService:PagesService) { }

  juego!:Juego;
  imagenes:Screenshot[]=[];
  imagen:Screenshot = {
    id:0,
    image:''
  }
  ngOnInit(): void {
    this.obtenerJuego();
  }


  obtenerJuego(){
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> 
        this.pagesService.obtenerJuego(id)
      )
    )
    .subscribe(juego => {
      this.juego=juego;
      this.imagen = juego.screenshots![0];
      this.imagenes = juego.screenshots!.slice(1,juego.screenshots!.length)
    })
  }
}
