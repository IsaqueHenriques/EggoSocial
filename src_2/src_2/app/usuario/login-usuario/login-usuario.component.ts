import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/model/usuario';
import { UsuarioService } from '../../shared/service/usuario.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router/src/directives/router_link';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

    usuario: Usuario = new Usuario();
    dataSource = [];

    constructor(private usuarioService: UsuarioService, private router: Router) { }
  
    ngOnInit() {
    }
  
    logar(){
        this.usuarioService.getUsuarios().subscribe(
            usuarios => {
              this.dataSource = usuarios;
            }
          );  
        
          for(let i = 0;i < this.dataSource.length;i++){
            if(this.dataSource[i].email == this.usuario.email && this.dataSource[i].senha == this.usuario.senha ){
              this.usuarioService.admin = this.dataSource[i];  
              this.router.navigate(['usuario/timeline']);
            }
          }
        
    }

}
