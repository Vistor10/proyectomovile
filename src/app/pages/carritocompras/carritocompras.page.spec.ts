import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritocomprasPage } from './carritocompras.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

describe('CarritocomprasPage', () => {
  let component: CarritocomprasPage;
  let fixture: ComponentFixture<CarritocomprasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarritocomprasPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(CarritocomprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

