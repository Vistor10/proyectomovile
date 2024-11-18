import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GabinetesPage } from './gabinetes.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

describe('GabinetesPage', () => {
  let component: GabinetesPage;
  let fixture: ComponentFixture<GabinetesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GabinetesPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(GabinetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
