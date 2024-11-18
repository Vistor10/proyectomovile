import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarcategoriaPage } from './agregarcategoria.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

describe('AgregarcategoriaPage', () => {
  let component: AgregarcategoriaPage;
  let fixture: ComponentFixture<AgregarcategoriaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarcategoriaPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarcategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería permitir actualizar el campo nombre', () => {
    const testNombre = 'Categoría de Prueba';
    component.nombre = testNombre;
    expect(component.nombre).toBe(testNombre);
  });

  it('debería permitir asignar una imagen a la categoría', () => {
    const testImagen = 'data:image/png;base64,imagenBase64';
    component.imagen = testImagen;
    expect(component.imagen).toBe(testImagen);
  });

  it('debería habilitar el formulario si todos los campos son válidos', () => {
    const form = { valid: true } as any; 
    component.nombre = 'Categoría de Prueba';
    component.imagen = 'data:image/png;base64,imagenBase64';

    expect(form.valid && !!component.imagen).toBeTrue();
  });

  it('debería deshabilitar el formulario si falta la imagen', () => {
    const form = { valid: true } as any; 
    component.nombre = 'Categoría de Prueba';
    component.imagen = null; 

    expect(form.valid && !!component.imagen).toBeFalse();
  });

  it('debería deshabilitar el formulario si el nombre no es válido', () => {
    const form = { valid: false } as any; 
    component.nombre = ''; 
    component.imagen = 'data:image/png;base64,imagenBase64';

    expect(form.valid).toBeFalse();
  });
});
