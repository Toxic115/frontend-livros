import { Component } from '@angular/core';
import { ListaLivros } from '../../components/lista-livros/lista-livros';

@Component({
  selector: 'app-livros-page',
  imports: [ListaLivros],
  templateUrl: './livros-page.html',
  styleUrl: './livros-page.css'
})
export class LivrosPage {

}