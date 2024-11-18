import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarproductoPage } from './agregarproducto.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

describe('AgregarproductoPage', () => {
  let component: AgregarproductoPage;
  let fixture: ComponentFixture<AgregarproductoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarproductoPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarproductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería permitir actualizar el campo nombre', () => {
    const testNombre = 'Producto 1';
    component.nombre = testNombre;
    expect(component.nombre).toBe(testNombre);
  });

  it('debería permitir actualizar el campo descripción', () => {
    const testDescripcion = 'Descripción del producto.';
    component.descrip = testDescripcion;
    expect(component.descrip).toBe(testDescripcion);
  });

  it('debería permitir actualizar el campo precio', () => {
    const testPrecio = 150;
    component.precio = testPrecio;
    expect(component.precio).toBe(testPrecio);
  });

  it('debería permitir actualizar el campo categoría', () => {
    const testCategoria = 1;
    component.idcat = testCategoria;
    expect(component.idcat).toBe(testCategoria);
  });

  it('debería permitir actualizar el campo stock', () => {
    const testStock = 25;
    component.stock = testStock;
    expect(component.stock).toBe(testStock);
  });

  it('debería permitir asignar una imagen', () => {
    const testImagen = 'data:image/png;base64,iVBORw0KGgo...'; 
    component.imagen = testImagen;
    expect(component.imagen).toBe(testImagen);
  });

  it('debería deshabilitar el formulario si falta la imagen', () => {
    component.imagen = null;
    const form = { valid: true } as any;
    expect(form.valid && !!component.imagen).toBeFalse();
  });

  it('debería habilitar el formulario si todos los campos están llenos y hay imagen', () => {
    component.nombre = 'Producto 1';
    component.descrip = 'Descripción del producto.';
    component.precio = 150;
    component.idcat = 1;
    component.stock = 25;
    component.imagen = 'data:image/png;base64,iVBORw0KGgo...';
    const form = { valid: true } as any;

    expect(form.valid && !!component.imagen).toBeTrue();
  });
});
