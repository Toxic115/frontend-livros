import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private apiUrl = 'http://localhost:3000/api/livros';

  constructor(private http: HttpClient) { }

  // busca todos os livros, podendo passar um texto de busca opcional
  listarLivros(busca?: string): Observable<Livro[]> {
    if (busca) {
      return this.http.get<Livro[]>(`${this.apiUrl}?busca=${busca}`);
    }
    return this.http.get<Livro[]>(this.apiUrl);
  }

  // busca um livro especifico pelo id
  buscarLivroPorId(id: string): Observable<Livro> {
    return this.http.get<Livro>(`${this.apiUrl}/${id}`);
  }

  // cadastra um novo livro
  cadastrarLivro(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.apiUrl, livro);
  }

  // atualiza um livro existente (usado pra trocar o status, por exemplo)
  atualizarLivro(id: string, livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.apiUrl}/${id}`, livro);
  }

  // exclui um livro
  excluirLivro(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}