import { Injectable } from '@angular/core';
import { AngularFirestore } 
   from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private firestore: AngularFirestore) { }

  incluir(parametro) {
    console.log("Método incluir");
    console.log(parametro);

    return this.firestore.collection('contatos').add(parametro);
  }

  listar(){
    return this.firestore.collection('contatos').snapshotChanges();
  }
}
