import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor( private http: HttpClient) {
    // tslint:disable-next-line: quotemark
    console.log("todo bien ");
  }

  getQuery( query: string ): any {

    const url = `http://127.0.0.1:8000/${ query }`;

    return this.http.get(url);
  }

  getAutores(): any {
    return this.getQuery('api/autors');
  }


}
