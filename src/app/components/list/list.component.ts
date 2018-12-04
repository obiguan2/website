import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users = [];
  editandoUser: User;
  editando: boolean = false;

  constructor( public _userService: UserService ) { }

  ngOnInit() {
    this._userService.getUsers().subscribe( users => {
      // console.log( users );
      this.users = users; // obtenemos los datos de nuestra base de datos
    });
  }
  //metodo para eliminar el USER
  eliminarUser( evento, user  ) {
    this._userService.deleteUser( user );
  }
  // metodo para editar el USER
  editarUser( event, user) {
    this.editandoUser = user;
    this.editando = true;
  }
  ocultar() {
    if(this.editando) {
      this.editando = false;
    }
  }
  
}
