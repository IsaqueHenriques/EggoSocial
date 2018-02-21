import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Posts } from '../model/posts';

@Injectable()
export class PostagemService {

  apiPosts = 'http://localhost:3000/postagens';
  posts = [];

  constructor(private http: HttpClient) {
  }

  salvarPostagem(mensagem: Posts) {
    return this.http.post(this.apiPosts, mensagem);
  }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.apiPosts);
  }

  removerUsuario(idPost: Posts) {
    return this.http.delete(`${this.apiPosts}/${idPost}`);
  }

  atualizarPostagem(postagem: Posts){
    return this.http.patch(`${this.apiPosts}/${postagem.id}`, postagem);
  }

}
