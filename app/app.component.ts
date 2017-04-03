import {Component} from "angular2/core";
import {PeliculasListComponent} from "./components/peliculas-list.component";
import {PeliculasFooterComponent} from "./components/peliculas-footer.component";
import {ContactoComponent} from "./components/contacto.component";
import {CrearPeliculaComponent} from "./components/crear-pelicula.component";

import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
    selector: "mi-app",
    templateUrl:"app/view/peliculas.html",
    directives:[PeliculasListComponent,
                PeliculasFooterComponent,
                CrearPeliculaComponent,
                ROUTER_DIRECTIVES,
                ContactoComponent],
  })

@RouteConfig([
  {path: "/peliculas", name:"Peliculas", component: PeliculasListComponent, useAsDefault: true},
  {path: "/contacto", name:"Contacto", component: ContactoComponent},
  {path: "/crear-pelicula", name:"CrearPelicula", component: CrearPeliculaComponent},
])

export class AppComponent{
  public titulo:string = "Peliculas con Angular 2";


}