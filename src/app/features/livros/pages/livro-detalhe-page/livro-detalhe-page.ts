import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Livro } from '../../models/livro';
import { LivrosService } from '../../services/livros';

@Component({
  selector: 'app-livro-detalhe-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './livro-detalhe-page.html',
  styleUrl: './livro-detalhe-page.css'
})
export class LivroDetalhePage implements OnInit {

  livro?: Livro;
  carregando: boolean = false;
  mensagemErro: string = '';

  constructor(
    private route: ActivatedRoute,
    private livrosService: LivrosService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.buscarLivro(id);
    } else {
      this.mensagemErro = 'Livro não encontrado';
    }
  }

  buscarLivro(id: string) {
    this.carregando = true;
    this.mensagemErro = '';

    this.livrosService.buscarLivroPorId(id).subscribe({
      next: (dados) => {
        this.livro = dados;
        this.carregando = false;

        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.log(erro);
        this.mensagemErro = 'Livro não encontrado';
        this.carregando = false;

        this.cdr.detectChanges();
      }
    });
  }
}