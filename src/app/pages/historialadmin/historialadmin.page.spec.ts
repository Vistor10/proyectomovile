import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialadminPage } from './historialadmin.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

describe('HistorialadminPage', () => {
  let component: HistorialadminPage;
  let fixture: ComponentFixture<HistorialadminPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialadminPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
