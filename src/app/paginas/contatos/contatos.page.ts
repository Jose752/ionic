import { Component, OnInit } from '@angular/core';
import { ContatoService } 
  from '../../servicos/contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {
  contatos: any;
  
  constructor(private servico: ContatoService) { }

  ngOnInit() {
    console.log( this.servico.listar() );
    this.servico.listar().subscribe(data => {
      this.contatos = data.map(e => {
        return {
          id: e.payload.doc.id,
          nome: e.payload.doc.data()['nome'],
          telefone: e.payload.doc.data()['telefone'],
          email: e.payload.doc.data()['email']
        }
      })

      console.log(this.contatos);
    });

  }

}
