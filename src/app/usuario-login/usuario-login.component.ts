import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario/usuario';
import { UsuarioService } from '../shared/service/usuario.service';
import { RouterLink } from '@angular/router/src/directives/router_link';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  email: string = '';
  senha: string = '';
  mensagem: string = '';

  constructor(private service: UsuarioService) { }

  confirmar(){
    this.usuario = this.service.admin;
    if (this.email != this.service.admin.email || this.senha != this.service.admin.senha){
      this.mensagem = 'false, '+this.service.admin.email+' '+this.service.admin.senha}
    else{
      this.mensagem = 'true'}
  
    this.email = '';
    this.senha = '';
  }

  ngOnInit() {
  }

}
