import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../../models/livro';
import { LivrosService } from '../../services/livros';
import { LivroCard } from '../livro-card/livro-card';
import { FiltroLivros } from '../filtro-livros/filtro-livros';
import { FormularioLivro } from '../formulario-livro/formulario-livro';

@Component({
  selector: 'app-lista-livros',
  imports: [CommonModule, LivroCard, FiltroLivros, FormularioLivro],
  templateUrl: './lista-livros.html',
  styleUrl: './lista-livros.css'
})
export class ListaLivros implements OnInit {

  livros: Livro[] = [];
  carregando: boolean = false;
  mensagemErro: string = '';

  constructor(
    private livrosService: LivrosService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.buscarLivros();
  }

  buscarLivros(termoBusca?: string) {
    this.carregando = true;
    this.mensagemErro = '';

    this.livrosService.listarLivros(termoBusca).subscribe({
      next: (dados) => {
        this.livros = dados;
        this.carregando = false;

        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.log(erro);
        this.mensagemErro = 'Erro ao carregar a lista de livros';
        this.carregando = false;

        this.cdr.detectChanges();
      }
    });
  }

  // chamado quando o FiltroLivros emite um evento de busca
  aoFiltrar(termo: string) {
    this.buscarLivros(termo);
  }

  // chamado quando o FormularioLivro cadastra um livro novo
  aoCadastrar() {
    this.buscarLivros();
  }

  // chamado quando o LivroCard emite um pedido de exclusao
  aoExcluir(id: string) {
    this.livrosService.excluirLivro(id).subscribe({
      next: () => {
        this.buscarLivros();
      },
      error: (erro) => {
        console.log(erro);
        this.mensagemErro = 'Erro ao excluir o livro';

        this.cdr.detectChanges();
      }
    });
  }
}