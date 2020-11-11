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

  constructor( private autoresService: AutoresService) {

   }

  ngOnInit(): void {
    this.autoresService.getAutores()
      .subscribe( (data: Autor[]) => this.autores = data);
  }

}
