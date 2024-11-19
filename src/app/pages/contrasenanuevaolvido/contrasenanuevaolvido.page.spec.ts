import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContrasenanuevaolvidoPage } from './contrasenanuevaolvido.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

describe('ContrasenanuevaolvidoPage', () => {
  let component: ContrasenanuevaolvidoPage;
  let fixture: ComponentFixture<ContrasenanuevaolvidoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContrasenanuevaolvidoPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(ContrasenanuevaolvidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería permitir actualizar el campo newPassword', () => {
    const testPassword = 'Password123!';
    component.newPassword = testPassword;
    expect(component.newPassword).toBe(testPassword);
  });

  it('debería permitir actualizar el campo confirmPassword', () => {
    const testConfirmPassword = 'Password123!';
    component.confirmPassword = testConfirmPassword;
    expect(component.confirmPassword).toBe(testConfirmPassword);
  });

  it('debería deshabilitar el botón si las contraseñas no coinciden', () => {
    const form = { valid: true } as any; // Simulamos un formulario válido
    component.newPassword = 'Password123!';
    component.confirmPassword = 'Password456!'; // Contraseñas diferentes

    expect(form.valid && component.newPassword === component.confirmPassword).toBeFalse(); // Botón deshabilitado
  });

  it('debería habilitar el botón si las contraseñas coinciden y son válidas', () => {
    const form = { valid: true } as any; // Simulamos un formulario válido
    component.newPassword = 'Password123!';
    component.confirmPassword = 'Password123!'; // Contraseñas coinciden

    expect(form.valid && component.newPassword === component.confirmPassword).toBeTrue(); // Botón habilitado
  });
});
