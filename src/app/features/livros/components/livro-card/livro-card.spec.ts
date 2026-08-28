import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LivroCard } from './livro-card';

describe('LivroCard', () => {

  let component: LivroCard;
  let fixture: ComponentFixture<LivroCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroCard],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LivroCard);
    component = fixture.componentInstance;

    component.livro = {
      _id: '123',
      titulo: 'Livro Teste',
      autor: 'Autor Teste',
      categoria: 'Teste',
      ano: 2026,
      status: 'disponivel'
    };

    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

});