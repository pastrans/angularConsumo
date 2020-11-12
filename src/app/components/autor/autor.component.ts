import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  formulario:FormGroup;
  esEditar : boolean = true;
  mensaje ;boolean =false;
  constructor( private autoresService: AutoresService,
               private route: ActivatedRoute,
               private fb : FormBuilder,
               private router: Router
                ) {
                  this.crearFormulario();



   }

  ngOnInit(): void {
    console.log(this.router.url);
    const id: string = this.route.snapshot.paramMap.get('id');
    if(id == null){
      this.esEditar= false;
    }else{
      this.autoresService.getAutor(id)
       .subscribe( (data: Autor) => {this.autor = data; this.cardarDatos();});
    }
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      nombre   :['',Validators.required,],
      apellido :['',[Validators.required, Validators.minLength(3)],]
    })
  }
  cardarDatos(){
    this.formulario.reset({
      nombre: `${this.autor.nombre}`,
      apellido:` ${this.autor.apellido}`
    });

  }
  guardar(){
    if( this.formulario.invalid){
      return Object.values(this.formulario.controls).forEach( control =>{
        if( control instanceof  FormGroup){
         Object.values(control.controls).forEach( control=> control.markAsTouched())
        }else {
         control.markAsTouched();
        }
     })
   }
   if(this.esEditar){this.autoresService.ActualizarAutor( this.valoresForm())
      .subscribe(
        respuesta =>{
        this.mensaje = true;
        }
       );
   }else{
    this.autoresService.agregarAutor( this.valoresForm()).subscribe( );
    this.autor = new Autor();
    this.crearFormulario();
    this.mensaje = true;
   }

  }
  ocultar(){
    this.mensaje =false;
  }

  valoresForm() : Autor{
    let autor1:Autor = new Autor();
    autor1.nombre= this.formulario.get('nombre').value;
    autor1.apellido= this.formulario.get('apellido').value;
    autor1.id = this.autor.id;
  return autor1
  }

  get apellidoInvaldio(){

    return this.formulario.get('apellido').invalid && this.formulario.get('apellido').touched
  }
  get nombreInvaldio(){

    return this.formulario.get('nombre').invalid && this.formulario.get('nombre').touched
  }

}
