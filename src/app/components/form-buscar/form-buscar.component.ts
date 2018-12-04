import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// firebase
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-form-buscar',
  templateUrl: './form-buscar.component.html',
  styleUrls: ['./form-buscar.component.css']
})
export class FormBuscarComponent implements OnInit {
  users = [];
  editandoUser: User;
  editando: boolean = false;
  sw : boolean;
  mensaje: string = "";
  // datos
  usuario: Object = {
    nit: null,
    codigo: null
  }
  constructor( public _userService: UserService ) { }

  ngOnInit() {
    this._userService.getUsers().subscribe( users => {
      this.users = users;
    });
  }
  buscar(forma: NgForm) {
    //console.log(this.usuario['nit'], " ", this.usuario['codigo']);
    this.sw = true;
    for (let user of this.users) {
      if((this.usuario['nit'] == user.nit) && (this.usuario['codigo'] == user.codigo)) {
        console.log("ENCONTRADO", user);
        this.editandoUser = user;
        this.editando = true;
        this.sw = false;
        this.mensaje = "";
      } 
    }
    if(this.sw){
      this.editando = false;
      this.mensaje =  "Usuario no encontrado Reintente!"
    }
  }

}
