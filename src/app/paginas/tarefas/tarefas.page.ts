import { Component, OnInit } from '@angular/core';
import { TarefaService } 
  from '../../servicos/tarefa.service';
import { AlertController, NavController } 
  from '@ionic/angular';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
})
export class TarefasPage implements OnInit {
  tarefas: any;

  constructor(private servico: TarefaService, 
              private alerta: AlertController,
              private nav: NavController) { }

  ngOnInit() {
    console.log( this.servico.listar() );
    this.servico.listar().subscribe(data => {
      this.tarefas = data.map(e => {
        return {
          id: e.payload.doc.id,
          nome: e.payload.doc.data()['nome'],
          descricao: e.payload.doc.data()['descricao']
        }
      })

      //console.log(this.tarefas);
    });

  }

  async excluir(objeto) {
    const mensagem = await this.alerta.create({
      header: 'Atenção:',
      message: 'Deseja realmente excluir?',
      buttons: [
        {
          text: 'Sim',
          handler:() => {
            this.servico.excluir(objeto);
          }
        },

        {
          text: 'Não'
        }
      ]
    });

    await mensagem.present();
    //this.servico.excluir(objeto);
  }

  iniciarAlteracao(objeto) {
    this.nav.navigateForward(['edita-tarefa',
      {
        idtarefa: objeto.id,
        nomeTarefa: objeto.nome,
        descTarefa: objeto.descricao
      }
    ]);
  }
}
