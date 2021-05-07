import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { TarefaService } 
  from '../../servicos/tarefa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edita-tarefa',
  templateUrl: './edita-tarefa.page.html',
  styleUrls: ['./edita-tarefa.page.scss'],
})
export class EditaTarefaPage implements OnInit {

  id: string;
  nome: string;
  descricao: string;
  constructor(private servico: TarefaService,
              private nav: NavController,
              private rota: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.rota.snapshot.params['idtarefa'];
    this.nome = this.rota.snapshot.params['nomeTarefa'];
    this.descricao = this.rota.snapshot.params['descTarefa']
  }

  processar() {
    console.log("Estou na função processar...");
    let tarefa = {};

    tarefa['nome'] = this.nome;
    tarefa['descricao'] = this.descricao;

    console.log(tarefa);
    if (this.id == null) {
      this.servico.incluir(tarefa);
    } else {
      this.servico.alterar(tarefa, this.id);
    }
    this.nav.navigateForward("tarefas");
  }
}
