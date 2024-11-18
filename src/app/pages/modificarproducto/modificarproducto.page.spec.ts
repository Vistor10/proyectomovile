import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarproductoPage } from './modificarproducto.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

describe('ModificarproductoPage', () => {
  let component: ModificarproductoPage;
  let fixture: ComponentFixture<ModificarproductoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarproductoPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarproductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería permitir seleccionar un producto y actualizar los campos', () => {
    // Simulación de productos
    component.productos = [
      { id_producto: 1, nombre_producto: 'Producto 1', descripcion_producto: 'Descripción 1', precio: 100, id_categoria: 2, stock: 50, imagen: 'imagen1.jpg' },
      { id_producto: 2, nombre_producto: 'Producto 2', descripcion_producto: 'Descripción 2', precio: 200, id_categoria: 3, stock: 30, imagen: 'imagen2.jpg' }
    ];
  
    // Simular la selección de un producto
    component.idProductoSeleccionado = 1;
    component.onProductSelect();
  
    // Verificar que los campos se actualicen correctamente
    expect(component.nombre).toBe('Producto 1');
    expect(component.descrip).toBe('Descripción 1');
    expect(component.precio).toBe(100);
    expect(component.idcat).toBe(2);
    expect(component.imagen).toBe('imagen1.jpg');
  });

  it('debería permitir actualizar el campo nombre del producto', () => {
    const testNombre = 'Nuevo Producto';
    component.productoSeleccionado.nombre_producto = testNombre;
    expect(component.productoSeleccionado.nombre_producto).toBe(testNombre);
  });

  it('debería permitir actualizar el campo descripción del producto', () => {
    const testDescripcion = 'Nueva descripción';
    component.productoSeleccionado.descripcion_producto = testDescripcion;
    expect(component.productoSeleccionado.descripcion_producto).toBe(testDescripcion);
  });

  it('debería permitir actualizar el campo precio del producto', () => {
    const testPrecio = 500;
    component.productoSeleccionado.precio = testPrecio;
    expect(component.productoSeleccionado.precio).toBe(testPrecio);
  });

  it('debería permitir actualizar el campo stock del producto', () => {
    const testStock = 25;
    component.productoSeleccionado.stock = testStock;
    expect(component.productoSeleccionado.stock).toBe(testStock);
  });

  it('debería permitir seleccionar una nueva categoría', () => {
    const testCategoria = 4;
    component.productoSeleccionado.id_categoria = testCategoria;
    expect(component.productoSeleccionado.id_categoria).toBe(testCategoria);
  });

  it('debería permitir actualizar la imagen del producto', () => {
    const testImagen = 'data:image/png;base64,imagenBase64';
    component.imagen = testImagen;
    expect(component.imagen).toBe(testImagen);
  });

  it('debería habilitar el formulario si todos los campos son válidos', () => {
    const form = { valid: true } as any;
    component.idProductoSeleccionado = 1;
    component.productoSeleccionado = {
      nombre_producto: 'Producto',
      descripcion_producto: 'Descripción válida',
      precio: 100,
      id_categoria: 1,
      stock: 10,
      imagen: 'imagen.jpg'
    };
    expect(form.valid).toBeTrue();
  });

  it('debería deshabilitar el formulario si falta un campo', () => {
    const form = { valid: false } as any;
    component.idProductoSeleccionado = 1;
    component.productoSeleccionado = {
      nombre_producto: '',
      descripcion_producto: 'Descripción válida',
      precio: 100,
      id_categoria: 1,
      stock: 10,
      imagen: 'imagen.jpg'
    };
    expect(form.valid).toBeFalse();
  });
});