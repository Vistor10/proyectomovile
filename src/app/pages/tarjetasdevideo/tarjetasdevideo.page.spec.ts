import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetasdevideoPage } from './tarjetasdevideo.page';

describe('TarjetasdevideoPage', () => {
  let component: TarjetasdevideoPage;
  let fixture: ComponentFixture<TarjetasdevideoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasdevideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
