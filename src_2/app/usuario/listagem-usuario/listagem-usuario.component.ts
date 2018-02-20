import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/service/usuario.service';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.css']
})
export class ListagemUsuarioComponent implements OnInit {

  dataSource = new MatTableDataSource<Usuario>();
  displayedColumns = ['nome', 'acoes'];

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      usuarios => {
        this.dataSource = new MatTableDataSource<Usuario>(usuarios);
      }
    );
  }

  removerUsuario(usuario: Usuario, index: number) {
    this.usuarioService.removerUsuario(usuario.id).subscribe(
      sucesso => {
        console.log('Removido usuário: ' + usuario.nome);
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource<Usuario>(this.dataSource.data);
      }, erro => {
        console.log(erro);
      }
    );

  }
}

