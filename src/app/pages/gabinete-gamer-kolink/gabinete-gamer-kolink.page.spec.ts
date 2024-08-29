import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GabineteGamerKolinkPage } from './gabinete-gamer-kolink.page';

describe('GabineteGamerKolinkPage', () => {
  let component: GabineteGamerKolinkPage;
  let fixture: ComponentFixture<GabineteGamerKolinkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GabineteGamerKolinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
