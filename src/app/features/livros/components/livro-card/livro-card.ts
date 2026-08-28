import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Livro } from '../../models/livro';

@Component({
  selector: 'app-livro-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './livro-card.html',
  styleUrl: './livro-card.css'
})
export class LivroCard {

  // recebe o livro do componente pai (ListaLivros)
  @Input() livro!: Livro;

  // avisa o pai quando o usuario clicar em excluir
  @Output() excluir = new EventEmitter<string>();

  onExcluir() {
    if (this.livro._id) {
      this.excluir.emit(this.livro._id);
    }
  }
}