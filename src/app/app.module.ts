import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioTimelineComponent } from './usuario-timeline/usuario-timeline.component';
import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';
import { ImagensComponent } from './shared/imagens/imagens.component';
import { UsuarioServiveComponent } from './shared/usuario-servive/usuario-servive.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioLoginComponent,
    UsuarioCadastroComponent,
    UsuarioTimelineComponent,
    UsuarioListagemComponent,
    ImagensComponent,
    UsuarioServiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
