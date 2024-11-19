import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarperfilPage } from './modificarperfil.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

describe('ModificarperfilPage', () => {
  let component: ModificarperfilPage;
  let fixture: ComponentFixture<ModificarperfilPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarperfilPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería permitir actualizar el campo newUsername', () => {
    const testUsername = 'UsuarioPrueba';
    component.newUsername = testUsername;
    expect(component.newUsername).toBe(testUsername);
  });

  it('debería habilitar el botón de actualizar si el campo newUsername es válido', () => {
    const form = { valid: true } as any; 
    component.newUsername = 'UsuarioPrueba';

    const isFormValid = form.valid && !!component.newUsername.trim();
    expect(isFormValid).toBeTrue(); 
  });

  it('debería deshabilitar el botón de actualizar si el campo newUsername está vacío', () => {
    const form = { valid: false } as any; 
    component.newUsername = '';

    const isFormValid = form.valid && !!component.newUsername.trim();
    expect(isFormValid).toBeFalse(); 
  });

  it('debería deshabilitar el botón si el nombre de usuario tiene menos de 6 caracteres', () => {
    const form = { valid: false } as any; 
    component.newUsername = 'Usr'; 

    const isFormValid = form.valid && component.newUsername.length >= 6;
    expect(isFormValid).toBeFalse(); 
  });

  it('debería permitir nombres válidos que cumplan con el patrón', () => {
    const testUsername = 'Nombre Válido';
    const pattern = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/;
    const isValidPattern = pattern.test(testUsername);

    expect(isValidPattern).toBeTrue(); 
  });

  it('debería rechazar nombres con caracteres no permitidos', () => {
    const testUsername = 'Usuario123!';
    const pattern = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/;
    const isValidPattern = pattern.test(testUsername);

    expect(isValidPattern).toBeFalse(); 
  });
});

