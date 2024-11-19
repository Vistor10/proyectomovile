import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialadminPage } from './historialadmin.page';

describe('HistorialadminPage', () => {
  let component: HistorialadminPage;
  let fixture: ComponentFixture<HistorialadminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
