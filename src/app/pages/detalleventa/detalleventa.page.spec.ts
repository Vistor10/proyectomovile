import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleventaPage } from './detalleventa.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

describe('DetalleventaPage', () => {
  let component: DetalleventaPage;
  let fixture: ComponentFixture<DetalleventaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleventaPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleventaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
