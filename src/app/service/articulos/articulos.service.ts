import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor( private http: HttpClient) { }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDsnU8IhPdDKrUXuWq7FVMlrNmZrmMJiSyG6fRESINYgAJBBpnLiQ6GThLMuQsxqlLJVavErt4qQAgzvrA'
    });

    return this.http.get(url, { headers });

  }

  // tslint:disable-next-line: typedef
  getArticulos() {
    return this.getQuery('browse/new-releases?limit=20');

  }

}
