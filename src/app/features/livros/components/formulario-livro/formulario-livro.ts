import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Livro } from '../../models/livro';
import { LivrosService } from '../../services/livros';

@Component({
  selector: 'app-formulario-livro',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-livro.html',
  styleUrl: './formulario-livro.css'
})
export class FormularioLivro {

  // avisa o componente pai quando um livro for cadastrado com sucesso
  @Output() livroCadastrado = new EventEmitter<void>();

  // objeto que vai guardar os dados digitados no formulario
  novoLivro: Livro = {
    titulo: '',
    autor: '',
    categoria: '',
    ano: 0,
    status: 'disponivel',
    descricao: ''
  };

  mensagemErro: string = '';

  constructor(private livrosService: LivrosService) { }

  salvarLivro() {
    // validacao basica antes de enviar pra API
    if (!this.novoLivro.titulo || !this.novoLivro.autor || !this.novoLivro.categoria || !this.novoLivro.ano) {
      this.mensagemErro = 'Preencha todos os campos obrigatórios';
      return;
    }

    this.mensagemErro = '';

    this.livrosService.cadastrarLivro(this.novoLivro).subscribe({
      next: () => {
        // limpa o formulario depois de salvar
        this.novoLivro = {
          titulo: '',
          autor: '',
          categoria: '',
          ano: 0,
          status: 'disponivel',
          descricao: ''
        };

        // avisa o componente pai que o livro foi cadastrado
        this.livroCadastrado.emit();
      },
      error: (erro) => {
        console.log(erro);
        this.mensagemErro = 'Erro ao cadastrar o livro. Tente novamente.';
      }
    });
  }
}