import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario/usuario';
import { UsuarioService } from '../shared/service/usuario.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService) { }

  cadastrar(){
    this.usuarioService.cadastrarUsuario(this.usuario);
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

}
