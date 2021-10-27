import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../../interfaces/juego.interface';

const headers = new HttpHeaders()
  .set('x-rapidapi-host', 'free-to-play-games-database.p.rapidapi.com')
  .set('x-rapidapi-key', '4e68db0645msh6be035dc7c1e580p1ec054jsn12f4bbc72057')

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  baseUrl: string = 'https://free-to-play-games-database.p.rapidapi.com/api';
  

  constructor(private http: HttpClient) { }

  obtenerJuegos(): Observable<Juego[]>{
    return this.http.get<Juego[]>(this.baseUrl+'/games', {headers:headers});
  }

  ordenarJuegos(ordenarPor:string):Observable<Juego[]>{
    return this.http.get<Juego[]>(`${this.baseUrl}/games?sort-by=${ordenarPor}`,{headers});
  }

  obtenerJuego(id:number):Observable<Juego>{
    return this.http.get<Juego>(`${this.baseUrl}/game?id=${id}`,{headers})
  }
}
