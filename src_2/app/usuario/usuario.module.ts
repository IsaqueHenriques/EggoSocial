import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsuarioService} from '../shared/service/usuario.service';
import {CadastroUsuarioComponent} from './cadastro-usuario/cadastro-usuario.component';
import {AppSocialBaseMaterialModule} from '../shared/app-social-base-material/app-social-base-material.module';
import {ListagemUsuarioComponent} from './listagem-usuario/listagem-usuario.component';
import {RouterModule} from '@angular/router';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { TimelineUsuarioComponent } from './timeline-usuario/timeline-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    AppSocialBaseMaterialModule,
    RouterModule
  ],
  declarations: [CadastroUsuarioComponent, ListagemUsuarioComponent, LoginUsuarioComponent, TimelineUsuarioComponent],
  providers: [UsuarioService]
})
export class UsuarioModule {
}
