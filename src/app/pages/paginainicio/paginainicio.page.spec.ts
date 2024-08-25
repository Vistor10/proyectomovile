import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginainicioPage } from './paginainicio.page';

describe('PaginainicioPage', () => {
  let component: PaginainicioPage;
  let fixture: ComponentFixture<PaginainicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginainicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
