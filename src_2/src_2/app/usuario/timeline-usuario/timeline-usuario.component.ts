import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../../shared/service/postagem.service';
import { Posts } from '../../shared/model/posts';
import { Usuario } from '../../shared/model/usuario';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'app-timeline-usuario',
  templateUrl: './timeline-usuario.component.html',
  styleUrls: ['./timeline-usuario.component.css']
})
export class TimelineUsuarioComponent implements OnInit {

  postagens_mensagem: Posts = new Posts();
  admin: Usuario = this.usuarioService.admin;
  postagens_foto: Object;
  posts = [];
  mensagem: string;

  constructor(private postService: PostagemService,private usuarioService: UsuarioService) {
    this.postService.getPosts().subscribe(
      posts => {
        this.posts = posts;
      }
    );  
   }

  postar_mensagem(){
    this.postagens_mensagem.mensagem = this.mensagem;
    this.postagens_mensagem.curtidas = 0;
    this.postService.salvarPostagem(this.postagens_mensagem).subscribe(
      sucesso => {
        console.log('Post salvo com sucesso!');
        this.mensagem ='';
        this.postagens_mensagem = new Posts();
        this.postService.getPosts().subscribe(
          posts => {
            this.posts = posts;
          }
        );  
      },
      erro => {
        console.log(erro);
      }
    );
  }

  ngOnInit() {
  }

}
