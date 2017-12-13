import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario/usuario';
import { UsuarioService } from '../shared/service/usuario.service';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private service: UsuarioService, private _router: Router) { }

  confirmar(){
    
    if (this.service.logar(this.usuario)){
      
      console.log(this.service.admin);
      this._router.navigate(['/timeline']);
    }
  
    this.usuario.email = '';
    this.usuario.senha = '';
  }

  ngOnInit() {
  }

}
