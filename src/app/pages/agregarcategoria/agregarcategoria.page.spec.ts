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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
