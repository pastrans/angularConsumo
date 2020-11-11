import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from 'src/app/models/autor.model';
import { AutoresService } from 'src/app/service/autores/autores.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  autor:Autor = new Autor();
  constructor( private autoresService: AutoresService,
               private route: ActivatedRoute,
               //private router: Router
                ) {

   }

  ngOnInit(): void {

    const id: string = this.route.snapshot.paramMap.get('id');
    if(id == null){
    }else{
      this.autoresService.getAutor(id)
       .subscribe( (data: Autor) => this.autor = data);
    }

  }

}
