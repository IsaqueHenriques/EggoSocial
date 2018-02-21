import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CadastroUsuarioComponent} from './usuario/cadastro-usuario/cadastro-usuario.component';
import {ListagemUsuarioComponent} from './usuario/listagem-usuario/listagem-usuario.component';
import { LoginUsuarioComponent } from './usuario/login-usuario/login-usuario.component';
import { TimelineUsuarioComponent } from './usuario/timeline-usuario/timeline-usuario.component';
import { MesaRedondaComponent } from './mesa-redonda/mesa-redonda.component';
const routes: Routes = [
    {
    path: '',
    component: LoginUsuarioComponent
    },{
        path: 'usuario/login',
        component: LoginUsuarioComponent
      },{
        path: 'usuario/timeline',
        component: TimelineUsuarioComponent
      },
      {
        path: 'usuario/login/cadastro',
        component: CadastroUsuarioComponent
      },
      {
        path: 'usuario/timeline/listagem',
        component: ListagemUsuarioComponent
      },
      {
        path: 'usuario/timeline/mesaRedonda',
        component: MesaRedondaComponent
      },
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
