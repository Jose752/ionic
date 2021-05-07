import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { AutenticacaoService } from '../../servicos/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  senha: string;

  constructor(private nav: NavController,
              private servico: AutenticacaoService) { }

  ngOnInit() {
  }

  loginNovo() {
    let usuario = {};

    usuario['email'] = this.email;
    usuario['senha'] = this.senha;

    this.servico.login(usuario).then(res => {
      this.nav.navigateForward('inicio');
    }, err => {
      console.log(err);
    });

  
  }
}
