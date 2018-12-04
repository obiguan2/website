import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { FormComponent } from '../form/form.component';
import { FormBuscarComponent } from '../form-buscar/form-buscar.component';
import { FormEliminarComponent } from '../form-eliminar/form-eliminar.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  // datos google map
  lat: number = -16.488653;
  lng: number = -68.141724;
  zoom: number = 16.2;
  // formcomponent
  @ViewChild('formulario') formu : FormComponent;
  @ViewChild('formularioBuscar') formuBuscar : FormBuscarComponent;
  @ViewChild('formularioEliminar') formuEliminar : FormEliminarComponent;

  constructor( ) {

  }

  ngOnInit() {
    
  }

}
