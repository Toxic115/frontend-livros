export interface Livro {
  _id?: string;
  titulo: string;
  autor: string;
  categoria: string;
  ano: number;
  status: string;
  descricao?: string;
}