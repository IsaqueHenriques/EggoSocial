import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioService } from './shared/service/usuario.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioTimelineComponent } from './usuario-timeline/usuario-timeline.component';
import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioLoginComponent,
    UsuarioCadastroComponent,
    UsuarioTimelineComponent,
    UsuarioListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
