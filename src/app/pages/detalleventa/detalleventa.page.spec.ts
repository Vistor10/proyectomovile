import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleventaPage } from './detalleventa.page';

describe('DetalleventaPage', () => {
  let component: DetalleventaPage;
  let fixture: ComponentFixture<DetalleventaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleventaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
