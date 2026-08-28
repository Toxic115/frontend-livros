import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { LivrosService } from './livros';

describe('LivrosService', () => {
  let service: LivrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LivrosService,
        provideHttpClient()
      ]
    });

    service = TestBed.inject(LivrosService);
  });

  it('deve criar o service', () => {
    expect(service).toBeTruthy();
  });
});