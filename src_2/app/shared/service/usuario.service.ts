import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Usuario} from '../model/usuario';

@Injectable()
export class UsuarioService {

  apiUsuarios = 'http://localhost:3000/usuarios';
  apiAmigos = 'http://localhost:3000/amigos';
  user = [];
  admin: Usuario;

  constructor(private http: HttpClient) {
  }

  cadastrarAmigo(usuario: Usuario) {
    return this.http.post(this.apiAmigos, usuario);
  }

  getAmigos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiAmigos);
  }

  removerAmigo(idUsuario: number) {
    return this.http.delete(`${this.apiAmigos}/${idUsuario}`);
  }

  cadastrarUsuario(usuario: Usuario) {
    return this.http.post(this.apiUsuarios, usuario);
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUsuarios);
  }

  getUsuario(idUsuario: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUsuarios}/${idUsuario}`);
  }

  removerUsuario(idUsuario: number) {
    return this.http.delete(`${this.apiUsuarios}/${idUsuario}`);
  }

  atualizarUsuario(usuario: Usuario){
    return this.http.patch(`${this.apiUsuarios}/${usuario.id}`, usuario);
  }

 
}