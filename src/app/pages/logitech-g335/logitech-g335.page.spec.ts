import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogitechG335Page } from './logitech-g335.page';

describe('LogitechG335Page', () => {
  let component: LogitechG335Page;
  let fixture: ComponentFixture<LogitechG335Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LogitechG335Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
