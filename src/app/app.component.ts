import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadPessoSimples';
  nome = null;
  pessoas = [
    'Pessoa 1',
    'Pessoa 2'
  ];
  adicionar(nome){
    this.pessoas.push(this.nome);
    this.nome = null;
  }
}
