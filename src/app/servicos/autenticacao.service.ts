import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private auth: AngularFireAuth) { }

  cadastrar(usr){
    return new Promise<any>( (resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(usr.email,
        usr.senha).then(
          res => resolve(res),
          err => reject(err)
        )
    } );
  }

  login(usr){
    return new Promise<any>( (resolve, reject) => {
      this.auth.signInWithEmailAndPassword(usr.email,
        usr.senha).then(
          res => resolve(res),
          err => reject(err)
        )
    } );
  }

  sair(){
    return new Promise<any>( (resolve, reject) => {
      this.auth.signOut().then(
        res => resolve(res),
        err => reject(err)
      )
    } );
  }
}
