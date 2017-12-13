import { Injectable } from '@angular/core';
import { Usuario } from '../usuario/usuario'

@Injectable()
export class UsuarioService {

  usuario : Array<Usuario> = [];
  admin: Usuario;
  amigos: Array<string> = [];

  constructor() { }

  cadastrarUsuario(usuario: Usuario){
    this.usuario.push(usuario);

    console.log("\nUsuario Cadastrado: ")
    console.log(usuario);
  }

  adicionarAmigo(usuario: string){
    this.amigos.push(usuario);
  }

  logar(usuario){
    for (var i = this.usuario.length - 1; i >= 0; i--){
      if(this.usuario[i].email==usuario.email && this.usuario[i].senha==usuario.senha){
        this.admin = this.usuario[i];
        return true;}
    }

    return false;
  }
}
