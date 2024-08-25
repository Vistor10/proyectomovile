import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GabinetesPage } from './gabinetes.page';

describe('GabinetesPage', () => {
  let component: GabinetesPage;
  let fixture: ComponentFixture<GabinetesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GabinetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
