import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería permitir actualizar el campo username', () => {
    const testUsername = 'usuarioPrueba';
    component.username = testUsername;
    expect(component.username).toBe(testUsername);
  });

  it('debería permitir actualizar el campo email', () => {
    const testEmail = 'test@example.com';
    component.email = testEmail;
    expect(component.email).toBe(testEmail);
  });

  it('debería permitir actualizar el campo password', () => {
    const testPassword = 'Password123!';
    component.password = testPassword;
    expect(component.password).toBe(testPassword);
  });

  it('debería permitir actualizar el campo confirmPassword', () => {
    const testConfirmPassword = 'Password123!';
    component.confirmPassword = testConfirmPassword;
    expect(component.confirmPassword).toBe(testConfirmPassword);
  });

  it('debería permitir actualizar el campo rut', () => {
    const testRUT = '12345678-9';
    component.rut = testRUT;
    expect(component.rut).toBe(testRUT);
  });

  it('debería verificar que las contraseñas coincidan', () => {
    component.password = 'Password123!';
    component.confirmPassword = 'Password123!';
    expect(component.passwordsMatch()).toBeTrue();
  });

  it('debería verificar que las contraseñas no coincidan', () => {
    component.password = 'Password123!';
    component.confirmPassword = 'DifferentPassword!';
    expect(component.passwordsMatch()).toBeFalse();
  });

  it('debería verificar que un RUT válido sea reconocido como válido', () => {
    const validRUT = '12345678-9';
    expect(component.isValidRUT(validRUT)).toBeTrue();
  });

  it('debería verificar que un RUT inválido sea reconocido como inválido', () => {
    const invalidRUT = '12-3456789';
    expect(component.isValidRUT(invalidRUT)).toBeFalse();
  });
});
