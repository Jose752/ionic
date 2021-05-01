import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  incluir(objeto) {
    console.log("Método incluir");
    console.log(objeto);
  }
}
