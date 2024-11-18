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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
