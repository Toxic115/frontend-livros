import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosPage } from './livros-page';

describe('LivrosPage', () => {
  let component: LivrosPage;
  let fixture: ComponentFixture<LivrosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivrosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LivrosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
