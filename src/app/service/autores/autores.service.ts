import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autor } from '../../models/autor.model';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
   url: string  = `http://127.0.0.1:8000/api/autors`;
  constructor( private http: HttpClient) {

  }

  getQuery( query: string ): any {
    return this.http.get(`${this.url}${ query }`);
  }
  setQuery( query: string, autor:Autor, isInsetar=true ): any {
    // console.log(autor);
    const autorTemp = {
      ...autor
    };
    delete autorTemp.id;
    if(isInsetar){
      return this.http.post(`${this.url}${ query }`, autorTemp);
    }else{
      // console.log(`${this.url}${ query }`);
      console.log(autorTemp);
      console.log(this.http.put(`${this.url}${ query }`, autorTemp));
      return this.http.put(`${this.url}${ query }`, autorTemp);
    }
  }

  getAutores(): any {
    return this.getQuery('');
  }
  getAutor( id :string): any {
    return this.getQuery(`/${id}`);
  }
  ActualizarAutor( autor :Autor): any {
    return this.setQuery(`/${autor.id}`, autor, false);
  }
  agregarAutor( autor :Autor): any {
    return this.setQuery(``, autor);
  }
  eliminar( id :number): any {
    console.log(`${this.url}/${ id }`);
    return this.http.delete(`${this.url}${ id }`);
  }





}
