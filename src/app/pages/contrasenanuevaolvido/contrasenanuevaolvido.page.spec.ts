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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
