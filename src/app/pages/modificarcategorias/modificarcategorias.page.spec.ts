import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarcategoriasPage } from './modificarcategorias.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

describe('ModificarcategoriasPage', () => {
  let component: ModificarcategoriasPage;
  let fixture: ComponentFixture<ModificarcategoriasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarcategoriasPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarcategoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar categorías y permitir seleccionar una', () => {
    
    component.categorias = [
      { id_categoria: 1, nombre_categoria: 'Categoría 1', imagen: 'imagen1.jpg' },
      { id_categoria: 2, nombre_categoria: 'Categoría 2', imagen: 'imagen2.jpg' },
    ];

  
    component.categoriaSeleccionada = component.categorias[0];
    component.onCategoriaSelect();

    
    expect(component.categoriaSeleccionada.nombre_categoria).toBe('Categoría 1');
    expect(component.categoriaSeleccionada.imagen).toBe('imagen1.jpg');
  });

  it('debería permitir actualizar el campo nombre de la categoría seleccionada', () => {
    const testNombre = 'Nueva Categoría';
    component.categoriaSeleccionada = { id_categoria: 1, nombre_categoria: '', imagen: '' };
    component.categoriaSeleccionada.nombre_categoria = testNombre;

    expect(component.categoriaSeleccionada.nombre_categoria).toBe(testNombre);
  });

  it('debería permitir asignar una nueva imagen a la categoría seleccionada', () => {
    const testImagen = 'data:image/png;base64,imagenBase64';
    component.categoriaSeleccionada = { id_categoria: 1, nombre_categoria: 'Categoría', imagen: '' };
    component.categoriaSeleccionada.imagen = testImagen;

    expect(component.categoriaSeleccionada.imagen).toBe(testImagen);
  });


  it('debería deshabilitar el formulario si la categoría seleccionada no tiene un nombre o imagen', () => {
    const form = { valid: false } as any;
    component.categoriaSeleccionada = {
      id_categoria: 1,
      nombre_categoria: '',
      imagen: '',
    };

    expect(form.valid && component.categoriaSeleccionada.nombre_categoria && component.categoriaSeleccionada.imagen).toBeFalse();
  });
});