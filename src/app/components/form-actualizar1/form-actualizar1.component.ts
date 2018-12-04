import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// firebase
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
// list
import { FormBuscarComponent } from '../form-buscar/form-buscar.component';

@Component({
  selector: 'app-form-actualizar1',
  templateUrl: './form-actualizar1.component.html',
  styleUrls: ['./form-actualizar1.component.css']
})
export class FormActualizar1Component implements OnInit {
  codigo;
  // datos de editar
  editandoUser: User;
  
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

  constructor( public _userService: UserService, public lista: FormBuscarComponent ) { }

  ngOnInit() {
    this.codigo = "";
  }
  actualizar(forma: NgForm) {
    // console.log("ngForm", forma); // ver errores
    console.log("User Actualizado",this.lista.editandoUser);
    this._userService.updateUser( this.lista.editandoUser );
    this.lista.editandoUser = {} as User;
    this.lista.editando = false;
  }

}
