import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobrenosotrosPage } from './sobrenosotros.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

describe('SobrenosotrosPage', () => {
  let component: SobrenosotrosPage;
  let fixture: ComponentFixture<SobrenosotrosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SobrenosotrosPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(SobrenosotrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});