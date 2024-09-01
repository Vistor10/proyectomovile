import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarproductoPage } from './eliminarproducto.page';

describe('EliminarproductoPage', () => {
  let component: EliminarproductoPage;
  let fixture: ComponentFixture<EliminarproductoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarproductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
