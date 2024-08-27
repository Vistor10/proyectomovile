import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoriasramPage } from './memoriasram.page';

describe('MemoriasramPage', () => {
  let component: MemoriasramPage;
  let fixture: ComponentFixture<MemoriasramPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriasramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
