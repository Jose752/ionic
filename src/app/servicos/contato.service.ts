import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor() { }

  incluir(parametro) {
    console.log("Método incluir");
    console.log(parametro);
  }
}
