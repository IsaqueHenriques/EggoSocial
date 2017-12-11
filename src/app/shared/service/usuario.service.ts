import { Injectable } from '@angular/core';
import { Usuario } from '../usuario/usuario'

@Injectable()
export class UsuarioService {

  admin: Usuario;
  amigos: Array<string> = [];

  constructor() { }

  cadastrarUsuario(usuario: Usuario){
    this.admin = usuario;
  }

  adicionarAmigo(usuario: string){
    this.amigos.push(usuario);
  }

}
