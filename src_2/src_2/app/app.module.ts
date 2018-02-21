import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {
  MatInputModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule,
  MatIconModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {UsuarioModule} from './usuario/usuario.module';
import { MesaRedondaComponent } from './mesa-redonda/mesa-redonda.component';

@NgModule({
  declarations: [
    AppComponent,
    MesaRedondaComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    MatInputModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatIconModule,
    UsuarioModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
