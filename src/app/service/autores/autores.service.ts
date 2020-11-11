import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor( private http: HttpClient) {

  }

  getQuery( query: string ): any {

    const url = `http://127.0.0.1:8000/api/${ query }`;

    return this.http.get(url);
  }

  getAutores(): any {
    return this.getQuery('autors');
  }
  getAutor( id :string): any {
    return this.getQuery(`autors/${id}`);
  }



}
