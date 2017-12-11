import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/service/usuario.service';

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css']
})
export class UsuarioListagemComponent implements OnInit {

  amigos: Array<string> = this.service.amigos;

  constructor(private service: UsuarioService) { }

  excluir(y){
    this.service.amigos.splice(y,1);
  }

  ngOnInit() {
  }

}
