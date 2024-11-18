import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialcomprausuarioPage } from './historialcomprausuario.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

describe('DetalleventaPage', () => {
  let component: HistorialcomprausuarioPage;
  let fixture: ComponentFixture<HistorialcomprausuarioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialcomprausuarioPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialcomprausuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
