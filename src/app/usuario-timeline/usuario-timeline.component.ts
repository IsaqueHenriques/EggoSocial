import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/service/usuario.service';
import { Usuario } from '../shared/usuario/usuario';

@Component({
  selector: 'app-usuario-timeline',
  templateUrl: './usuario-timeline.component.html',
  styleUrls: ['./usuario-timeline.component.css']
})
export class UsuarioTimelineComponent implements OnInit {

  postagens: Array<object> = [];
  sugestoes: Array<string> = ['Hulk','Thor','Loki','America','Formiga','Spider','Will','Mike','Eleven','John Snow','Aria'];
  nome: string = this.service.admin.nome;
  post: string;

  constructor(private service: UsuarioService) { }

  postar(){
    this.postagens.push({nome: this.nome, post: this.post});
    console.log(this.service.admin);
    this.post = '';
  }

  adicionarAmigo(x){
    this.service.adicionarAmigo(this.sugestoes[x]);
    this.apagar(x);
  }

  apagar(y){
    this.sugestoes.splice(y,1);
  }

  ngOnInit() {
  }

}
