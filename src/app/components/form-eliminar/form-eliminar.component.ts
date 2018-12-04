import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// firebase
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-form-eliminar',
  templateUrl: './form-eliminar.component.html',
  styleUrls: ['./form-eliminar.component.css']
})
export class FormEliminarComponent implements OnInit {
  estado : boolean;
  mensaje: string;
  users = [];

  usuario: Object = {
    nit: null,
    codigo: null
  }
  constructor( public _userService: UserService ) { }

  ngOnInit() {
    this._userService.getUsers().subscribe( users => {
      this.users = users;
    });
    this.estado = false;
    this.mensaje = "";
  }
  eliminar(forma: NgForm) {
    // console.log("ngForm", forma);  // error
    for (let user of this.users) {
      if((this.usuario['nit'] == user.nit) && (this.usuario['codigo'] == user.codigo)) {
        console.log("ENCONTRADO", user);
        this._userService.deleteUser( user );
        this.estado = true;
        this.mensaje  = "Eliminado correctamente"
      } 
    }
  }

}
