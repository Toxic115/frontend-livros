import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtro-livros',
  imports: [FormsModule],
  templateUrl: './filtro-livros.html',
  styleUrl: './filtro-livros.css'
})
export class FiltroLivros {

  // avisa o componente pai (ListaLivros) qual termo foi digitado
  @Output() buscar = new EventEmitter<string>();

  termoBusca: string = '';

  onBuscar() {
    this.buscar.emit(this.termoBusca);
  }

  onLimpar() {
    this.termoBusca = '';
    this.buscar.emit('');
  }
}