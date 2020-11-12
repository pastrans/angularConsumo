import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor.model';
import { AutoresService } from 'src/app/service/autores/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styles: [
  ]
})
export class AutoresComponent implements OnInit {
  autores:Autor[];
  autorCargado : Autor = new Autor();
  indice: number;
  cargando : boolean = true;

  constructor( private autoresService: AutoresService) {

   }

  ngOnInit(): void {
    this.autoresService.getAutores()
      .subscribe( (data: Autor[]) => {
        this.autores = data;
        this.cargando = false;
      });
  }
  eliminar(){
    this.autores.splice(this.indice, 1);
    this.autoresService.eliminar( this.autorCargado.id).subscribe( respuesta => { console.log(respuesta)});
  }
  cargar(autor :Autor, posicion: number){
    this.autorCargado =  autor;
    this.indice=posicion;
  }

}
