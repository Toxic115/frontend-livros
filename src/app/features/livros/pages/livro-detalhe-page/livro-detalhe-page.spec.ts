import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { LivroDetalhePage } from './livro-detalhe-page';

describe('LivroDetalhePage', () => {

  let component: LivroDetalhePage;
  let fixture: ComponentFixture<LivroDetalhePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroDetalhePage],
      providers: [
        provideRouter([]),
        provideHttpClient()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LivroDetalhePage);
    component = fixture.componentInstance;
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

});