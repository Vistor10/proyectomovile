import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuentesdepoderPage } from './fuentesdepoder.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

describe('FuentesdepoderPage', () => {
  let component: FuentesdepoderPage;
  let fixture: ComponentFixture<FuentesdepoderPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuentesdepoderPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(FuentesdepoderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
