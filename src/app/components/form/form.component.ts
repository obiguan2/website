import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
// firebase
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  codigo;

  estado: boolean = false;  
  // datos formulario
  @Input() usuario: User = {
    tipo: "",
    origen: "",
    destino: "",
    fecha: null,
    nboletos: null,
    nombre: null,
    apellido: null,
    correo: null,
    nit: null,
    codigo: null
  } as User;
  tipos: string[] = ["Solo ida", "Ida y Vuelta"];
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

  constructor( public _userService: UserService ) { 
    
  }
  ngOnInit() {
    this.usuario["codigo"] = this.generar(5);
    this.estado = false;
    // this.nit = "";
    this.codigo = "";
  }
  guardar(forma: NgForm) {
    this.codigo = this.usuario['codigo'];
    // this.nit = this.usuario['nit'];
    // console.log("ngForm", forma); // ver errores
    console.log("Guardado en la base de datos", this.usuario);
    this._userService.addUser( this.usuario );
    this.usuario = {} as User; // limpiar
    this.estado = true;
  }
  generar(longitud: number) {
    let caracteres = "ABCDEFGHIJKLMNPQRTUVWXYZ12346789";
    let aleatorio = "";
    for (let i=0; i<longitud; i++) aleatorio += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
    return aleatorio;
  }

}
// ayuda
// https://blog.ng-classroom.com/blog/angular/compartiendo-info-componentes/