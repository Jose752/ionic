import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { AutenticacaoService } 
  from '../../servicos/autenticacao.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private nav: NavController, 
              private servico: AutenticacaoService) { }

  ngOnInit() {
  }

  homesair() {


    this.servico.sair().then(res => {
      this.nav.navigateForward('home');
    }, err => {
      console.log(err);
    });
  }
}
