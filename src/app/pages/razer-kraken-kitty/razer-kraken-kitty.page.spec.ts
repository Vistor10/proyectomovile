import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RazerKrakenKittyPage } from './razer-kraken-kitty.page';

describe('RazerKrakenKittyPage', () => {
  let component: RazerKrakenKittyPage;
  let fixture: ComponentFixture<RazerKrakenKittyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RazerKrakenKittyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
