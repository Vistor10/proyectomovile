import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarcorreoPage } from './modificarcorreo.page';

describe('ModificarcorreoPage', () => {
  let component: ModificarcorreoPage;
  let fixture: ComponentFixture<ModificarcorreoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarcorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
