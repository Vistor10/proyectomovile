import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuentesdepoderPage } from './fuentesdepoder.page';

describe('FuentesdepoderPage', () => {
  let component: FuentesdepoderPage;
  let fixture: ComponentFixture<FuentesdepoderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FuentesdepoderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
