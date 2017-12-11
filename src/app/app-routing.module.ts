import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';
import { UsuarioTimelineComponent } from './usuario-timeline/usuario-timeline.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';

const routes: Routes = [
  {
    path: '', component: UsuarioLoginComponent
  },
  {
    path: 'login', component: UsuarioLoginComponent
  },
  {
    path: 'cadastro', component: UsuarioCadastroComponent
  },
  {
    path: 'timeline', component: UsuarioTimelineComponent
  },
  {  
    path: 'timeline/listagem', component: UsuarioListagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
