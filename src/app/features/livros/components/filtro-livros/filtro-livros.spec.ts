import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroLivros } from './filtro-livros';

describe('FiltroLivros', () => {
  let component: FiltroLivros;
  let fixture: ComponentFixture<FiltroLivros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroLivros],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltroLivros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
