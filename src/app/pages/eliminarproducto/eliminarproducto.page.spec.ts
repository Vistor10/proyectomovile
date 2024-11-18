import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarproductoPage } from './eliminarproducto.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

describe('EliminarproductoPage', () => {
  let component: EliminarproductoPage;
  let fixture: ComponentFixture<EliminarproductoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarproductoPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers:[SQLite, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarproductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
