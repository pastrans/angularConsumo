import { NgModule } from '@angular/core';


import { Routes, RouterModule} from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { AutoresComponent } from './components/autores/autores.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { AutorComponent } from './components/autor/autor.component';
import { ArticuloComponent } from './components/articulo/articulo.component';


const routes: Routes =[
  {path: 'home', component: HomeComponent},
  {path: 'autores',  component: AutoresComponent},
  {path: 'autor/agregar',  component: AutorComponent},
  {path: 'autor/editar/:id',  component: AutorComponent},
  {path: 'articulo/agregar',  component: ArticuloComponent},
  {path: 'articulo/editar/:id',  component: ArticuloComponent},
  {path: 'articulos',  component: ArticulosComponent},
  {path: '**', pathMatch: 'full', redirectTo :'reactivos' }
];
@NgModule( {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
} )
export class AppRoutingModule{

}
