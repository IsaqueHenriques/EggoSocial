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
  posts: Posts[] =[];
  sugestoes = [];
  mensagem: string;

  usuario: Usuario = new Usuario();
  postagem: Posts = new Posts();

  constructor(private postService: PostagemService,private usuarioService: UsuarioService) {
    this.postService.getPosts().subscribe(
      posts => {
        this.posts = posts;
      }
    );  

    this.usuarioService.getUsuarios().subscribe(
      am => {
        this.sugestoes = am;
      }
    );
   }


   salvarAmigo(i){

    this.usuarioService.cadastrarAmigo(this.sugestoes[i]).subscribe(
      sucesso => {
        console.log('Amigo cadastrado com sucesso!');
        this.sugestoes.splice(i , 1);
      },
      erro => {
        console.log(erro);
      }
    );
   }

  postar_mensagem(){
    this.postagens_mensagem.mensagem = this.mensagem;
    this.postagens_mensagem.curtidas = [];
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

  curtirPostagem(postagem:Posts){
    if(postagem.curtidas==null)
      postagem.curtidas = [];

    var curtiu = false;

    for(var i=0;i<postagem.curtidas.length;i++)
      if(postagem.curtidas[i].id==this.usuario.id)
         curtiu = true;

    if(!curtiu){
      postagem.curtidas.push(this.usuario);

      this.postService.atualizarPostagem(postagem).subscribe(
        sucesso => {
          console.log('Postagem ' + postagem.id + ' curtida com sucesso!');

          this.postService.getPosts();
        },
        erro => {
          console.log(erro);
        }
      );
    }
  }

  ngOnInit() {
  }

}
