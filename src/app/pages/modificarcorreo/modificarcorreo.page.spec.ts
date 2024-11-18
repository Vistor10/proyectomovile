import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarcorreoPage } from './modificarcorreo.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

describe('ModificarcorreoPage', () => {
  let component: ModificarcorreoPage;
  let fixture: ComponentFixture<ModificarcorreoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarcorreoPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarcorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería actualizar el campo newEmail al llenarlo', () => {
    const testEmail = 'nuevo@example.com';
    component.newEmail = testEmail;
    expect(component.newEmail).toBe(testEmail);
  });
  it('debería deshabilitar el botón si el campo newEmail está vacío', () => {
    const form = { valid: false } as any; 
    component.newEmail = ''; 

    expect(form.valid).toBeFalse(); 
  });

  it('debería habilitar el botón si el campo newEmail es válido', () => {
    const form = { valid: true } as any; 
    component.newEmail = 'correo@example.com'; 

    expect(form.valid).toBeTrue();
  });
});
