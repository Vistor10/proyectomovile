import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginainicioPage } from './paginainicio.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PaginainicioPage', () => {
  let component: PaginainicioPage;
  let fixture: ComponentFixture<PaginainicioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginainicioPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient, HttpHandler]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginainicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

