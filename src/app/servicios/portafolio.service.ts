import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { personas } from '../model/personas.model'; 

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  URL = 'http://localhost:8080/personas';

  constructor( private http:HttpClient) { }

    public getPersona():Observable<personas>{
      return this.http.get<personas>(this.URL +'/traer/perfil');
    }

    public obtenerDatos():Observable<any>{
      return this.http.get('./assets/data/data.json');
    }
}



