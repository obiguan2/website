import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { pairs } from "rxjs";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  // datos google map
  lat: number = -16.488653;
  lng: number = -68.141724;
  zoom: number = 16.2;
  // datos formulario
  usuario: Object = {
    tipo: "",
    origen: "",
    destino: "",
    fecha: null,
    nboletos: null,
    nombre: null,
    apellido: null,
    correo: null,
    nit: null
  };
  tipos: string[] = ["Soloa ida", "Ida y Vuelta"];
  origenes = [
    {
    pais: "Bolivia",
    nombre: "La Paz (BO)"
    }
  ];
  destinos = [
    {
      pais: "Chile",
      nombre: "Antofagasta (CL)"
    },
    {
      pais: "Chile",
      nombre: "Arequipa (PE)"
    },
    {
      pais: "Chile",
      nombre: "Arica (CL)"
    },
    {
      pais: "Argentina",
      nombre: "Buenos Aires (AR)"
    },
    {
      pais: "Bolivia",
      nombre: "Cochabamba (BO)"
    },
    {
      pais: "Bolivia",
      nombre: "Copacabana (BO)"
    },
    {
      pais: "Peru",
      nombre: "Cusco (PE)"
    },
    {
      pais: "Peru",
      nombre: "Lima (PE)"
    },
    {
      pais: "Peru",
      nombre: "Machu Picchu (PE)"
    },
    {
      pais: "Bolivia",
      nombre: "Oruro (BO)"
    },
    {
      pais: "Bolivia",
      nombre: "Potosi (BO)"
    },
    {
      pais: "Bolivia",
      nombre: "San Jose de Chiquitos (BO)"
    },
    {
      pais: "Bolivia",
      nombre: "Santa Cruz (BO)"
    },
    {
      pais: "Brazil",
      nombre: "Sao Paulo (BR)"
    },
    {
      pais: "Bolivia",
      nombre: "Sucre (BO)"
    },
    {
      pais: "Bolivia",
      nombre: "Tarija (BO)"
    },
    {
      pais: "Bolivia",
      nombre: "Tiwanaku (BO)"
    },
    {
      pais: "Bolivia",
      nombre: "Tupiza (BO)"
    },
    {
      pais: "Peru",
      nombre: "Urubamba (PE)"
    },
    {
      pais: "Bolivia",
      nombre: "Uyuni (BO)"
    },
    {
      pais: "Bolivia",
      nombre: "Villamontes (BO)"
    },
    {
      pais: "Bolivia",
      nombre: "Villazon (BO)"
    },
    {
      pais: "Bolivia",
      nombre: "Yacuiba (BO)"
    }
  ];
  constructor() {}

  guardar(forma: NgForm) {
    console.log("Formulario posteado");
    console.log("ngForm", forma);
    console.log("valor de la forma", forma.value);
    console.log("usuario", this.usuario);
  }
}
