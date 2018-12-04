import { Injectable } from '@angular/core';
// firebase
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/user';  // interface
import { Observable } from 'rxjs';  // sirve para no tener que refrescar la pagina
// pipes
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersCollection: AngularFirestoreCollection<User>;  // colleccion de la base de datos
  users: Observable<User[]>;  // areglo
  userDoc: AngularFirestoreDocument<User>;  // una unica colleccion

  constructor( public db: AngularFirestore ) {
    // this.users = this.db.collection('users').valueChanges();
    this.usersCollection = this.db.collection('users'); // uso esta colleccion para hacer las consultas
    this.users = this.usersCollection.snapshotChanges().pipe( map( actions => {
      return actions.map( a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data; // obtenemos el id, que se encuentra en la base de datos
      });
    }));
   }
   // metodo para obtener los Users de nuestra base de datos
   getUsers() {
     return this.users;
   }
   // metodo eliminar una colleccion de Users
   deleteUser( user: User ) {
     this.userDoc = this.db.doc(`users/${user.id}`);
     this.userDoc.delete();
   }
   // metodo para agregar una colleccion a USERS
   addUser( user: User ) {
     this.usersCollection.add( user );
   }
   // metodo para actualizar User
   updateUser( user: User ) {
     this.userDoc = this.db.doc(`users/${user.id}`);
     this.userDoc.update( user );
   }
}
