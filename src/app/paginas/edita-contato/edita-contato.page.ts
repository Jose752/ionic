import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { ContatoService } from '../../servicos/contato.service';

@Component({
  selector: 'app-edita-contato',
  templateUrl: './edita-contato.page.html',
  styleUrls: ['./edita-contato.page.scss'],
})
export class EditaContatoPage implements OnInit {

  nome: string;
  email: string;
  telefone: string;
  constructor(private servico: ContatoService, private nav: NavController) { }

  ngOnInit() {
  }

  processar() {
    console.log("Estou na função processar...");
    let contato = {};

    contato['nome'] = this.nome;
    contato['email'] = this.email;
    contato['telefone'] = this.telefone;

    console.log(contato);
    this.servico.incluir(contato);
    this.nav.navigateForward("contatos");
  }
}
