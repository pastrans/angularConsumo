import { Component } from '@angular/core';
import { AutoresService } from '../../service/autores/autores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {
  autores: any[] = [];

  constructor( private autoresService: AutoresService) {
    console.log("todo bien");

    this.autoresService.getAutores()
      .subscribe( (data: any) => this.autores = data);

   }

}
